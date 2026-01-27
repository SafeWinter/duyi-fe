import Vue from 'vue';
import {Store, install} from 'vuex';

import banner from './banner';
import setting from './setting';
import about from './about';
import project from './project';

if(!window.Vuex) {
  install(Vue);
}

const devMode = process.env.NODE_ENV === 'development';

const store = new Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: devMode,
});

if(devMode){
  window.store = store;  // for debugging
}

export default store;