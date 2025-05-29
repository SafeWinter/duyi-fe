<template>
  <div class="image-loader-container">
    <img v-if="visible" :src="placeholder" class="placeholder" />
    <img @load="onLoaded" 
      :src="src" 
      :style="{ 
        opacity: imgReady, 
        transition: `opacity ${duration}ms linear` 
      }"
    />
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500, // 默认过渡时间为 500 毫秒
    },
  },
  data() {
    return {
      loaded: false, // 用于跟踪图片是否加载完成
      visible: true, // 用于控制占位图是否隐藏
    };
  },
  computed: {
    imgReady() {
      return this.loaded ? 1 : 0; // 根据图片加载状态返回透明度
    },
  },
  methods: {
    onLoaded() {
      this.loaded = true;
      setTimeout(() => {
        this.visible = false; // 图片加载完成后隐藏占位图
        this.$emit('load'); // 触发 load 事件
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/mixin.less';
.image-loader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > img {
    .fullSized();
    object-fit: cover; /* 保持图片比例填充容器 */
    &.placeholder {
      filter: blur(1vw);
    }
  }
}
</style>