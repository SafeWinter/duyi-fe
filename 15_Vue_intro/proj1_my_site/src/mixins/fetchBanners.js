export default function remoteData(defaults = null) {
  return {
    data() {
      return {
        loading: false,
        banners: defaults,
      };
    },
    async created() {
      this.loading = true;
      this.banners = await this.getRemoteData();
      this.loading = false;
    },
  };
};