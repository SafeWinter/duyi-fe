import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { getMessage } from '@/utils';
Vue.prototype.$getMessage = getMessage;

import '@/mock';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
