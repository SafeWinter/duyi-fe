import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

// DeepSeek: 添加全局错误处理，忽略 NavigationDuplicated 异常
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') {
      throw err;
    }
  });
};

router.beforeEach((to, from, next) => {
  const requiredAuth = to.matched.some((r) => r.meta.requireAuth);
  // console.log('requiredAuth', requiredAuth);
  const status = store.getters["user/status"];
  // console.log('status: ', status);
  if (requiredAuth) {
    if (status === "login") {
      return next();
    }
    if (status === "unlogin") {
      alert("请先登录用户！");
      return next({
        name: "Login",
        query: {
          returnurl: to.fullPath,
        },
      });
    }
    // loading
    next({
      name: "Loading",
      query: {
        returnurl: to.fullPath,
      },
    });
  } else {
    if (status === "loading" && to.fullPath === "/") {
      return next("/loading");
    }
    next();
  }
});

export default router;
