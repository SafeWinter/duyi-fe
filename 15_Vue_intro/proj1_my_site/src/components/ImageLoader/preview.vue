<template>
  <div class="preview-container">
    <h1>ImageLoader 组件效果预览</h1>
    <div class="content">
      <ImageLoader 
        :src="src" 
        :placeholder="placeholder" 
        :duration="duration"
        @load="onLoaded"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from './';

export default {
  name: "ImageLoaderPreview",
  components: {
    ImageLoader,
  },
  data() {
    return {
      src: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304',
      placeholder: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100', // 替换为实际占位图 URL
      duration: 5000, // 过渡时间
    };
  },
  methods: {
    onLoaded() {
      console.log('Image loaded successfully');
    },
  },
}
</script>

<style scoped lang="less">
@import '~@/styles/variables.less';
.content {
  width: 500px;
  height: 400px;
  margin-inline: auto;
  position: relative;
  border: 2px solid @primary;
}
</style>