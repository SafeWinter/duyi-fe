<template>
  <div>
    <h1>App 组件</h1>
    <Icon :type="type" />
  </div>
</template>

<script>
import Icon from './components/Icon';

export default {
  name: 'App',
  components: {
    Icon
  },
  data() {
    return {
      type: 'home'
    }
  },
}
</script>

<style scoped>
  .iconfont {
    font-size: 26px;
    color: #f00;
  }
</style>