<template>
    <i class="icon-container" :class="[iconCls, extraCls]"></i>
</template>

<script>

const ICON_MAP = new Map([
  ['up', 'bili b-up'],
  ['down', 'bili b-down'],
  ['search', 'bili b-search'],
]);

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true,
    },
    extraCls: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconCls() {
      return ICON_MAP.get(this.type);
    }
  }
};
</script>

<style scoped>
/* @import '//at.alicdn.com/t/c/font_5120779_ks8qkejugrm.css'; v1: no search icon */
@import '//at.alicdn.com/t/c/font_5120779_lsieqh95kg.css';
/* .icon-container {} */
</style>
