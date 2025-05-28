<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = new Map([
  ["home", "iconzhuye"],
  ["success", "iconzhengque"],
  ["error", "iconcuowu"],
  ["close", "iconguanbi"],
  ["warn", "iconjinggao"],
  ["info", "iconxinxi"],
  ["blog", "iconblog"],
  ["code", "iconcode"],
  ["about", "iconset_about_hov"],
  ["weixin", "iconweixin"],
  ["mail", "iconemail"],
  ["github", "icongithub"],
  ["qq", "iconsign_qq"],
  ["arrowUp", "iconiconfonticonfonti2copy"],
  ["arrowDown", "iconiconfonticonfonti2"],
  ["empty", "iconempty"],
  ["chat", "iconliuyan"],
]);

export const types = [...classMap.keys()];

export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap.get(this.type) || "iconzhuye";
    },
  },
};
</script>
<style>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
</style>
