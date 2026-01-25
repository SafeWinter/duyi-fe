import { getSetting } from "../api/setting";

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    data: null,
  }),
  getters: {
    // 构造侧边栏联系方式数据源，用于 Contact 组件渲染
    contacts({ data }) {
      return [
        {
          icon: 'github', 
          label: data.githubName, 
          link: data.github
        },
        {
          icon: 'mail', 
          label: data.mail, 
          link: `mailto:${data.mail}`
        },
        {
          icon: 'weixin', 
          label: data.weixin, 
          qrCode: data.weixinQrCode
        },
        {
          icon: 'qq', 
          label: data.qq, 
          qrCode: data.qqQrCode, 
          link: `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        },
      ];
    },
  },
  mutations: {
    updateLoading(state, { loading }) {
      state.loading = loading;
    },
    updateData(state, { data }) {
      state.data = data;
    },
  },
  actions: {
    async fetchSetting({ commit, state }) {
      if(state.data !== null) {
        console.log('glabel settings exist, abort fetching');
        return;
      }
      commit("updateLoading", { loading: true });
      const data = await getSetting();
      commit("updateData", { data });
      commit("updateLoading", { loading: false });

      if(data.favicon) {
        // <link rel="shortcut icon" href="//favicon.ico" />
        const link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = data.favicon;
        document.querySelector('head').appendChild(link);
      }
    },
  },
};
