import { useCallback, useRef } from 'react';

interface UseDebounceOptions {
  delay: number;
  immediate?: boolean;
}

const useDebounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  { delay, immediate = false }: UseDebounceOptions,
): ((...args: Parameters<T>) => void) => {
  const timerId = useRef<number | null>(null);

  const debounce = useCallback(
    function (this: unknown, ...args: Parameters<T>) {
      const context = this as unknown;

      const callNow = immediate && !timerId.current;

      clearTimeout(timerId.current as number);

      timerId.current = window.setTimeout(() => {
        timerId.current = null;
        if (!immediate) {
          fn.apply(context, args);
        }
      }, delay);

      if (callNow) {
        fn.apply(context, args);
      }
    },
    [fn, delay, immediate],
  );

  return debounce;
};

export default useDebounce;
