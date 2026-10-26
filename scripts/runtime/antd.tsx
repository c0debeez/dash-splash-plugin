import React from 'react';

// The four-dot indicator is intentionally local: importing all of antd solely
// for the initial splash adds an unnecessary dependency to standalone installs.
export function Antd({color = 'currentColor', size = 20}: {color?: string; size?: number}) {
  return <span style={{position: 'relative', display: 'block', width: size, height: size, color,
    transform: 'rotate(45deg)', animation: 'dash-antd-rotate 1.2s linear infinite'}}>
    <style>{`@keyframes dash-antd-rotate{to{transform:rotate(405deg)}}
      @keyframes dash-antd-fade{to{opacity:1}}`}</style>
    {[0, 1, 2, 3].map(index => <i key={index} style={{position: 'absolute', display: 'block',
      width: '45%', height: '45%', borderRadius: '50%', background: 'currentColor', opacity: .3,
      top: index < 2 ? 0 : undefined, bottom: index > 1 ? 0 : undefined,
      left: index === 0 || index === 3 ? 0 : undefined, right: index === 1 || index === 2 ? 0 : undefined,
      animation: `dash-antd-fade 1s ${index * .4}s linear infinite alternate`}}/>)}
  </span>;
}
