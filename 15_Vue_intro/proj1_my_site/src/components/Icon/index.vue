<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = new Map([
  ["home", "icon-home"],
  ["success", "icon-success"],
  ["error", "icon-error"],
  ["close", "icon-close"],
  ["warn", "icon-warn"],
  ["info", "icon-info"],
  ["blog", "icon-blog"],
  ["code", "icon-code"],
  ["about", "icon-about"],
  ["weixin", "icon-wechat"],
  ["mail", "icon-mail"],
  ["github", "icon-github"],
  ["qq", "icon-qq"],
  ["arrowUp", "icon-up"],
  ["arrowDown", "icon-down"],
  ["empty", "icon-empty"],
  ["chat", "icon-chat"],
  ["toTop", "icon-to-top"],
  ["loading", "icon-loading"],
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
/* @import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css"; // original Duyi icons */
/* @import "//at.alicdn.com/t/c/font_5112736_as9xsfpfolg.css"; // custom my-site icons V1.0 */
@import "//at.alicdn.com/t/c/font_5112736_tm3s4lhivjl.css"; /* custom my-site icons V2.0 */
</style>
