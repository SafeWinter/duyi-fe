<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <hierachy-list :data="tocTree" :currId="currId" @selected="handleClick"/>
  </div>
</template>

<script>
import HierachyList from "../HierarchyList";
import { renameToc } from '@/utils';

export default {
  name: "BlogToc",
  components: {
    HierachyList,
  },
  props: {
    toc: {
      type: Array,
      require: true,
    },
  },
  computed: {
    tocTree() {
      // console.log("toc:", this.toc);
      return renameToc(this.toc);
    },
  },
  data() {
    return {
      currId: '',
    };
  },
  methods: {
    handleClick({ id }){
      this.currId = id;
      location.hash = id;
    }
  }
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  padding-inline: 2em;
}
</style>
