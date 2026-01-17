/**
 * 防抖函数模块
 * @param {Function} fn target fn to be debounced
 * @param {Number} duration time interval to debounce in ms
 * @returns debounce function within specific interval
 */
export default function(fn, duration = 1000) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
}