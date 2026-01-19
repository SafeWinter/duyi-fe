<template>
  <div class="blog-list-container" ref="blogList" v-loading="loading">
    <BlogCard v-for="blog in blogs" :key="blog.id" :data="blog" />
    <footer class="pager">
      <Pager :current="current" :total="total" @pageChange="handlePageChange"/>
    </footer>
  </div>
</template>

<script>
import BlogCard from './BlogCard';
import Pager from '@/components/Pager';
import { fetchRemoteData } from '@/mixins';
import { getBlogs } from '@/api/blog';
import { debounce } from '@/utils';

export default {
  name: 'BlogList',
  mixins: [fetchRemoteData([])],
  components: {
    BlogCard,
    Pager,
  },
  data() {
    return {
      current: 1,
    };
  },
  computed: {
    blogs() {
      return (!this.data) ? [] : this.data.rows || [];
    },
    total() {
      return this.data.total || 0;
    },
    routeInfo() {
      const {params, query} = this.$route;
      const cid = +params.categoryId || -1;
      const page = +query.page || 1;
      const limit = +query.limit || 10;
      return { cid, page, limit };
    },
  },
  watch: {
    async '$route'() {
      this.$refs.blogList.scrollTop = 0;
      // from fetchRemoteData mixin
      await this.refreshData();
    }
  },
  mounted() {
    this.scrollDebounced = debounce(this.handleScroll, 50);
    this.$refs.blogList.addEventListener('scroll', this.scrollDebounced);

    this.$bus.$on('backToTop', this.handleBackToTop);
  },
  beforeDestroy() {
    this.$refs.blogList.removeEventListener('scroll', this.scrollDebounced);
    // 切换到其他组件前，通知所有观察者停止响应
    this.$bus.$emit('mainScroll');  // 若不传 dom 参数，则不执行 mainScroll 回调

    this.$bus.$off('backToTop', this.handleBackToTop);
  },
  methods: {
    handleBackToTop(top) {
      // console.log('blog list back to top');
      this.$refs.blogList.scrollTop = top;
    },
    handleScroll() {
      this.$bus.$emit('mainScroll', this.$refs.blogList);
    },
    checkVisibility(dom) {
      this.visible = (!dom) ? false : (dom.scrollTop >= this.offset);
    },
    async getRemoteData() {
      const {page, limit, cid} = this.routeInfo;
      this.current = this.routeInfo.page;
      return await getBlogs(page, limit, cid);
    },
    async handlePageChange(page) {
      this.current = page;
      const {cid, limit} = this.routeInfo;
      const query = { page, limit };
      if(cid !== -1) {
        // 含分类信息
        this.$router.push({ 
          name: 'CategorizedArticle', 
          params: { categoryId: cid }, 
          query 
        });
      } else {
        this.$router.push({ 
          name: 'Article', 
          query 
        });
      }
    },
  },
}
</script>

<style lang="less" scoped>
.blog-list-container {
  height: 100%;
  overflow-y: scroll;
  padding-inline: 2em;
  scroll-behavior: smooth;

  & > .pager {
    margin-block: 2em 4em;
  }
}
</style>