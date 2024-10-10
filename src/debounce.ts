export function debounce<T extends (...args: Parameters<T>) => void>(
  cb: T,
  delay = 250
) {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
