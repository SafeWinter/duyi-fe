# 关于在 Markdown 行内【代码区域】的两边自动加注空格的实现方案



在实现博文详情页纯 `HTML` 的渲染效果时，一度想让 `<code>` 元素引用的行内代码片段自动与周围的其他普通文字保持一个空格的间距。

思路是自定义一个组件 `DemoCode.vue` 来实现（纯 CSS 尝试失败）：

```vue
<template>
  <span class="box">
    <span v-if="hasPrefix">&nbsp;</span>
    <code class="code">{{ code }}</code>
    <span v-if="hasSuffix">&nbsp;</span>
  </span>
</template>

<script>
export default {
  name: "DemoCode",
  props: {
    code: {
      type: String,
      required: true,
    },
    hasPrefix: {
      type: Boolean,
      default: true,
    },
    hasSuffix: {
      type: Boolean,
      default: true,
    },
  },
};
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
```

用法：

```vue
<template>
  <div class="blog-body-container">
    <h1 class="title">CORS跨域方案详解</h1>
    <p><demo-code :code="code1" :hasPrefix="false"/>是<demo-code :code="code2"/>的一个实例属性。</p>
  </div>
</template>

<script>
import DemoCode from './DemoCode.vue';
export default {
  components: {
    DemoCode
  },
}
</script>
```

实测效果（开头没有空格，文字中间用一个空格分隔开）：

![spaced code style](../../../../../../assets/spaced_code_style.png)



