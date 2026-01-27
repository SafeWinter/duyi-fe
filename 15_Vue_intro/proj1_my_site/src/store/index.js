import Vue from 'vue';
import Vuex from 'vuex';

import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true,
});

window.store = store;  // for debugging

export default store;