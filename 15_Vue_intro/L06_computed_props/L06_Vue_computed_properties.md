# L06：计算属性

---



## 1 计算属性

完整的计算属性书写：

```js
computed: {
  propName: {
    get(){
      // getter
    },
    set(val){
      // setter
    }
  }
}
```

只包含 `getter` 的计算属性简写：

```js
computed: {
  propName(){
    // getter
  }
}
```

> [!important]
>
> **牢记**
>
> 只要计算属性依赖的值不变，其 `getter` 逻辑就不会执行（直接走缓存）。



## 2 关于透传 Attributes

> 官方文档：https://cn.vuejs.org/guide/components/attrs#fallthrough-attributes

**透传 Attributes（Fallthrough Attributes）**指的是传递给一个组件、却没有被该组件声明为 [props](https://cn.vuejs.org/guide/components/props.html) 或 [emits](https://cn.vuejs.org/guide/components/events.html#defining-custom-events) 的 `attribute` 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

如果一个子组件的 `class` 类是从父组件声明的，则该样式类会透传到子组件模板的根元素上，并且和根元素已有的样式类合并到一起：

```html
<!-- 从父组件获得一个样式类 large -->
<MyButton class="large" />
<!-- <MyButton> 的模板 -->
<button class="btn">Click Me</button>
```

最后渲染出的 `DOM` 结果是：

```html
<button class="large btn">Click Me</button>
```

如果子组件不是单根结构，则透传时需要显式指定生效的组件元素，否则会抛出一个运行时警告：

```html
<!-- 父组件透传： -->
<CustomLayout id="custom-layout" @click="changeValue" />
<!-- 子组件模板： -->
<header>...</header>
<main>...</main>
<footer>...</footer>
```

此时如果 `$attrs` 被显式绑定，则不会有警告：

```html
<header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer>
```

> [!note]
>
> **注意**
>
> 这里的 `v-bind="$attrs"` 表示将透传对象 `$attrs` 的所有属性都作为 `attribute` 应用到目标元素上。

默认情况下，组件会自动透传来自父组件的 `attribute` 属性，手动禁用该行为，需要在组件的配置选项上声明 `inheritAttrs: false`。常见的应用场景为：`attribute` 需要应用在根节点以外的其他元素上。通过设置 `inheritAttrs` 选项为 `false`，你可以完全控制透传进来的 `attribute` 被如何使用。

这些透传进来的 `attribute` 可以在模板的表达式中直接用 `$attrs` 访问到：

```vue
<span>Fallthrough attribute: {{ $attrs }}</span>
```

在 `JS` 中则可通过以下方式访问透传 `Attributes`：

```js
export default {
  created() {
    console.log(this.$attrs)
  }
}
```





## 2 面试题：计算属性和方法有什么区别？


> 答：计算属性本质上是包含 `getter` 和 `setter` 的方法。
>
> 当获取计算属性时，实际上是在调用计算属性的 `getter` 方法。`Vue` 会收集计算属性的依赖，并缓存计算属性的返回结果。只有当依赖变化后才会重新进行计算；
>
> 而方法没有缓存，每次调用方法都会导致 **重新执行**。
>
> 计算属性的 `getter` 和 `setter` 参数固定，`getter` 没有参数，`setter` 只有一个参数。而方法的参数不限。
>
> 由于有以上的这些区别，因此计算属性通常是根据已有数据得到其他数据，并在得到数据的过程中不建议使用 **异步、当前时间、随机数** 等副作用操作。
>
> 实际上，他们最重要的区别是 **含义上的区别**——
>
> - 计算属性含义上也是一个 **数据**，可以 **读取** 也可以 **赋值**；
> - 方法含义上是一个 **操作**，用于处理一些事情。
