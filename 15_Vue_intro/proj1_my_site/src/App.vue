<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <aside class="aside">
          <SiteAside />
        </aside>
      </template>
      <template v-slot:default>
        <router-view />
      </template>
    </Layout>
    <to-top :siez="size" :offset="offset"/>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
import ToTop from '@/components/ToTop';

export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    ToTop
  },
  data() {
    return {
      size: 70,
      offset: 200
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/variables.less';
@import '~@/styles/mixin.less';

.app-container {
  width: 100%;
  height: 100%;
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

  & .to-top-container {
    position: absolute;
  }
}
</style>