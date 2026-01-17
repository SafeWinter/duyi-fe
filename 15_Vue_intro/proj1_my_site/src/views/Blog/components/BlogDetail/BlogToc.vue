<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <hierachy-list :data="tocTree" :currId="currId" @selected="handleClick"/>
  </div>
</template>

<script>
import HierachyList from "../HierarchyList";
import { renameToc } from '@/utils';
import eventBus from '@/eventBus';

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
    bookMarks() {
      const navTitles = (trees, marks = []) => {
        for(const tree of trees) {
          const {id, children} = tree;
          const iDom = document.querySelector(`#${id}`);
          if(iDom) {
            marks.push(iDom);
          }
          if(children && Array.isArray(children) && children.length > 0) {
            navTitles(children, marks);
          }
        }
        return marks;
      };
      return navTitles(this.tocTree);
    }
  },
  data() {
    return {
      currId: '',
      scope: 50
    };
  },
  mounted() {
    eventBus.$on('myScroll', this.checkActive);
  },
  destroyed() {
    eventBus.$off('myScroll', this.checkActive);
  },
  methods: {
    handleClick({ id }){
      this.currId = id;
      location.hash = id;
    },
    checkActive() {
      for(const elem of this.bookMarks) {
        const { top } = elem.getBoundingClientRect();
        const id = elem.getAttribute('id');
        if(top > this.scope) {
          // console.log('not reached, skip:', id);
          continue;
        }
        // within scope
        this.currId = id;
      }
    },
  }
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  padding-inline: 2em;
}
</style>
