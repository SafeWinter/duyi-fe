// 入口模块文件
// 创建vue实例
import Vue from "../../../assets/vue.esm.browser.min.js";
import App from "./App.js";

new Vue({
  render: (h) => h(App), // 渲染组件App
}).$mount("#app");

