import Vue from 'vue'
import App from './App.vue'

// import api from './services/channel.js';
// api.getChannels().then(data => console.log(data));

new Vue({
  render: h => h(App),
}).$mount('#app')