<template>
  <div class="blog-comment-container">
    <message-area 
      :title="title" 
      :sub-title="subTitle" 
      :list="data.rows"
      @submit="handleSubmit"
      :isListLoading="loading"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import { fetchRemoteData } from '@/mixins';
import { getComments, postComment } from '@/api/blog';

export default {
  name: 'BlogComment',
  components: {
    MessageArea
  },
  mixins: [fetchRemoteData({})],
  computed: {
    blogId() {
      return this.$route.params.id;
    },
    subTitle() {
      if(!this.data || !this.data.total) {
        return ''
      }
      return `（${this.data.total}）`;
    },
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  data() {
    return {
      title: '评论列表',
      page: 1,
      bottomMargin: 100, // px
      loading: false,
    };
  },
  created(){
    // window.getMoreData = this.getMoreData; // for debugging
    this.$bus.$on('mainScroll', this.loadMoreComments)
  },
  beforeDestroy(){
    this.$bus.$off('mainScroll', this.loadMoreComments)
  },
  methods: {
    async loadMoreComments(main){
      if(this.loading || !main) {
        return;
      }
      const dist = Math.abs(main.scrollHeight - main.scrollTop - main.clientHeight);
      if(dist <= this.bottomMargin) {
        await this.getMoreData();
      }
    },
    async getRemoteData() {
      return await getComments(this.blogId, this.page);
    },
    async getMoreData() {
      
      if(!this.hasMore) {
        this.loading = false;
        return;
      }

      this.loading = true;
      this.page++;
      const {rows, total} = await this.getRemoteData();
      this.data.total = total;
      this.data.rows = this.data.rows.concat(rows);
      this.loading = false;
    },
    async handleSubmit(data, childCallback) {
      
      const newComment = await postComment({
        blogId: this.blogId,
        ...data
      });

      if(Math.random() > 0.55) {
        // success
        this.data.rows.unshift(newComment);
        this.data.total++;
        
        childCallback({
          content: '评论成功！',
          code: 0
        });
      } else {
        // failure
        childCallback({
          content: '评论失败：后台服务器未响应。',
          code: 500
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>