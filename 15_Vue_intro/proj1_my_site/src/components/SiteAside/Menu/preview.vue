<template>
  <div class="menu-preview">
    <h1>Menu 菜单组件效果预览</h1>
    <div class="content">
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from './';

export default {
  name: 'MenuPreview',
  components: {
    Menu
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/variables.less';
.content {
  width: 300px;
  height: 300px;
  padding-block: 20px;
  margin-inline: auto;
  background-color: @dark;
}
</style>