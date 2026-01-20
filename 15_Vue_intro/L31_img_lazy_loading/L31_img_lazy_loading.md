# L31：通过 Vue 自定义指令实现图片懒加载



> 本节参考文档：[Vue 2.x 自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html)。

## 1 需求描述

在博文列表页中，通过在 `img` 元素添加自定义指令 `v-lazy`，实现图片懒加载效果：先加载默认的小图片，待到图片进入浏览器视口，再换成正式的图片 `URL`。

核心原理：

`img` 图片元素在视口范围内的判定条件逻辑是：`top` 值必须在闭区间 `[-height, clientHeight]` 内：

![](https://raw.githubusercontent.com/SafeWinter/test-imgbed/main/duyi_fe/31.2.png)

> [!note]
>
> **注意：自定义指令的适用场景**
>
> 本节使用 `Vue` 自定义指令，本意是为了巩固 `L18` 中的知识点，提高代码复用性。
>
> 但 [官方文档](https://cn.vuejs.org/guide/reusability/custom-directives.html) 也指出，自定义指令 **主要是为了重用涉及普通元素的底层 DOM 访问的逻辑**，例如，当 `Vue` 将元素插入到 `DOM` 中后，该指令会将一个 `class` 样式类 `is-highlight` 添加到元素中：
>
> ```vue
> <template>
>   <p v-highlight>This sentence is important!</p>
> </template>
> <script setup>
> // 在模板中启用 v-highlight
> const vHighlight = {
>   mounted: (el) => {
>     el.classList.add('is-highlight')
>   }
> }
> </script>
> ```





## 2 实测备忘

实测做了以下优化：

- 重新设计了用于调试的 `timer` 定时器，只在使用了 `v-lazy` 的组件页开启；

- 将缓存数组 `imgs` 的维护放到 `new Image().onload` 事件内；

- 新增 `new Image().onerror` 处理逻辑，将图片加载失败时的报错信息输出到控制台；

- 解决硬编码问题：由于 `el.getBoundingClientRect()` 在挂载前未必能计算出实时高度，视频临时采取硬编码（`150`）作为默认值。实测时将其作为自定义指令的 **参数** 引入。这里又分两种实现方案——

  - 默认高度通过 `binding.arg` 传入：`<img v-lazy:[imgHeight]="data.thumb">`；
  - （推荐）默认高度通过某个对象属性的形式传入 `binding.value`：`<img v-lazy="{src: data.thumb, height: 180}">`（具体实现详见分支 `L31_objAsValue`）；

- `MockJS` 随机生成不同占位图片的方法（允许为 `null`）：

  ```js
  {
      'thumb|1': [
          `@image('300x250', '#2f424ee1', '#FFF', '@ctitle')`,
          `@image('300x250', '#2f424ee1', '#FFF', '@ctitle')`,
          `@image('300x250', '#2f424ee1', '#FFF', '@ctitle')`,
          null
      ],
  }
  ```

- 对文章列表无封面图的优化：复用 `Empty` 组件：

  ```vue
  <template>
    <figure class="blog-card-container">
      <div class="cover">
        <router-link 
          class="link" 
          :to="{name: 'ArticleDetail', params: {id: data.id}}">
          <img v-if="data.thumb != null" 
            class="thumb" 
            v-lazy:[imgHeight]="data.thumb"
            :alt="data.title"
          />
          <Empty v-else :text="'暂无图片'" />
        </router-link>
      </div>
    </figure>
  </templat>
  <script>
  import Empty from '@/components/Empty';
  export default {
    name: "BlogCard",
    components: {
      Empty
    },
    data(){
      return {
        imgHeight: 180
      }
    },
  };
  </script>
  ```

- 最终效果：

  ![](https://raw.githubusercontent.com/SafeWinter/test-imgbed/main/duyi_fe/31.4.png)

本次实测还用到了事件总线中的 `mainScroll` 事件回调。由于担心在组件中多次使用自定义指令会重复注册多个 `mainScroll`，就在 `eventBus` 模块扩展了一个 `$view(eventName)` 方法，并将原来的侦听方法 `$on(eventName, handler)` 改为了 `$on(eventName, handler, name)`，目的是给 `v-lazy` 指令注册的 `mainScroll` 做个标记：

```js
const eventBus = {
  $on(eventName, handler, name) {
    if(handler && name) {
      handler.desc = name;
    }
    // snip
  },
  // snip
  // 临时查看自定义指令 v-lazy 已注册的 handler 来源
  $view(eventName) {
    if(!bus[eventName] || !(bus[eventName] instanceof Set)) {
      console.error(`Invalid event name: '${eventName}'`);
      return;
    }
    const withDesc = Array.from(bus[eventName])
      .filter(handler => (!!handler.desc));
    withDesc && withDesc.forEach(({desc}, i, arr) => 
      console.log(`Source(${i+1}/${arr.length}): ${desc}`))
  }
};
```

这样只要调用 `eventBus.$view('mainScroll')` 就能看到所有通过 `v-lazy` 注册的回调逻辑。实测发现，这类回调只新增了一次：**因为 z-lazy 是通过 Vue 全局安装的，在 main.js 中只引入了一次**：

![](https://raw.githubusercontent.com/SafeWinter/test-imgbed/main/duyi_fe/31.3.png)

此外，文章列表页在当前页懒加载全部结束后（**阶段①**），如果从分页组件切换到一个新的页面，会先后触发自定义指令中的三个钩子函数：`bind`、`unbind` 和 `inserted`，具体触发时机监控如下：

![](https://raw.githubusercontent.com/SafeWinter/test-imgbed/main/duyi_fe/31.1.png)

这表明 `Vue 2.x` 中的自定义指令，其元素更新时的处理顺序是：先绑定新元素 :arrow_right: 再解绑旧元素 :arrow_right: 最后渲染出新元素。



最后，让 `eventBus` 模块既能封装到 `Vue` 实例上、又能导入到 `JS` 模块使用的关键写法：

```js
// src/eventBus.js
import Vue from 'vue';
// snip
const eventBus = {
    /* snip */
};
Vue.prototype.$bus = eventBus;
export default eventBus;

// 用法
// @/directives/lazy.js:
import eventBus from '@/eventBus';
eventBus.$on('mainScroll', scrollHandler);
```

