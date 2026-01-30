<template>
  <div class="item-container" 
    :class="{active: isActive}"
    @click="handleClick"
  >
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
  },
  methods: {
    handleClick(){
      this.$emit('activate');
    }
  },
};
</script>

<style scoped>
.item-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: background-color .2s linear;

  --hover: #f4f4f4;
  --active: #e7e7e7;
}
.item-container:hover {
  background-color: var(--hover);
}
.active {
  background-color: var(--active);
}
</style>
