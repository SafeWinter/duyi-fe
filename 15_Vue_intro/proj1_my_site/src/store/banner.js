import { getBanner } from "@/api/banner";

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    data: [],
  }),
  mutations: {
    updateLoading(state, { loading }) {
      state.loading = loading;
    },
    updateData(state, { data }) {
      state.data = data;
    },
  },
  actions: {
    async fetchBanner({ commit, state }) {
      if(state.data.length > 0) {
        console.log('首页标语已获取，无需重复获取');
        return;
      }
      commit("updateLoading", { loading: true });
      const data = await getBanner();
      commit("updateData", { data });
      commit("updateLoading", { loading: false });
    },
  },
};
