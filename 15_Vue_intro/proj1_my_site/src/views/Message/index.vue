<template>
  <div class="message-container" ref="msgContainer">
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
import { fetchRemoteData, mainScroll } from '@/mixins';
import { getMessages, postMessage } from '@/api/message';

export default {
  name: 'Message',
  components: {
    MessageArea
  },
  mixins: [fetchRemoteData({total: 0, rows: []}), mainScroll('msgContainer')],
  computed: {
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
      title: '留言板',
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
      return await getMessages(this.page);
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
      
      const newComment = await postMessage({
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
.message-container {
  box-sizing: border-box;
  padding-inline: 20%;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;

  & ::v-deep .data-form-container {
    margin-block-start: 2em;
  }
}
</style>