<template>
  <div class="preview-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './';

export default {
  name: 'ContactPreview',
  components: {
    Contact
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/variables.less';

@size: 300px;
.preview-container{
  padding-top: 100px;
  background-color: @dark;
  color: @lightWords;
  width: @size;
  height: @size;
  margin-inline: auto;
}
</style>