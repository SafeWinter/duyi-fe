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

//TODO: 以下指令仅用于 preview.vue 组件页调试
import vLoading from "@/directives/loading";

export default {
  name: 'BlogList',
  mixins: [fetchRemoteData([])],
  components: {
    BlogCard,
    Pager,
  },
  //TODO: 以下指令仅用于 preview.vue 组件页调试
  directives: {
    loading: vLoading
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
      //TODO: 以下判定仅用于 preview.vue 组件页调试
      if(!this.$route || !this.$route.params || !this.$route.query) {
        return { cid: -1, page: 1, limit: 10 };
      }

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
  methods: {
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