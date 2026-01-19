<template>
  <ul class="hierachy-list-container">
    <li v-for="item in data" :key="item.id">
      <span 
        class="label"
        :class="{active: item.id === currId}" 
        @click="clickLabel(item)"
      >
        {{ item.label }}
        <span 
          class="stats" 
          :class="{active: item.id === currId}"
          v-if="hasCount(item)"
        >{{ item.count }} 篇</span>
      </span>
      <HierarchyList v-if="hasChildren(item)" 
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
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    clickLabel(item) {
      this.$emit('selected', item);
    },
    hasChildren(item) {
      return item.children && item.children.length > 0;
    },
    hasCount({count}) {
      return count !== undefined && count !== null && count >= 0;
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
    
    & > .label {
      width: 100%;
      height: 100%;
      display: block;
      &:hover {
        background-color: lighten(@primary, 25%);
        border-radius: 0.25em;
      }
    }

    & .active, & .stats.active {
      color: @warn;
      font-weight: bold;
    }

    & .hierachy-list-container {
      margin-inline-start: 1em;
      padding: 0;
    }

    & .stats {
      color: #999;
      margin-left: 0.5em;
      font-size: 0.75rem;
    }
  }
}
</style>