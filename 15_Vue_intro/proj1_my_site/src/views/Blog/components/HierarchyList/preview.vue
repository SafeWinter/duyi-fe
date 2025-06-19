<template>
  <div class="hierachy-list-preview">
    <h1>HierachyList 组件预览</h1>
    <hierachy-list :data="data" @selected="handleSelected" :currId="currId"></hierachy-list>
  </div>
</template>

<script>
import HierachyList from './';
export default {
  name: 'HierachyListPreview',
  components: {
    HierachyList
  },
  data() {
    return {
      currId: 3,
      data:  [
        { id: 1, label: "a", children: [] },
        { id: 2, label: "b", children: [] },
        {
          id: 3, label: "c",
          children: [
            { id: 4, label: "c-1", children: [] },
            {
              id: 5, label: "c-2",
              children: [
                { id: 6, label: "c-2-1", children: [] },
                { id: 7, label: "c-2-2", children: [] },
                { id: 8, label: "c-2-3", children: [] },
                { id: 9, label: "c-2-4", children: [] },
              ],
            },
            { id: 10, label: "c-3", children: [] },
            { id: 11, label: "c-4", children: [] },
          ],
        },
        { id: 12, label: "d", children: [] },
      ],
    }
  },
  methods: {
    handleSelected(item) {
      console.log('Selected item:', item);
      this.currId = item.id;
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/variables.less';
.hierachy-list-preview {
  width: 20%;
  margin: 2em auto;
  padding-inline: 2em;
  border: 2px solid @selected;
}
</style>