<template>
  <Layout>
    <template #default>
      <div ref="blogBody" class="body-container" v-loading="loading">
        <blog-body :data="blogData" v-if="blogData"/>
        <blog-comment v-if="!loading" />
      </div>
    </template>
    <template #right>
      <div class="toc-container" v-loading="loading">
        <blog-toc :toc="toc" v-if="blogData"/>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogToc from './BlogToc';
import BlogBody from './BlogBody';
import BlogComment from './BlogComment';
import { fetchRemoteData, mainScroll } from '@/mixins';
import { getBlog } from '@/api/blog';

export default {
  name: 'BlogDetail',
  mixins: [fetchRemoteData({}), mainScroll('blogBody')],
  components: {
    Layout,
    BlogBody,
    BlogComment,
    BlogToc
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    blogData() {
      return this.data.data;
    },
    toc() {
      return this.blogData.toc;
    }
  },
  methods: {
    async getRemoteData() {
      return await getBlog(this.id)
    },
    correctHashedUrl() {
      const hash = location.hash;
      location.hash = '';
      setTimeout(function() {
        location.hash = hash;
      }, 3000); // 超过请求的最大延迟即可
    },
  },
  mounted() {
    this.correctHashedUrl();
  },
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.body-container, .toc-container{
  position: relative;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.toc-container {
  width: 300px;
  text-align: left;
}
</style>