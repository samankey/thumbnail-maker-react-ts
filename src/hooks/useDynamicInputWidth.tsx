import { useRef, useState, useEffect } from 'react';

export const useDynamicInputWidth = (value: string) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<string>('auto');

  useEffect(() => {
    if (divRef.current) {
      setWidth(`${divRef.current.offsetWidth + 2}px`);
    }
  }, [value]);
  return { divRef, width };
};
