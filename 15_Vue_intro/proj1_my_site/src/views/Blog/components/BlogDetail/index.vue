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
import { fetchRemoteData } from '@/mixins';
import { getBlog } from '@/api/blog';
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
      this.$bus.$emit('mainScroll', this.$refs.blogBody);
    },
    correctHashedUrl() {
      const hash = location.hash;
      location.hash = '';
      setTimeout(function() {
        location.hash = hash;
      }, 3000); // 超过请求的最大延迟即可
    },
    handleBackToTop(top) {
      // console.log('detail back to top ...');
      this.$refs.blogBody.scrollTop = top;
    }
  },
  mounted() {
    this.scrollDebounced = debounce(this.handleScroll, 50);
    this.$refs.blogBody.addEventListener('scroll', this.scrollDebounced);

    this.$bus.$on('backToTop', this.handleBackToTop);

    this.correctHashedUrl();
  },
  beforeDestroy() {
    this.$refs.blogBody.removeEventListener('scroll', this.scrollDebounced);
    // 切换到其他组件前，通知所有观察者停止响应
    this.$bus.$emit('mainScroll');  // 若不传 dom 参数，则不执行 mainScroll 回调

    this.$bus.$off('backToTop', this.handleBackToTop);
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