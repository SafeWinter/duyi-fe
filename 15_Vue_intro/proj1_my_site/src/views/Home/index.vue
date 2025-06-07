<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="showInfo('info')">info 消息</button>
    <button @click="showInfo('success')">success 消息</button>
    <button @click="showInfo('warn')">warn 消息</button>
    <button @click="showInfo('error')">error 消息</button>
  </div>
</template>

<script>
export default {
  methods: {
    showInfo(type) {
      this.$getMessage({
        content: '示例消息内容',
        type,
        // container: this.$refs.home,
        callback() {
          console.log('消息已显示');
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 400px;
  border: 2px solid;
}
</style>