<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
var map = {
  arrowUp: "icon-arrow-up",
  arrowDown: "icon-jiantou9",
  search: "icon-search",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1564527_xeqdi43zgw.css";
</style>
