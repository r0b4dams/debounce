import { useCallback, useEffect, useRef } from "react";

/**
 * Debounces the given callback function
 * @param cb The callback to be executed after the given delay.
 * @param delay The number of milliseconds to wait before executing the callback.
 * @returns The debounced callback
 */
export function useDebounce<
  T extends (...args: Parameters<T>) => ReturnType<T>
>(cb: T, delay: number) {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const clearCurrentTimeout = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }, []);

  useEffect(() => clearCurrentTimeout);

  return (...args: Parameters<T>) => {
    clearCurrentTimeout();
    timeout.current = setTimeout(() => cb(...args), delay);
  };
}
