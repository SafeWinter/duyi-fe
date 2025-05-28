<template>
  <div>
    <h1>Pager 组件效果预览</h1>
    <Pager :current="current" :total="total" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from './'
export default {
  components: { Pager },
  data() {
    return {
        current: 1,
        total: 302,
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log(`当前页码: ${newPage}`);
    }
  }
}
</script>

<style scoped lang="less"></style>