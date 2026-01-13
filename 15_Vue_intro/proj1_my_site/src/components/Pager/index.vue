<template>
  <div class="pager-container" v-if="totalPage > 0">
    <a @click="changePage(1)" :class="{ disabled: isFirstPage }">|&lt;&lt;</a>
    <a @click="changePage(current - 1)" :class="{ disabled: isFirstPage }">&lt;&lt;</a>
    <a
      v-for="(p, i) in pages"
      :key="i"
      @click="changePage(p)"
      :class="{ active: p === current }"
    >{{ p }}</a>
    <a @click="changePage(current + 1)" :class="{ disabled: isLastPage }">&gt;&gt;</a>
    <a @click="changePage(totalPage)" :class="{ disabled: isLastPage }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    current: {
      type: Number,
      required: true,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    visibleRange() {
      const offset = this.visibleNumber - 1;
      let min = this.current - Math.floor(this.visibleNumber / 2),
        max = min + offset;

      if (min < 1) {
        min = 1;
        max = Math.min(min + offset, this.totalPage);
      } else if (max > this.totalPage) {
        max = this.totalPage;
        min = Math.max(max - offset, 1);
      }

      return {
        min,
        max,
      };
    },
    pages() {
      const { min, max } = this.visibleRange;
      return Array.from({ length: max - min + 1 }, (_, i) => min + i);
    },
    isFirstPage() {
      return this.current === 1;
    },
    isLastPage() {
      return this.current === this.totalPage;
    },
  },
  methods: {
    changePage(newPage) {
        const target = Math.max(1, Math.min(newPage, this.totalPage));
        if(target === this.current) {
            return;
        }
        this.$emit("pageChange", target);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/variables.less";

.pager-container {
  display: flex;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    min-width: 30px;
    cursor: pointer;
    color: @primary;
    user-select: none;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
