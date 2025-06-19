import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { getMessage } from '@/utils';
Vue.prototype.$getMessage = getMessage;

import '@/mock';

import vLoading from './directives/loading';
Vue.directive('loading', vLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


import * as blogApi from '@/api/blog';
blogApi.getBlogCategories().then(data => {
  console.log('获取博客分类列表:', data);
});

blogApi.getBlogs(1, 15, -1).then(data => {
  console.log('获取博客文章列表:', data);
});