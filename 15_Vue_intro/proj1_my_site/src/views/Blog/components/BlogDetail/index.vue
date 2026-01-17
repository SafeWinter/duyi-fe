<template>
  <Layout>
    <template #default>
      <div ref="blogBody1" class="body-container" v-loading="loading">
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
import { fetchRemoteData } from '@/mixins';
import { getBlog } from '@/api/blog';
import eventBus from '@/eventBus';
import { debounce } from '@/utils';

export default {
  name: 'BlogDetail',
  mixins: [fetchRemoteData({})],
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
    handleScroll() {
      console.log('滚动条变化了');
      eventBus.$emit('myScroll', this.$refs.blogBody1);
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
    this.scrollDebounced = debounce(this.handleScroll, 50);
    this.$refs.blogBody1.addEventListener('scroll', this.scrollDebounced);

    this.correctHashedUrl();
  },
  beforeDestroy() {
    this.$refs.blogBody1.removeEventListener('scroll', this.scrollDebounced);
  },
}
</script>

<style lang="less" scoped>
.body-container, .toc-container{
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
}
.toc-container {
  width: 300px;
  text-align: left;
}
</style>