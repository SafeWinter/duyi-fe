import Vue from '../../../assets/vue.esm.browser.min.js';
import App from './App.js';

const app = new Vue({
    render: h => h(App)
});
app.$mount('#app');