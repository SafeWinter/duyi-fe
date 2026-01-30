<template>
  <div class="channel">
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <span class="name">{{ data.name }}</span>
        <span class="number">{{ data.channel_count }}</span>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型是boolean
      // required: true, //约束该属性必须要传递
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.channel {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.inner {
  padding: 0 20px;
}
.name {
  font-size: 14px;
  color: #212121;
}
.number {
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}
.name,
.number {
  float: left;
}
</style>
