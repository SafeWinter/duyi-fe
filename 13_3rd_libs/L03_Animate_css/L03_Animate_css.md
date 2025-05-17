# L03：JS 第三方库之 Animate.css

---

> 课程内容详见 `Third_libraries_manual.md` 的 `Animate.css` 小节。



## Animate.css 发展历程与核心特性概述

`Animate.css` 是一个广受欢迎的 `CSS3` 动画库，它提供了一系列预设的、高性能的关键帧动画效果，适用于网页和移动端开发。其设计初衷是让开发者能够快速、便捷地为网页元素添加流畅的动画，而无需手动编写复杂的 `@keyframes` 规则。



### 1 起源与初期发展

`Animate.css` 由 **Daniel Eden** 于 2013 年左右创建，最初是一个轻量级的 `CSS` 文件，包含多种常见的动画效果，如淡入淡出（`fade`）、滑动（`slide`）、弹跳（`bounce`）等。它的出现填补了当时前端开发中 `CSS3` 动画工具库的空白，并因其 **简单易用、零依赖** 的特性迅速流行。



### 2 功能扩展与优化（2014-2016）

随着 `CSS3` 动画的普及，`Animate.css` 逐步扩展其动画种类，从最初的几十种增加到 **60+ 种预设动画**，涵盖入场（`entrance`）、退场（`exit`）、强调（`attention`）等多种动画类型。该库的优化重点包括：

- **浏览器兼容性**：支持现代浏览器（`Chrome`、`Firefox`、`Safari`、`IE10+`），并通过添加 `-webkit-`、`-moz-` 等前缀确保跨平台一致性。
- **模块化使用**：允许开发者按需引入部分动画，减少 `CSS` 文件体积。



### 3 现代应用与生态整合（2017 年至今）

近年来，`Animate.css` 被广泛集成到前端框架（如 **Vue、React**）中，成为动态 `UI` 交互的常用工具。例如：

- **Vue 过渡动画**：通过 `<transition>` 组件的 `enter-active-class` 和 `leave-active-class` 直接调用 `Animate.css` 的类名（如 `fadeIn`、`bounceOut`），简化动画实现。
- **React 结合使用**：搭配 `react-transition-group` 或直接通过 `className` 动态切换动画效果。



### 4 核心特点与优势

| **特性**     | **Animate.css**                                  | **原生 CSS3 动画**                          |
| :----------- | :----------------------------------------------- | :------------------------------------------ |
| **易用性**   | 直接添加类名即可触发动画（如 `animate__fadeIn`） | 需手动编写 `@keyframes` 和 `animation` 属性 |
| **动画种类** | **60+** 种预设动画，覆盖常见交互场景             | 需自行设计动画效果                          |
| **性能**     | 优化过的 `CSS3` 动画，硬件加速支持               | 依赖开发者优化                              |
| **兼容性**   | 自动处理浏览器前缀，支持主流现代浏览器           | 需手动添加前缀                              |
| **扩展性**   | 可自定义动画参数（如时长、循环次数）             | 完全自由定制，但更复杂                      |



### 5 典型应用场景

1. **网页元素入场/退场动画**（如弹窗、提示框）。
2. **交互反馈**（如按钮点击效果、加载动画）。
3. **SPA（单页应用）页面过渡**，结合 `Vue` / `React` 实现平滑路由切换。



### 6 安装与示例

```html
<!-- 引入 Animate.css -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

<!-- 使用动画 -->
<div class="animate__animated animate__bounce">Hello!</div>
```

动态控制（`JavaScript`）：

```js
// 添加动画
element.classList.add('animate__animated', 'animate__fadeIn');

// 动画结束后移除类（避免冲突）
element.addEventListener('animationend', () => {
  element.classList.remove('animate__animated', 'animate__fadeIn');
});
```



### 7 总结

`Animate.css` 凭借其 **开箱即用、高性能、广泛兼容** 的特点，成为前端开发中最受欢迎的 `CSS` 动画库之一。尽管现代 `CSS` 和 `JavaScript` 动画方案（如 `GSAP`、`Framer Motion`）提供了更强大的控制能力，但 `Animate.css` 仍因其 **极简的 API** 和 **丰富的预设动画** 在快速开发场景中占据重要地位。未来，随着 `CSS` 动画标准的演进，该库可能会进一步优化，以适应新的 `Web` 动画需求。