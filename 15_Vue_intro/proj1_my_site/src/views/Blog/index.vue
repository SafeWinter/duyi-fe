<template>
  <layout class="blog-container">
    <template #default>
      <blog-list />
    </template>
    <template #right>
      <blog-category />
    </template>
  </layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogCategory from './components/BlogCategory';
import BlogList from './components/BlogList';

export default {
  name: 'Blog',
  components: {
    Layout,
    BlogCategory,
    BlogList
  },
}
</script>

<style lang="less" scoped>
.blog-container {
  box-sizing: border-box;
}
</style>