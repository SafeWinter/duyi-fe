<template>
  <img 
    class="avatar-container" 
    :src="url" 
    :style="dimensionStyles"
  />
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    dimensionStyles() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },
  },
};
</script>

<style scoped lang="less">
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
