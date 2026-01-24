import * as api from "../api/user.js";

export default {
  namespaced: true, // 开启命名空间
  state: () => ({
    user: null,
    loading: false,
  }),
  getters: {
    status(state) {
      if (state.loading) {
        return "loading";
      } else {
        return state.user ? "login" : "unlogin";
      }
    },
  },
  mutations: {
    updateLoading(state, { loading }) {
      state.loading = loading;
    },
    updateUser(state, { user }) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, { loginId, loginPwd }) {
      commit("updateLoading", { loading: true });
      const user = await api.login(loginId, loginPwd);
      commit("updateUser", { user });
      commit("updateLoading", { loading: false });
      return user;
    },
    async whoAmI({ commit }) {
      commit("updateLoading", { loading: true });
      const user = await api.whoAmI();
      commit("updateUser", { user });
      commit("updateLoading", { loading: false });
      return user;
    },
    async logout({ commit }) {
      commit("updateLoading", { loading: true });
      await api.logout();
      commit("updateUser", { user: null });
      commit("updateLoading", { loading: false });
    },
  },
};
