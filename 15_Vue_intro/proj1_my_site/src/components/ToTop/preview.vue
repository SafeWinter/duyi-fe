<template>
  <div class="to-top-preview-container">
    <long-page class="box" />
    <to-top class="test"
      :style="{'line-height': `${size}px`}" 
      :size="size" 
      :title="title" 
      :offset="offset" 
    />
  </div>
</template>

<script>
import LongPage from "./LongPage";
import ToTop from ".";
import previewMixin from "./previewMixin";

export default {
  name: "ToTopPreview",
  mixins: [previewMixin],
  components: {
    LongPage,
    ToTop,
  },
  data() {
    return {
      size: 70,
      title: "Back to Top",
      offset: 200,
    };
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/variables.less';

.to-top-preview-container {
  box-sizing: border-box;

  padding: 0;
  margin: 0;
  max-width: 800px;
  height: 95vh;
  margin: 0 auto;
  border: 4px solid lighten(@primary, 15%);
  position: relative;

  & > .box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  & .test.to-top-container {
    position: absolute;
    font-size: 1.5em;
  }
}
</style>
