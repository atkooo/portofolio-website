/**
 * Debounce helper function to optimize scroll and resize events
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 */
export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
