<template>
  <div class="page-container">
    <Layout>
      <template #left>
        <BiliAside />
      </template>
      <template #head>
        菜单
      </template>
      <template #main>
        主区域
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import BiliAside from '@/components/BiliAside';

export default {
  name: 'Channel',
  components: {
    Layout,
    BiliAside
  },
}
</script>

<style scoped>
.page-container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>