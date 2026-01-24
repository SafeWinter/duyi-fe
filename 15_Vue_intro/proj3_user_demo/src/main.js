import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

store.dispatch("user/whoAmI").then(d => console.log(d));
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
