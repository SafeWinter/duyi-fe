<template>
  <footer class="collapse-bar-container"
    :style="footerHeight" 
    @click="$emit('change')"
  >
    <span class="tip">{{ tip }}</span>
    <span class="icon">
      <i :class="`bili b-${iconCls}`"></i>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'CollapseBar',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 40,  // px
    }
  },
  computed: {
    footerHeight() {
      const height = `${this.height}px`;
      return { height, 'line-height': height };
    },
    tip() {
      return this.collapsed ? '展开' : '收起';
    },
    iconCls() {
      return this.collapsed ? 'down' : 'up';
    }
  },
}
</script>

<style scoped>
/* @import '//at.alicdn.com/t/c/font_5120779_ks8qkejugrm.css'; V1: no search icon */
@import '//at.alicdn.com/t/c/font_5120779_lsieqh95kg.css';  /* V2: latest */

.collapse-bar-container {
  box-sizing: border-box;
  width: 100%;
  align-content: center;
  cursor: pointer;
  text-align: center;
  color: #999;
  font-size: .875em;
  user-select: none;

  transition: background-color 0.2s linear;

  display: flex;
  gap: 0.25em;
  justify-content: center;
}

.collapse-bar-container:hover {
  background-color: #f4f4f4;
  color: #707070;
  font-weight: 500;
}

.bili {
  font-size: .75em;
  color: inherit;
}
</style>