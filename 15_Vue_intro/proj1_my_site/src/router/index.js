import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes';
import { titleMaker } from '../utils'

if(!window.VueRouter) {
  Vue.use(VueRouter);
}

let router = new VueRouter({
  mode: "history",
  routes
});

router.afterEach((to, _) => {
  if(to.meta.title) {
    titleMaker.setRouteTitle(to.meta.title);
  }
});

export default router;