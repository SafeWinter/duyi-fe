<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <aside class="aside">
          <SiteAside />
        </aside>
      </template>
      <template v-slot:default>
        <main class="main">主内容区</main>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/variables.less';
@import '~@/styles/mixin.less';

.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  .centered();

  .aside {
    width: 250px;
    height: 100%;
    overflow: hidden;
  }

  .main {
    height: 100%;
    background-color: @gray;
    overflow: hidden;
  }
}
</style>