import { getProjectData } from '@/api/project';

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    data: []
  }),
  mutations: {
    updateLoading(state, { loading }) {
      state.loading = loading;
    },
    updateData(state, { data }) {
      state.data = data;
    }
  },
  actions: {
    async fetchData({ commit, state }) {
      if(state.data.length > 0) {
        console.log('Aborted: project data already fetched');
        return;
      }
      commit('updateLoading', { loading: true });
      const data = await getProjectData();
      commit('updateData', { data });
      commit('updateLoading', { loading: false });
    }
  }
}