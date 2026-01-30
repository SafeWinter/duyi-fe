# L12：完成频道列表组件（二）



> [!tip]
>
> 欲速则不达。
>
> 学有余力者，可尝试把频道列表项和频道标题整合为一个组件。



本节实现频道列表项的批量渲染，涉及远程数据接口调用，以及组件生命周期钩子的选取。



## 1 关于默认值为对象时的处理

必须通过函数返回一个新对象，而不能直接写成对象常量，以免组件间共享同一个对象：

```js
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
```



## 2 组件生命周期

频道列表组件 `ChannelList` 的整体数据流设计：

![](../assets/12.1.png)

异步数据加载及组件的二次渲染设计：

![](../assets/12.2.png)

`Vue` 组件生命周期示意图：

![](../assets/12.3.png)



## 3 实测备忘

:one: 实测时 `activeId` 拼成 `avtiveId`，导致控制台频繁报错。

:two: 由于新的 `API` 接口没有 `channel_count` 属性值，需在获取时临时生成随机数，再手动求和补录一项【全部】。

:three: 对 `Channel` 及 `ChannelList` 组件使用 `Flexbox` 布局，为了让包含数字的弹性元素尽量靠右，其 `flex` 的值不能是 `auto`，本例中只能是 `0`（`L14`）：

```css
.inner {
  padding: 0 20px;
  display: flex;
  gap: 0.2em;
}
.label {
  color: var(--titleColor);
  font-size: .875em;
  flex: 1;
}
.num {
  color: var(--iconColor);
  font-size: .75em;
  flex: 0;
}
```



实测效果：

![](../assets/12.4.gif)

实测代码详见 `Git` 标签 `S16L12_channelList_diy`。

