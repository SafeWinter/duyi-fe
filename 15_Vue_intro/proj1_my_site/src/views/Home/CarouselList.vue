<template>
  <div ref="listContainer" class="carousel-container">
    <!-- 轮播图正文 -->
    <nav class="items" 
      :style="{marginTop}" 
      @wheel="flipPage" 
      @transitionend="wheeling = false" 
      @transitionstart="wheeling = true"
    >
      <CarouselItem v-for="(item, idx) in data" :key="item.id" :item="item">
        {{ `Carousel Item ${idx + 1}` }}
      </CarouselItem>
    </nav>
    <!-- 上下翻页图标 -->
    <div class="arrow" v-show="notFirst" @click="changeIdxBy(-1)"><Icon class="arrow-up" type="arrowUp"/></div>
    <div class="arrow" v-show="notLast" @click="changeIdxBy(1)"><Icon class="arrow-down" type="arrowDown"/></div>
    <!-- 右侧快速导航条 -->
    <ul class="indicators">
      <li class="indicator" 
        v-for="(item, idx) in data" 
        :key="item.id" 
        :class="{active: idx === currIdx}"
        @click="currIdx = idx"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';
import Icon from '@/components/Icon';

export default {
  name: 'CarouselList',
  components: {
    CarouselItem,
    Icon,
  },
  props: ['data'],
  data() {
    return {
      currIdx: 0,
      currHeight: 0,
      wheeling: false, // to prevent multiple wheel events from triggering
    }
  },
  computed: {
    marginTop() {
      return `-${this.currIdx * this.currHeight}px`;
    },
    dataLength() {
      return this.data.length;
    },
    notFirst() {
      return this.currIdx > 0;
    },
    notLast() {
      return this.currIdx < this.dataLength - 1;
    },
  },
  mounted() {
    this.updateCurrHeight();
    window.addEventListener('resize', this.updateCurrHeight);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateCurrHeight);
  },
  methods: {
    changeIdxBy(step) {
      this.currIdx = this.currIdx + step;
    },
    updateCurrHeight() {
      this.currHeight = this.$refs.listContainer.clientHeight;
    },
    flipPage(event) {
      if(this.wheeling) return;
      // console.log('wheel event detected', Date.now());
      if (event.deltaY > 0 && this.notLast) {
        this.changeIdxBy(1);
      } else if (event.deltaY < 0 && this.notFirst) {
        this.changeIdxBy(-1);
      }
    }, 
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
@import '~@/styles/variables.less';

.carousel-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: lighten(@dark, 10%);

  &>.items {
    transition: margin-top 1s ease-in-out;
  }

  & .arrow-up, & .arrow-down {
    position: fixed;
    transform: translateX(50%);
    cursor: pointer;
    font-size: 24px;
    color: @lightWords;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  & .arrow-up {
    top: 20px;
    animation-name: bounce-up;
  }
  & .arrow-down {
    bottom: 20px;
    animation-name: bounce-down;
  }
  @keyframes bounce-up {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes bounce-down {
    0%, 100% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
  }

  & .indicators{
    position: fixed;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    & > .indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: @lightWords;
      border: 1px solid @lightWords;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &.active {
        background-color: @white;
        border: none;
      }
    }
  }
}
</style>