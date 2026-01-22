import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const delay = duration => 
  new Promise(resolve => 
    setTimeout(resolve, duration));

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    power(state, payload) {
      state.count **= payload;
    }
  },
  actions: {
    async asyncIncrease(ctx) {
      await delay(1000);
      ctx.commit('increase');
    },
    async asyncDecrease(ctx) {
      await delay(1000);
      ctx.commit('decrease');
    },
    async asyncPower(ctx, payload) {
      await delay(1000);
      ctx.commit('power', payload);
    }
  },
  modules: {}
});

window.store = store;

export default store;