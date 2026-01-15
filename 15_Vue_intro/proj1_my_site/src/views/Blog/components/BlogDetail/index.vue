<template>
  <Layout>
    <template #default>
      <div class="body-container" v-loading="loading">
        <blog-body :data="blogData" v-if="blogData"/>
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
import { fetchRemoteData } from '@/mixins';
import { getBlog } from '@/api/blog';

export default {
  name: 'BlogDetail',
  mixins: [fetchRemoteData({})],
  components: {
    Layout,
    BlogBody,
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
    }
  }
}
</script>

<style lang="less" scoped>
.body-container, .toc-container{
  height: 100%;
  overflow-y: auto;
  position: relative;
}
.toc-container {
  width: 300px;
  text-align: left;
}
</style>