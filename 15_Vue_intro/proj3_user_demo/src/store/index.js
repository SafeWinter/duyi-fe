import Vue from 'vue'
import {default as Vuex} from 'vuex'
import user from './user';
import counter from './counter';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    user,
    counter
  }
});

window.store = store;  // for debugging

export default store;