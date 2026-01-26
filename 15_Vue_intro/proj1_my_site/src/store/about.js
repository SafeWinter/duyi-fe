import { getAboutData } from '../api/about';

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    data: ''
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
    async fetchAbout({ commit, state }) {
      if(state.data) {
        console.log('Aborted: data for the About page has been fetched.');
        return;
      }
      commit('updateLoading', { loading: true });
      const data = await getAboutData();
      commit('updateData', { data });
      commit('updateLoading', { loading: false });
    }
  }
}