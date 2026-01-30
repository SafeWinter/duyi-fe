<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型是boolean
      // required: true, //约束该属性必须要传递
      default: false,
    },
  },
  methods: {
    handleClick() {
      //我知道发生了一点重要的事情，但我不知道该做什么，此时，应该通知父组件
      this.$emit("active");
    },
  },
};
</script>

<style scoped>
.active {
  background: #e7e7e7;
}
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.2s;
}
.item:hover {
  background: #f4f4f4;
}
</style>
