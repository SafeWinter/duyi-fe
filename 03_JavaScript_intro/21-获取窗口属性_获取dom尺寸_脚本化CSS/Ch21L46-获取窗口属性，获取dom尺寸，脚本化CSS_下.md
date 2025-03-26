# Ch21L46 获取窗口属性，获取dom尺寸，脚本化CSS_下



## 1 获取元素计算样式

语法：`window.getComputedStyle(elem, null)`

该属性只读，且样式不含相对单位（都是绝对值）

> [!tip]
>
> **关于伪元素样式的读取**
>
> 通过 `window.getComputedStyle()` 的第二参数：
>
> ```js
> const div = document.querySelector(.box);
> console.log(getComputedStyle(div, 'after'));
> ```
>
> 但是，伪元素的样式只能获取，不能设置。



## 2 关于 elem.style

通过 `elem.style` 获取的都是行内样式，如果行内样式没有值，则获取样式为空字符串。

若样式属性名为 JS 保留字（如 `float`），则建议加上 `css` 前缀。例如：

`elem.style.cssFloat`



## 3 封装兼容 IE 的样式获取函数

```js
function getStyle(elem, prop) {
    if(window.getComputedStyle) {
        return window.getComputedStyle[prop];
    } else {
        // IE compatible
        return elem.currentStyle[prop];
    }
}
```



## 4 切换伪类样式

通过切换样式类来实现。优点：好维护、提效率。

通常，涉及样式状态变更的，先写到 CSS 样式表中，再用 JS 切换相应的样式类即可。
