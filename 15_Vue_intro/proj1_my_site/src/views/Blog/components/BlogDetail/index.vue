<template>
  <div class="blog-detail-container">
    <h1>博文详情页</h1>
    <h2>博文 ID：{{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
}
</script>

<style lang="less" scoped>

</style>