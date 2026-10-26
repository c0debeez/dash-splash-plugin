import {cancelFrame, frame, visualElementStore} from 'motion-dom';

/** Control the real Motion animations, including JS-driven SVG and color values. */
export function bindMotionPlayback(element: HTMLElement, rate: number, playing: boolean) {
  const synchronize = () => {
    element.querySelectorAll('*').forEach(node => {
      visualElementStore.get(node)?.values.forEach(value => {
        const animation = value.animation;
        if (!animation) return;
        if (!('speed' in animation) || typeof animation.speed !== 'number' ||
            !('pause' in animation) || typeof animation.pause !== 'function' ||
            !('play' in animation) || typeof animation.play !== 'function') return;
        if (animation.speed !== rate) animation.speed = rate;
        if (!playing && animation.state === 'running') animation.pause();
        else if (playing && animation.state === 'paused') animation.play();
      });
    });
  };
  // Motion may create a new loop after React commits; use its scheduler rather
  // than replacing keyframes or intercepting its rendering primitives.
  frame.postRender(synchronize, true);
  return () => cancelFrame(synchronize);
}
