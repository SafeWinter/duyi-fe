<template>
  <figure class="empty-container">
    <Icon type="empty" />
    <figcaption>{{ text }}</figcaption>
  </figure>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Empty",
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/mixin.less";
@import "~@/styles/variables.less";

.empty-container {
  .centered();
  color: @gray;

  & .icon-container {
    font-size: 4em;
  }

  & figcaption {
    margin-block-start: 0.6em;
  }
}
</style>
