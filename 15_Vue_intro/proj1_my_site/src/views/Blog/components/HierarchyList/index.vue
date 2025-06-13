<template>
  <ul class="hierachy-list-container">
    <li v-for="item in data" :key="item.id">
      <span :class="{active: item.id === currId}" @click="clickLabel(item)">{{ item.label }}</span>
      <HierarchyList v-if="item.children.length > 0" 
        :data="item.children" 
        :currId="currId"
        @selected="clickLabel"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HierarchyList',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    currId: {
      type: Number,
      default: 0,
      immediate: true,
    }
  },
  methods: {
    clickLabel(item) {
      this.$emit('selected', item);
    }
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';

.hierachy-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;

    & .active {
      color: @warn;
      font-weight: bold;
    }

    & .hierachy-list-container {
      margin-inline-start: 1em;
      padding: 0;
    }
  }
}
</style>