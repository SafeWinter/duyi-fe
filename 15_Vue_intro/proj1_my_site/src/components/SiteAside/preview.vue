<template>
  <div class="site-aside-preview">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from './';

export default {
  name: 'SiteAsidePreview',
  components: {
    SiteAside
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/global.less';
@import '~@/styles/variables.less';
.site-aside-preview {
  width: 260px;
  height: 800px;
  margin-inline: auto;
  border-radius: 5px;
}
</style>