<template>
  <div class="blog-body-container">
    <h1 class="title">{{ data.title }}</h1>
    <demo-code :code="code1" :hasPrefix="false"/>是<demo-code :code="code2"/>的一个实例属性。
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

import DemoCode from './DemoCode.vue';

export default {
  name: "BlogBody",
  components: {
    BlogComment,
    DemoCode
  },
  filters: {
    formatDate,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      code1: '$listeners',
      code2: 'Vue'
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import '~@/styles/variables.less';

.blog-body-container {
  padding: 1em 2em;
  text-align: left;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
  height: 100%;
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
