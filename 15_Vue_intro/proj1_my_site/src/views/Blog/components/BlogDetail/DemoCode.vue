<template>
  <span class="box"><span v-if="hasPrefix">&nbsp;</span><code class="code">{{ code }}</code><span v-if="hasSuffix">&nbsp;</span></span>
</template>

<script>
  export default {
    name: 'DemoCode',
    props: {
      code: {
        type: String,
        required: true
      },
      hasPrefix: {
        type: Boolean,
        default: true
      },
      hasSuffix: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="less" scoped>
.code {
  font-family: monospace, monospace;
  font-size: 1em;
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: #f9f2f4; // rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  color: #c7254e;
}
</style>