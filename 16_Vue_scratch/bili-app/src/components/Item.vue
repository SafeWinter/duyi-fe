<template>
  <div class="item-container" :class="{active: isActive}">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    isActive: {
      type: Boolean,
      // required: true,
      default: false
    }
  }
};
</script>

<style scoped>
.item-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.item-container:hover {
  background-color: #f4f4f4;
}
.active {
  background-color: #e7e7e7;
}
</style>
