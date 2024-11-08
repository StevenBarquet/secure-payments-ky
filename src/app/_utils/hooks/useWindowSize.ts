import { useState } from 'react';
import useEventListener from './useEventListener';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Easily retrieve window dimensions with this React Hook which also works onRezise.
 * @returns {WindowSize}
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => handleSize(), []);

  return windowSize;
}
