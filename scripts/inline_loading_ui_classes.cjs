// Convert Loading UI's Tailwind utility classes to React style props at build time.
// Each loader gets only its own class styles, keyframes and variable defaults.

const fs = require("node:fs");
const path = require("node:path");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const [componentsDir, cssFile, helperFile] = process.argv.slice(2);
if (!componentsDir || !cssFile || !helperFile) {
  throw new Error("Usage: node inline_loading_ui_classes.cjs COMPONENTS CSS HELPER");
}

function reactProperty(property) {
  if (property.startsWith("--")) return property;
  if (property === "float") return "cssFloat";
  if (property.startsWith("-webkit-")) {
    property = "Webkit-" + property.slice(8);
  }
  return property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

const styles = Object.create(null);
const customPropertyDefaults = Object.create(null);
function collectCustomPropertyDefaults(cssText) {
  const root = postcss.parse(cssText);
  root.walkAtRules("property", (rule) => {
    const initialValue = rule.nodes?.find(
      (node) => node.type === "decl" && node.prop === "initial-value",
    );
    if (rule.params.startsWith("--") && initialValue) {
      customPropertyDefaults[rule.params] = initialValue.value;
    }
  });
  root.walkRules((rule) => {
    if (!rule.selector.includes(":root") && !rule.selector.includes(":host")) return;
    rule.walkDecls((declaration) => {
      if (declaration.prop.startsWith("--")) {
        customPropertyDefaults[declaration.prop] = declaration.value;
      }
    });
  });
}

function inlineCustomPropertyDefault(value) {
  const match = /^var\((--[^,)]+)\)$/.exec(value);
  return match && customPropertyDefaults[match[1]] !== undefined
    ? customPropertyDefaults[match[1]]
    : value;
}

function collectStyles(cssText) {
  postcss.parse(cssText).walkRules((rule) => {
    selectorParser((selectors) => {
      selectors.each((selector) => {
        if (selector.nodes.length !== 1 || selector.nodes[0].type !== "class") return;
        const name = selector.nodes[0].value;
        const declarations = (styles[name] ??= {});
        rule.walkDecls((declaration) => {
          declarations[reactProperty(declaration.prop)] = inlineCustomPropertyDefault(
            declaration.value,
          );
        });
      });
    }).processSync(rule.selector);
  });
}
const generatedCss = fs.readFileSync(cssFile, "utf8");
collectCustomPropertyDefaults(generatedCss);
collectStyles(generatedCss);
for (const file of fs.readdirSync(componentsDir).filter((name) => name.endsWith(".tsx"))) {
  const source = fs.readFileSync(path.join(componentsDir, file), "utf8");
  for (const match of source.matchAll(/<style>\s*\{\s*`([\s\S]*?)`\s*\}\s*<\/style>/g)) {
    if (!match[1].includes("${")) collectStyles(match[1]);
  }
}

function helperSource(selected) {
  return `const styles = ${JSON.stringify(selected)};\n` +
  `export function mergeClassStyle(classes, existing) {\n` +
  `  const result = {};\n` +
  `  if (typeof classes === "string") {\n` +
  `    for (const name of classes.split(/\\s+/)) Object.assign(result, styles[name]);\n` +
  `  }\n` +
  `  return Object.assign(result, existing || {});\n` +
  `}\n`;
}

function stylesheetFor(source) {
  const variables = new Set([...source.matchAll(/var\((--[\w-]+)/g)].map((match) => match[1]));
  // Defaults may refer to other defaults (e.g. a shadow's Tailwind variables).
  for (const name of variables) {
    for (const match of (customPropertyDefaults[name] || "").matchAll(/var\((--[\w-]+)/g)) variables.add(match[1]);
  }
  const root = postcss.parse(generatedCss);
  root.walkAtRules("keyframes", (rule) => { if (!source.includes(rule.params)) rule.remove(); });
  root.walkAtRules("property", (rule) => { if (!variables.has(rule.params)) rule.remove(); });
  root.walkRules((rule) => {
    if (rule.parent.type === "atrule" && rule.parent.name === "keyframes") return;
    // Utility classes have been inlined. Keep only the required variable defaults.
    if (!rule.selector.includes(":root") && !rule.selector.includes(":host") && !rule.selector.startsWith("*")) {
      rule.remove();
      return;
    }
    rule.walkDecls((decl) => { if (!variables.has(decl.prop)) decl.remove(); });
    if (!rule.nodes.length) rule.remove();
  });
  function removeEmpty(node) {
    for (const child of [...(node.nodes || [])]) {
      removeEmpty(child);
      if (child.type === "comment" || (child.nodes && !child.nodes.length)) child.remove();
    }
  }
  removeEmpty(root);
  return root.toString();
}

let converted = 0;
const unknown = new Set();
for (const file of fs.readdirSync(componentsDir).filter((name) => name.endsWith(".tsx"))) {
  const filepath = path.join(componentsDir, file);
  const source = fs.readFileSync(filepath, "utf8");
  const ast = parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
  const usedClasses = new Set(["size-full"]);
  const perLoaderHelper = helperFile.replace(/\.ts$/, `-${path.basename(file, ".tsx")}.ts`);
  let fileConverted = 0;
  traverse(ast, {
    JSXOpeningElement(nodePath) {
      const attrs = nodePath.node.attributes;
      const classAttr = attrs.find((attr) => t.isJSXAttribute(attr) && attr.name.name === "className");
      if (!classAttr) return;
      const styleAttr = attrs.find((attr) => t.isJSXAttribute(attr) && attr.name.name === "style");
      const classExpression = t.isStringLiteral(classAttr.value)
        ? t.stringLiteral(classAttr.value.value)
        : classAttr.value?.expression || t.nullLiteral();
      const styleExpression = styleAttr?.value?.expression || t.nullLiteral();
      t.traverseFast(classExpression, (node) => {
        if (t.isStringLiteral(node)) {
          for (const name of node.value.split(/\s+/)) if (name) usedClasses.add(name);
        }
      });

      if (t.isStringLiteral(classExpression)) {
        for (const name of classExpression.value.split(/\s+/)) {
          if (name && !styles[name]) unknown.add(name);
        }
      }
      nodePath.node.attributes = attrs.filter((attr) => attr !== classAttr && attr !== styleAttr);
      nodePath.node.attributes.push(t.jsxAttribute(
        t.jsxIdentifier("style"),
        t.jsxExpressionContainer(t.callExpression(t.identifier("mergeClassStyle"), [
          classExpression, styleExpression,
        ])),
      ));
      fileConverted += 1;
      converted += 1;
    },
  });
  if (fileConverted) {
    ast.program.body.unshift(t.importDeclaration(
      [t.importSpecifier(t.identifier("mergeClassStyle"), t.identifier("mergeClassStyle"))],
      t.stringLiteral(perLoaderHelper),
    ));
    fs.writeFileSync(filepath, generate(ast, { retainLines: true }).code);
  }
  const selected = Object.fromEntries([...usedClasses].filter((name) => styles[name]).map((name) => [name, styles[name]]));
  const helper = helperSource(selected);
  fs.writeFileSync(perLoaderHelper, helper);
  fs.writeFileSync(perLoaderHelper.replace(/\.ts$/, ".css"), stylesheetFor(source + helper));
}

if (unknown.size) {
  throw new Error(`Tailwind did not generate styles for: ${[...unknown].sort().join(", ")}`);
}
process.stdout.write(`Converted ${converted} JSX className attributes to style props.\n`);
