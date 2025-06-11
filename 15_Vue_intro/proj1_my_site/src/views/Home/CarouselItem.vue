<template>
  <li class="carousel-item-container">
    <slot name="default"></slot>
  </li>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // You can add any local state here if needed
    };
  },
  methods: {
    // Define any methods you need for this component
  },
}
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100vh;
}
li {
  list-style: none;
}
</style>