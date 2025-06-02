<template>
  <div class="layout-preview">
    <Layout>
      <template v-slot:left>
        <div class="aside">侧边栏</div>
      </template>
      <template v-slot:default>
        <div class="main">主内容区</div>
      </template>
      <!-- <template v-slot:right>
        <div class="right"></div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from './';

export default {
  name: 'LayoutPreview',
  components: {
    Layout
  }
}
</script>

<style lang="less" scoped>
.layout-preview {
  width: 90%;
  height: 600px;
  margin: 0 auto;
  border: 2px solid;
}
.aside {
  width: 200px;
  height: 100%;
  background-color: lightblue;
}
.main {
  height: 100%;
  background-color: lightcoral;
}
.right {
  width: 150px;
  height: 100%;
  background-color: lightgreen;
}
</style>