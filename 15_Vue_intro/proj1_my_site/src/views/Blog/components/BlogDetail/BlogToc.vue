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
    bookMarks() {
      const navTitles = (treeNodes, marks = []) => {
        for(const node of treeNodes) {
          const {id, children} = node;
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
    this.$bus.$on('mainScroll', this.checkActive);
  },
  beforeDestroy() {
    this.$bus.$off('mainScroll', this.checkActive);
  },
  methods: {
    handleClick({ id }){
      this.currId = id;
      location.hash = id;
    },
    checkActive() {
      for(let i = 0, len = this.bookMarks.length; i < len; i++) {
        const elem = this.bookMarks[i];
        const { top } = elem.getBoundingClientRect();
        const id = elem.id;

        // highlight the 1st item
        if(i === 0 && top > this.scope + 1000) {
          this.currId = id;
          continue;  
        }
        
        if(i > 0 && top > this.scope) {
          // console.log('out of reach:', id);
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
