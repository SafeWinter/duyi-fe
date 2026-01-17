const bus = {};

export default {
  $on(eventName, handler) {
    if(!bus[eventName]) {
      bus[eventName] = new Set();
    }
    bus[eventName].add(handler);
  },
  $off(eventName, handler) {
    if(bus[eventName] && bus[eventName].has(handler)) {
      bus[eventName].delete(handler);
    }
  },
  $emit(eventName, ...args) {
    if(!bus[eventName] || !(bus[eventName] instanceof Set)) {
      return;
    }
    for(const handler of bus[eventName]) {
      handler(...args);
    }
  }
};