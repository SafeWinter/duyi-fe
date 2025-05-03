# L01 CSS3 视觉类特性



## 1 关于习题

本节以练促学，重点培养查询 CSS 文档的能力（`CSS3_manual.md`）。

补充两点：

1. 练习四：按钮外边框除了用 `box-shadow` 实现，还可以用 `outline` + `outline-offset`；

```css
.btn {
  &:active {
    /* 利用 box-shadow 实现外边框：*/
    /* box-shadow: 
      0 0 0 0.21em white, 
      0 0 0 0.4em #4293fc;*/

    /* 利用 outline 实现外边框 */
    outline: 0.21em solid #4293fc;
    outline-offset: 0.24em;
  }
}
```



2. 练习七：利用 `rotate()` 实现三角形图案的反转，还需要进一步限制透明区域的大小，避免屏幕闪烁：

```css
/* 修正前： */
.box {
  width: 0;
  border: 100px solid;
  border-color: transparent transparent #579ef8;
}
.box:hover {
  transform: rotate(0.5turn);
  transform-origin: center 75%;
}

/* 修正后： */
.box {
  width: 0;
  border: 100px solid;
  border-color: transparent transparent #579ef8;
  border-top: 0;  /* 取消上边框，同时原点保持默认（正中点） */
  &:hover {
    transform: rotate(0.5turn);
  }
}
```



## 2 关于 addEventListener 重复注册的问题

解决方案：添加 `{once: true}` 配置项：

```js
// 实测 {once: true}：配置后 mouseout 事件只会触发一次
const box = document.querySelector('.box');
let k = 0;
box.addEventListener('mouseover', e1 => {
  e1.target.classList.add('arrow-down');
  e1.target.addEventListener('mouseout', e2 => {
    e2.target.classList.remove('arrow-down');
    console.log('mouseout', ++k);
  }, { once: true });
});
```

