<template>
  <div class="home-container" ref="home">
    <h1 ref="h1">{{ count }}</h1>
    <button @click="count++">count++</button>
    <ul>
      <li v-for="b in banners" :key="b.id">
        <img :src="b.midImg" alt="Banner Image" />
        <p>{{ b.title }}</p>
        <p>{{ b.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBanner } from '@/api/banner';

export default {
  data() {
    return {
      count: 0,
      banners: [],
    };
  },
  // 测试【注入】前后
  beforeCreate() {
    console.log('beforeCreate', this.count);  // beforeCreate undefined
  },
  async created() {
    console.log('created', this.count);  // created 0
    this.banners = await getBanner();
    // console.log(this.banners);
  },
  // 测试【生成真实 DOM】前后
  beforeMount() {
    console.log('beforeMount', this.$refs.home);  // beforeMount undefined
  },
  mounted() {
    console.log('mounted', this.$refs.home); // mounted DOM
  },
  // 测试【更新】前后
  beforeUpdate() {
    const count = this.$refs.h1.innerText;
    console.log('beforeUpdate', count, this.count); // beforeUpdate 0 1
  },
  updated() {
    const count = this.$refs.h1.innerText;
    console.log('updated', count, this.count);  // updated 1 1
  },
  // 测试【销毁】前后
  beforeDestroy() {
    console.log('beforeDestroy', this.$refs.home); // beforeDestroy DOM
  },
  destroyed() {
    console.log('destroyed', this.$refs.home); // destroyed undefined
  },
}
</script>

<style scoped lang="less"></style>