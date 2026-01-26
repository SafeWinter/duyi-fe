# L36：实现【关于我】页面



核心原理：通过 `iframe` 嵌入第三方个人介绍页面。

嵌入页面的 `URL` 可放入 `store`，进一步练习 `Vuex` 的相关使用。

从 `Vuex` 的子模块注入 `loading` 和 `data` 后，`iframe` 的加载同样需要一定的时间。

要让最终页面加载前一直显示【正在加载中】的效果，可以注册 `iframe` 的 `load` 事件，并新增一个 `About` 页本地的响应式变量 `contentReady`：

```vue
<template>
  <div class="about-container" v-loading="loading || !contentReady">
    <iframe
      class="content"
      :src="src"
      frameborder="0"
      @load="contentReady = true"
    ></iframe>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapState("about", {
      src: "data",
      loading: "loading",
    }),
  },
  data() {
    return {
      contentReady: false,
    };
  },
  async created() {
    await this.$store.dispatch("about/fetchAbout");
  },
};
</script>
```

