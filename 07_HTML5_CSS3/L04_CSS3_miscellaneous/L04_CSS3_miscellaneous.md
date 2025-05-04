# L04：CSS3 杂项

---

主要结合 `CSS3_manual.md` 的第四节 **其他** 进行复习。



## 1 伪元素

主要介绍 `::before` 和 `::after`，更多常见伪元素，详见 [《【CSS in Depth 2 精译_100】附录A：CSS 选择器的含义及部分用法示例》](https://blog.csdn.net/frgod/article/details/144163032)。

伪元素的用法扩展，可以参考这篇文章：[https://css-tricks.com/the-shapes-of-css/](https://css-tricks.com/the-shapes-of-css/)。



## 2 视口相对单位

按照最新的规定，视口相对单位新增了很多新概念 [^1]：

|             | 未指定视口（原始单位） |      大视口       |      小视口       |     动态视口      |
| :---------: | :--------------------: | :---------------: | :---------------: | :---------------: |
|   宽 / 高   |      `vw` / `vh`       |   `lvw` / `lvh`   |   `svw` / `svh`   |   `dvw` / `dvh`   |
| 最小 / 最大 |    `vmin` / `vmax`     | `lvmin` / `lvmax` | `svmin` / `svmax` | `dvmin` / `dvmax` |
|  内联 / 块  |      `vi` / `vb`       |   `lvi` / `lvb`   |   `svi` / `svb`   |   `dvi` / `dvb`   |



## 3 关于自定义字体

即 `@font-face` 指令。关于字体图标的详细配置，可以参考 **《Tiny CSS Projects》** 第 9 章 9.4 节内容。



## 4 滚动条添加样式的位置

在滚动条所在的元素上设置，即 `html` 元素：

```css
html {
    scroll-behavior: smooth;
}
```





---

[^1]: 摘自《【CSS in Depth 2 精译_014】2.4 视口的相对单位》，详见：https://blog.csdn.net/frgod/article/details/140164863





