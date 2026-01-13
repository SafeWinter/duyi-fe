export default function remoteData(defaults = null) {
  return {
    data() {
      return {
        loading: false,
        data: defaults,
      };
    },
    async created() {
      await this.refreshData();
    },
    methods: {
      async refreshData() {
        this.loading = true;
        this.data = await this.getRemoteData();
        this.loading = false;
      }
    }
  };
}