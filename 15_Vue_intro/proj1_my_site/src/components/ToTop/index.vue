<template>
  <div 
    class="to-top-container" 
    :v-show="visible" 
    :style="dimensionStyle"
    @click="backToTop"
  >
    <Icon type="toTop" :title="title" />
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  name: "ToTop",
  components: {
    Icon,
  },
  props: {
    offset: {
      type: Number,
      default: 500 // px
    },
    size: {
      type: Number,
      default: 50 // px
    },
    title: {
      type: String,
      default: '回到顶部'
    },
  },
  computed: {
    dimensionStyle() {
      return (this.visible) ? {
        width: `${this.size}px`,
        height: `${this.size}px`
      } : {
        display: 'none'
      };
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    checkVisibility(dom) {
      this.visible = (!dom) ? false : (dom.scrollTop >= this.offset);
    },
    backToTop() {
      this.$bus.$emit('backToTop', 0);
    }
  },
  mounted() {
    this.$bus.$on('mainScroll', this.checkVisibility);
  },
  beforeDestroy() {
    this.$bus.$off('mainScroll', this.checkVisibility);
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.to-top-container {
  background-color: @primary;
  text-align: center;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  color: @white;
  border-radius: 50%;
  cursor: pointer;

  & > .icon-container {
    font-size: 2em;
  }
  
}
</style>
