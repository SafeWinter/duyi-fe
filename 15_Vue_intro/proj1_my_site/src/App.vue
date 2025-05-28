<template>
  <div>
    <h1>App 组件</h1>
    <Pager 
      :current="current" 
      :total="total" 
      @pageChange="handlePageChange" 
    />
  </div>
</template>

<script>
import Pager from './components/Pager';

export default {
  name: 'App',
  components: {
    Pager
  },
  data() {
    return {
      current: 1,
      total: 302
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    }
  }
}
</script>

<style scoped></style>