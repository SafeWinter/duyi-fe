<template>
  <div class="data-list-container">
    <data-item v-for="item in data" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import DataItem from "./DataItem";

export default {
  name: "DataList",
  props: ['data'],
  components: {
    DataItem,
  },
};
</script>

<style lang="less" scoped>
.data-list-container {
  margin-block-end: 6em;
}
</style>
