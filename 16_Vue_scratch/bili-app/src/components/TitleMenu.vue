<template>
  <div class="title-menu">
    <Item :isActive="isActive" @activate="$emit('activate')">
      <div class="inner">
        <div class="title left">
          <slot name="title"></slot>
        </div>
        <div class="icon right">
          <slot name="icon"></slot>
        </div>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "TitleMenu",
  components: {
    Item,
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    }
  },
};
</script>

<style scoped>
.title-menu {
  width: 100%;
  height: 46px;
  line-height: 46px;

  --titleColor: #212121;
  --iconColor: #999;
}
.inner {
  padding: 0 20px;
}
.left {
  float: left;
  color: var(--titleColor);
  font-weight: 500;
}
.right {
  float: right;
  font-size: .75em;
  color: var(--iconColor);
}
</style>
