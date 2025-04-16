# L25：WebAPI-事件传播机制

---

## 1 事件传播机制

![事件流](assets/25.1.png)

```js
// 在冒泡阶段触发
div.onclick = function () {};

// 在捕获阶段触发事件
div.addEventListener('click', function () {}, true);

// 在冒泡阶段触发事件（默认）
div.addEventListener('click', function () {}, false);
```

```js
// 事件处理函数
function handler(e) {
  e.target; // 获取事件源（目标阶段的dom）
  e.stopPropagation(); // 阻止事件继续冒泡
}
```

> [!tip]
>
> #### 关于事件目标阶段多个事件的触发顺序的说明
>
> 根据成哥 JS 入门视频 `Ch22L48：事件1（下）` 的介绍，经实测，在最新版 `Chrome` 浏览器中，无论冒泡事件如何提前，对于最内层（即事件目标阶段）的多个注册事件，其执行依旧是 **先捕获、再冒泡**。



## 2 this 与 event.target 的区别

在允许事件冒泡或捕捉的场景下，为 `DOM` 元素注册事件时 `this` 与 `event.target` 并不总是同一个对象：

- `this`：始终指向注册该事件的对象；
- `event.target`：始终指向事件目标阶段的 `DOM` 元素，如鼠标实际点击的内部元素（用途：事件委托）



## 3 事件委托机制

关键逻辑：

```js
const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // core business logic
        console.log(e.target.innerText);
    }
});
```

适用场景：

1. 存在大量需要注册同类事件的子元素；
2. 子元素需要动态绑定注册事件的场景；



## 4 mouseenter、mouseleave、mouseover、mouseout

关键区别：

| 事件名称       | 触发时机                     |
| -------------- | ---------------------------- |
| ==mouseenter== | 鼠标进入元素时触发（不冒泡） |
| ==mouseleave== | 鼠标离开元素时触发（不冒泡） |
| mouseover      | 鼠标进入元素时触发（冒泡）   |
| mouseout       | 鼠标离开元素时触发（冒泡）   |

因此用得较多的是 `mouseenter` 和 `mouseleave` 事件。
