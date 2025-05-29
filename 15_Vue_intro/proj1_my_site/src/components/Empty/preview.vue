<template>
  <div class="preview-container">
    <h1>Empty 组件效果预览</h1>
    <div class="content">
        <Empty :text="text" />
    </div>
  </div>
</template>

<script>
import Empty from './';

export default {
    components: {
        Empty
    },
    data() {
        return {
            text: '暂无数据'
        };
    },
}
</script>

<style scoped lang="less">
.content {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    border: 2px solid;
    position: relative;
}
</style>