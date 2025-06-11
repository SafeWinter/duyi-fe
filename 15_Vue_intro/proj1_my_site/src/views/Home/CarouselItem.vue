<template>
  <li class="carousel-item-container">
    <ImageLoader :src="item.bigImg" :placeholder="item.midImg" />   
    <div class="content">
      <h2 ref="title" class="title">{{ item.title }}</h2>
      <p ref="desc" class="description">{{ item.description }}</p>
    </div>
  </li>
</template>

<script>
/* item structure: {
  id: "1",
  midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
  bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
  title: "凛冬将至",
  description: "人唯有恐惧的时候方能勇敢",
}, */
import ImageLoader from '@/components/ImageLoader';
export default {
  name: 'CarouselItem',
  props: ['item'],
  components: {
    ImageLoader,
  },
  data() {
    return {
      // You can add any local state here if needed
    };
  },
  mounted() {
    this.animateElem(this.$refs.title);
    this.animateElem(this.$refs.desc);
  },
  methods: {
    animateElem(el) {
      // 不可见时获取宽度
      const { width } = el.getBoundingClientRect();
      el.style.width = `0`;
      setTimeout(() => {
        el.style.width = `${width}px`;
      }, 0);
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.carousel-item-container {
  width: 100%;
  height: 100vh;
  position: relative;

  & > .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: justify;
    margin-left: 2em;
    color: lighten(@lightWords, 30%);
    letter-spacing: 0.4em;

    & > .title, & > .description {
      text-shadow: 1px 0 rgba(0 0 0 / 0.5),
                0 1px rgba(0 0 0 / 0.5),
                -1px 0 rgba(0 0 0 / 0.5),
                0 -1px rgba(0 0 0 / 0.5);
      white-space: nowrap;
      overflow: hidden;
      transition: width 0.8s linear;
    }

    & > .title {
      display: inline-block;
      font-size: 2em;
      font-weight: bold;
    }
    & > .description {
      transition-delay: 0.8s;
      font-size: 1.2em;
      margin-top: 1em;
    }
  }
}
</style>