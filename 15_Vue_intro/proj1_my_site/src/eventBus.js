import Vue from 'vue';

/**
 * 基于 Vue 实例的【数据总线】实现
 * 1. 目录大纲的滚轮跟随：
 *   - 事件名：mainScroll
 *   - $emit 回调参数：dom（基于该元素尺寸，决定是否渲染 toTop 元素）
 * 
 * 2. 从文章列表页、详情页快速回到页面顶部：
 *   - 事件名：backToTop
 *   - $emit 回调参数：targetTop（指定滚动条到达的最终位置）
 */
export default new Vue({});


///////////////////////////////////////////////////////

// Customized event bus implementation based on vanilla JS:
// 
// const bus = {};
// export default {
//   $on(eventName, handler) {
//     if(!bus[eventName]) {
//       bus[eventName] = new Set();
//     }
//     bus[eventName].add(handler);
//   },
//   $off(eventName, handler) {
//     if(bus[eventName] && bus[eventName].has(handler)) {
//       bus[eventName].delete(handler);
//     }
//   },
//   $emit(eventName, ...args) {
//     if(!bus[eventName] || !(bus[eventName] instanceof Set)) {
//       return;
//     }
//     for(const handler of bus[eventName]) {
//       handler(...args);
//     }
//   }
// };