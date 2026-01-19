<template>
  <div class="icon-container">
    <h1>Icon 组件效果预览</h1>
    <div class="items">
      <figure v-for="(t, i) in types" :key="i">
        <Icon :type="t" :id="t" />
        <label :for="t">{{ t }}</label>
      </figure>
    </div>
  </div>
</template>

<script>
import { default as Icon, types } from "./";
export default {
  name: "IconPreview",
  components: { Icon },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/variables.less";

.items {
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  & > figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > label {
      margin-block-start: 0.5rem;
      font-size: 1rem;
      color: @words;
    }

    & .iconfont {
      font-size: 2.5em;
      color: @primary;
    }
  }
}
</style>
