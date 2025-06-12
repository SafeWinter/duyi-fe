<template>
  <li class="carousel-item-container" ref="outer" 
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <ImageLoader ref="inner" class="inner"
      :src="item.bigImg" 
      :placeholder="item.midImg" 
      :style="imgPosition"
      :load="showText"
    />
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
      outerSize: null,
      innerSize: null,
      mouseX: 0,  // px
      mouseY: 0,  // px
      padding: 5, // px
    };
  },
  computed: {
    imgPosition() {
      const x = this.mouseX * this.ratio.x;
      const y = this.mouseY * this.ratio.y;
      return {
        transform: `translate(${x}px, ${y}px)`,
      }
    },
    ratio() {
      if(!this.outerSize || !this.innerSize) {
        return {x: 1, y: 1};
      }
      return {
        x: (this.outerSize.width - this.innerSize.width) / this.outerSize.width,
        y: (this.outerSize.height - this.innerSize.height) / this.outerSize.height,
      };
    },
    nearBorder() {
      const gap = this.padding;
      const [x, y] = [this.mouseX, this.mouseY];
      const [width, height] = [this.outerSize.width, this.outerSize.height];
      const nearLeft = x <= gap;
      const nearTop = y <= gap;
      const nearRight = x >= width - gap;
      const nearBottom = y >= height - gap;
      return [nearBottom, nearTop, nearLeft, nearRight].some(t => t);
    },
  },
  mounted() {
    this.showText();
    this.computeContainerSize();
    window.addEventListener('resize', this.computeContainerSize);
    this.centerImg();  // 初始居中
  },
  destroyed() {
    window.removeEventListener('resize', this.computeContainerSize);
  },
  methods: {
    animateElem(el) {
      // 不可见时获取宽度
      const { width } = el.getBoundingClientRect();
      el.style.width = `0`;
      setTimeout(() => el.style.width = `${width}px`, 0);
    },
    showText() {
      this.animateElem(this.$refs.title);
      this.animateElem(this.$refs.desc);
    },
    computeContainerSize() {
      this.outerSize = {
        width: this.$refs.outer.clientWidth,
        height: this.$refs.outer.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.inner.$el.clientWidth,
        height: this.$refs.inner.$el.clientHeight,
      };
    },
    handleMouseMove({clientX, clientY}) {
      // 计算鼠标相对外容器的坐标
      const {left, top} = this.$refs.outer.getBoundingClientRect();
      this.mouseX = clientX - left;
      this.mouseY = clientY - top;
      const innerEl = this.$refs.inner.$el;
      innerEl.classList.toggle('valid', this.nearBorder);
      innerEl.classList.toggle('invalid', !this.nearBorder);
    },
    handleMouseLeave() {
      this.centerImg();
    },
    centerImg() {
      this.mouseX = this.outerSize.width / 2;
      this.mouseY = this.outerSize.height / 2;
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // overflow: visible; // test
  & > .inner {
    width: 110%;
    height: 110%;

    // z-index: -1; //test

    &.valid { transition: transform 0.3s; }
    &.invalid { transition: none; }
  }

  & > .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: justify;
    margin-left: 5em;
    color: lighten(@lightWords, 30%);
    letter-spacing: 0.4em;

    // opacity: 0; // test

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