<template>
  <div class="blog-comment-container" v-loading="loading">
    <message-area 
      :title="title" 
      :sub-title="subTitle" 
      :list="data.rows"
      @submit="handleSubmit"
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
      return `（${this.data.total}）`;
    },
  },
  data() {
    return {
      title: '评论列表',
    };
  },
  methods: {
    async getRemoteData() {
      return await getComments(this.blogId);
    },
    async handleSubmit(data, childCallback) {
      // console.log(data);
      const newComment = await postComment({
        blogId: this.blogId,
        ...data
      });
      // console.log('new comment:', newComment);

      if(Math.random() > 0.55) {
        // success
        this.data.rows.unshift(newComment);
        this.data.total++;
        
        childCallback({
          content: '评论成功！',
          code: 0
        });
      } else {
        // failure:
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