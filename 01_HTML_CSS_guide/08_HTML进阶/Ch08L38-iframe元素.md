# Ch08L38 iframe元素



## 1 基本知识

`iframe` 元素又叫框架页，通常用于在网页中嵌入另一个页面。

`iframe` 可替换元素（`replaced element`）

1. 通常为行盒
2. 显示的内容取决于元素的属性
3. CSS 不能完全控制其中的样式
4. 具有行块盒的特点



## 2 target 的另一种用法

让 `a` 标签超链接跳转的内容在 `iframe` 内展示，可以使用 iframe 的 name 属性定义一个名称，再让 `a` 元素的 `target` 值指向该名称：

```html
<a href="https://www.baidu.com" target="myframe">百度</a>
<iframe name="myframe"></iframe>
```



## 3 示例

在本地网页引入 Bilibili 网站视频（通过 `iframe` 的方式）。
