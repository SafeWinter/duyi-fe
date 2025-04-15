# L24：WebAPI-DOM 尺寸和位置

---

## dom 进阶

### 1 dom 尺寸和位置

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



### 2 习题训练

#### 2.1 元素拖拽效果

核心 JS：

```js
// 让便签可被拖动，但不能超出视口

const note = document.querySelector('.note');
const moveBar = document.querySelector('.move-bar');

moveBar.onmousedown = function (e1) {
    const x0 = e1.clientX;
    const y0 = e1.clientY;

    const { left: left0, top: top0, width: width0, height: height0 } = note.getBoundingClientRect();

    const html = document.documentElement;
    const maxW = html.clientWidth - width0; // 最大水平移动范围
    const maxH = html.clientHeight - height0; // 最大垂直移动范围

    // 按下注册鼠标移动事件
    const onMouseMove = (e2) => {
        console.log('开始拖动');
        const dx = e2.clientX - x0;
        const dy = e2.clientY - y0;

        // 计算新的位置，并限制在视口范围内
        const left = Math.max(0, Math.min(left0 + dx, maxW));
        const top = Math.max(0, Math.min(top0 + dy, maxH));

        note.style.left = `${left}px`;
        note.style.top = `${top}px`;
    };

    const onMouseUp = () => {
        console.log('拖动结束、释放鼠标');
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
};
```



#### 2.2 带反弹效果的元素移动

核心逻辑：

```js
// 让小球向右下运动，遇到边缘后反弹

const ball = document.querySelector('.ball');
const html = document.documentElement;

// 使用常量定义初始偏移量
let offsetX = 2;
let offsetY = 2;

// 提取更新小球位置的逻辑为独立函数
function updateBallPosition() {
    const { left, top, width, height } = ball.getBoundingClientRect();
    const maxLeft = html.clientWidth - width;
    const maxTop = html.clientHeight - height;

    // 判断是否到达边缘并反弹
    let targetX = left + offsetX;
    let targetY = top + offsetY;
    if (targetX < 0 || targetX > maxLeft) {
        offsetX *= -1;
        targetX = Math.max(0, Math.min(targetX, maxLeft));
    }
    if (targetY < 0 || targetY > maxTop) {
        offsetY *= -1;
        targetY = Math.max(0, Math.min(targetY, maxTop));
    }

    ball.style.left = `${targetX}px`;
    ball.style.top = `${targetY}px`;
}

let timer = null;
// 使用箭头函数简化 start 和 stop 函数
const start = () => {
    if (timer) return;
    timer = setInterval(updateBallPosition, 10);
};

const stop = () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
};
```

