<template>
  <div v-loading="loading" class="blog-category-container">
    <h2>文章分类</h2>
    <hyerachy-list :data="categories" :currId="currId" @selected="handleSelected" />
  </div>
</template>

<script>
import HyerachyList from '../HierarchyList';
import { fetchRemoteData } from '@/mixins';
import { getBlogCategories } from '@/api/blog';

export default {
  name: 'BlogCategory',
  mixins: [fetchRemoteData([])],
  components: {
    HyerachyList
  },
  data() {
    return {
      // categories: [], // {id: 6, name: '分类6', articleCount: 257}
      currId: -1
    };
  },
  computed: {
    hasData() {
      return this.data && this.data.length && this.data.length > 0;
    },
    categories() {
      if(!this.hasData) {
        return [];
      }
      const count = this.data.reduce((acc, {articleCount: n}) => acc + n, 0);
      const renamedData = this.data.map(d => ({
        id: d.id, 
        label: d.name, 
        count: d.articleCount
      }));
      return [{id: -1, label: '全部', count}].concat(renamedData);
    }
  },
  methods: {
    async getRemoteData() {
      return await getBlogCategories();
    },
    async handleSelected({ id }) {
      this.currId = id;
      // console.log('当前分类：', label);
      const limit = +this.$route.query.limit || 10;
      const query = { page: 1, limit };
      if(id !== -1) {
        // 含分类信息
        this.$router.push({ 
          name: 'CategorizedArticle', 
          params: { categoryId: id }, 
          query 
        });
      } else {
        this.$router.push({ 
          name: 'Article', 
          query 
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
*,::before,::after {
  box-sizing: border-box;
}
.blog-category-container {
  padding: 2em;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  text-align: justify;
  font-size: 0.875rem;

  h2 {
    padding: 0;
    margin-block: .5em;
    font-size: 1rem;
  }
}
</style>