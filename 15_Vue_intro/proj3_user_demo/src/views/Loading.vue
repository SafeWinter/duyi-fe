<template>
  <h1>Loading ...</h1>
</template>

<script>
export default {
  name: 'Loading',
  created() {
    this.unWatch = this.$store.watch(
      (_, getters) => getters['user/status'],
      (status) => {
        if(status !== 'loading') {
          this.$router.push({
            path: this.$route.query.returnurl || '/'
          }).catch(err => console.log({err}));  // 待解决
        }
      },
      {
        immediate: true
      }
    )
  },
  destroyed() {
    this.unWatch();
  }
}
</script>