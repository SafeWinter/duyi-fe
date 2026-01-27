import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { getMessage } from '@/utils';
Vue.prototype.$getMessage = getMessage;

import '@/mock';

import vLoading from './directives/loading';
Vue.directive('loading', vLoading);

import vLazy from './directives/lazy';
if(vLazy.timer) {
  // for debug:
  let {timer} = vLazy;
  console.log('timer is still running');
  clearInterval(timer);
  timer = void(0);
  console.log('timer stopped')
}
Vue.directive('lazy', vLazy);

import './eventBus.js';

import store from './store';
store.dispatch('setting/fetchSetting')
  .then(() => {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  });


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

// import { getSetting } from './api/setting.js';
// getSetting().then(data => console.log('projects:', {data}));

// import { getProjectData } from './api/project.js';
// getProjectData().then(data => console.log('projects:', data.filter(e=>e.github!==null).map(e=>e.github)));