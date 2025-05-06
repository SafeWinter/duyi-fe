# L05：CSS3 个人简历制作

---



## 1 需求描述

用前面所学的 `HTML5`、`CSS3`、`JavaScript` 的知识，制作一个个人求职简历页面，要求：

- 效果示例：`http://resume.yuanjin.tech/`
- 容器尺寸：`800`
- 文字颜色：`#333`
- 链接颜色：`#0ea5e9`
- 链接颜色浅色1：`#22d3ee`
- 链接颜色浅色2：`#f0fdff`
- 最后将作品发布到公网环境



## 2 要点梳理

1. 页面尽量使用 `HTML5` 语义化标签；

2. 最外层容器的蓝色倾斜阴影效果，需在其伪元素上设置 `z-index: -1;` 实现置底效果；

3. `details` 中的 `summary` 具有较多的默认样式与交互效果，纯 `CSS` 设置无法禁用 `click` 和 `toggle` 的默认交互，因此只能通过 `JavaScript` 禁用：

   ```js
   const dtls = document.querySelectorAll('details');
   dtls.forEach(dtl => {
       dtl.querySelector('summary').addEventListener(
           'click', e => e.preventDefault());
       dtl.addEventListener('toggle', ({target}) => {
           if(!target.open) {
               target.open = true;
           }
       });
   });
   ```

4. 二维布局最好用 `Grid` 网格，因为 `Flexbox` 嵌套较深；

5. **专业技能栏** 中的弧形边框是通过旋转 `::before` 元素得到的，在设置伪元素的边框颜色时，JS 引擎可能无法顺利继承到所属元素的边框色，因此需要手动指定 `inherit`（L12）：

   ```css
   &.skill5::before {
       content: '';
       position: absolute;
       top: -6px;
       left: -6px;
       width: 130px;
       height: 130px;
       border-radius: 50%;
       border: 6px solid;
       transform: rotate(45deg);
       border-color: var(--clr-link);
       border-left-color: inherit;
   }
   ```

5. `oklch()` 颜色函数可读性较差，只能在选定 `rgb()` 颜色值后通过浏览器切换成 `oklch()` 值。
6. 从阿里图标库选定某个图标后，可通过编辑功能调整图标的大小（网站提供了多套定位网格）；下载到本地后，如果是使用样式类引入图标，应该删除其他无关配置文件。
7. 简历中需要强调的文字内容，可通过 `<em>` 元素包裹，然后设置 `margin-inline` 实现与周边文字保持一定间隔距离，无需像视频那样通过换行符添加空白。

