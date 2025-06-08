<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="test">测试</button>
  </div>
</template>

<script>
import { getBanner } from '@/api/banner';

export default {
  methods: {
    async test() {
      const data = await getBanner();
      console.log(data);
    }
  },
}
</script>

<style scoped lang="less"></style>