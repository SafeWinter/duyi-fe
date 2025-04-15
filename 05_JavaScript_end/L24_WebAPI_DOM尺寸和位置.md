# L24：WebAPI-DOM 尺寸和位置

---

## dom 进阶

### dom 尺寸和位置

![](assets/24.1.png)

![](assets/24.2.png)

![](assets/24.3.png)

![](assets/24.4.png)

> 调用 `dom.scrollTo(x, y)` 可以设置元素的滚动位置，`x` 和 `y` 分别表示 `scrollLeft` 和 `scrollTop`
>
> 该方法通用元素回到元素顶部 `dom.scrollTo(0, 0)`
>
> 如果要监听元素的滚动，可以监听事件类型：==scroll==

[Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

![](assets/24.5.png)

> 上图中的 `top`、`left`、`right`、`bottom` 均相对于视口

