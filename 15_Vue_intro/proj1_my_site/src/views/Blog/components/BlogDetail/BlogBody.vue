<template>
  <div class="blog-body-container">
    <h1 class="title">{{ data.title }}</h1>
    <section class="info">
      <dl>
        <dt class="term">日期</dt>
        <dd>{{ data.createDate | formatDate }}</dd>
      </dl>
      <dl>
        <dt class="term">浏览</dt>
        <dd>{{ data.scanNumber }}</dd>
      </dl>
      <a href="">
        <dt class="term">评论</dt>
        <dd>{{ data.commentNumber }}</dd>
      </a>
      <a href="">
        {{ data.category.name }}
      </a>
    </section>
    <section class="markdown-body" v-html="data.htmlContent"></section>
  </div>
</template>

<script>
import BlogComment from "./BlogComment";
import { formatDate } from "@/utils";
import "highlight.js/styles/googlecode.css";
import '@/styles/markdown.less';

export default {
  name: "BlogBody",
  components: {
    BlogComment,
  },
  filters: {
    formatDate,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import '~@/styles/variables.less';

.blog-body-container {
  padding: 1em 2em;
  text-align: left;
  position: relative;
}
.info {
  width: 100%;
  margin-block: 1em 2em;
  display: flex;
  justify-items: flex-start;
  gap: .8em;
  color: @lightWords;
  font-size: .875rem;

  & > * {
    display: flex;
    gap: 0.25em;
  }
}
.term {
  &::after {
    content: ":";
    display: inline;
  }
}
</style>
