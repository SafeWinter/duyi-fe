import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { getMessage } from '@/utils';
Vue.prototype.$getMessage = getMessage;

import '@/mock';

import vLoading from './directives/loading';
Vue.directive('loading', vLoading);

import './eventBus.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


// import * as blogApi from './api/blog';
// blogApi.getBlog('123')
//   .then(data => console.log('test blog detail', data));

// blogApi.postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: 'demo-blog-id-abcde' // 评论的博客id
//   })
//   .then(data => console.log('test post comment', data));

// blogApi.getComments('demoblogId')
//   .then(data => console.log('test get paged comments', data));