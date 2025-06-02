<template>
  <div class="layout-container">
    <aside class="left" v-if="$slots.left">
      <slot name="left"></slot>
    </aside>
    <main class="main">
      <slot name="default"></slot>
    </main>
    <div class="right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  &>.left, &>.right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  &>.main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>