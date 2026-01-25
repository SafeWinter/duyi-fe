import Vue from 'vue';
import Vuex from 'vuex';

import banner from './banner';
import setting from './setting';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    banner,
    setting
  },
  strict: true,
});

window.store = store;  // for debugging

export default store;