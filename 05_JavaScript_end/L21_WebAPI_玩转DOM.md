# L21：WebAPI-玩转 DOM

---

### 监听 dom 事件

监听事件可以描述为一句话：

**某个 DOM** 发生了 **某件事** 之后，我需要做 **某些处理**

- 某个 `DOM`：监听谁？
- 某件事（事件类型）：它发生了什么？
- 某些处理（处理函数）：我要做什么？

下面是一段事件监听代码：

```js
// 为 dom 注册点击事件，当被点击时，自动运行事件处理函数
dom.onclick = function () {
  console.log('dom 被点击了');
};
```

#### 事件类型

https://developer.mozilla.org/zh-CN/docs/Web/Events

##### 表单类事件

| 事件名称   | 触发时机                                                     | 备注                              |
| ---------- | ------------------------------------------------------------ | --------------------------------- |
| ==submit== | 表单被提交时触发                                             | 注册到 form 元素上                |
| ==input==  | 文本框改变后立即出发                                         | 注册到 input、textarea 上         |
| ==change== | 文本框改变后、失去焦点时触发<br />下拉列表、多选框、单选框改变后立即触发 | 注册到 input、select、textarea 上 |
| reset      | 表单被重置时触发                                             | 注册到 form 元素上                |
| focus      | 元素聚焦时触发                                               |                                   |
| blur       | 元素失去焦点时触发                                           |                                   |

##### 鼠标类事件

| 事件名称       | 触发时机                     | 备注 |
| -------------- | ---------------------------- | ---- |
| ==click==      | 鼠标按下抬起后触发           |      |
| contextmenu    | 右键菜单显示前触发           |      |
| ==mousedown==  | 鼠标按下时触发               |      |
| ==mouseup==    | 鼠标抬起时触发               |      |
| ==mousemove==  | 鼠标在元素上移动时触发       |      |
| ==mouseenter== | 鼠标进入元素时触发（不冒泡） |      |
| ==mouseleave== | 鼠标离开元素时触发（不冒泡） |      |
| mouseover      | 鼠标进入元素时触发（冒泡）   |      |
| mouseout       | 鼠标离开元素时触发（冒泡）   |      |
| wheel          | 鼠标滚轮滚动时触发           |      |

##### 键盘事件

| 事件名称 | 触发时机           | 备注 |
| -------- | ------------------ | ---- |
| keydown  | 某个键被按下时触发 |      |
| keyup    | 某个键被抬起时触发 |      |

#### 注册事件

JS 提供了三种方式注册事件

==方式 1：将事件注册写到元素上，这种方式基本被弃用==

```html
<button onclick="js代码">按钮</button>
```

==方式 2：使用 dom 属性注册事件==

属性名为 `on+事件类型`

```js
// 监听事件
dom.onclick = function () {
  // 处理函数
};
// 移除监听事件
dom.onclick = null;
```

这种方式的特点是：

- 优点：易于监听、覆盖、移除
- 缺点：只能注册一个处理函数
- 缺点：某些事件不支持用这种方式注册

==方式 3：使用 addEventListener 方法注册事件==

```js
dom.addEventListener('click', function () {
  // 处理函数1
});
dom.addEventListener('click', function () {
  // 处理函数2
});
```

这是 **最完美** 的事件注册方式，如果要移除用这种方式注册的事件，需要改写代码

```js
function handler1() {
  // 处理函数1
}
function handler2() {
  // 处理函数2
}

dom.addEventListener('click', handler1);
dom.addEventListener('click', handler2);

dom.removeEventListener('click', handler1); // 移除监听函数1
```

#### 事件处理函数

当事件发生时，会自动调用事件处理函数，并向函数传递一个参数，该参数称之为事件对象，里面包含了事件发生的相关信息，比如鼠标位置、键盘按键等等

```js
dom.addEventListener('click', function (e) {
  console.log(e.clientX); //打印鼠标的横坐标
});
```

常见的事件对象有：[鼠标事件对象](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)、[键盘事件对象](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/KeyboardEvent)

另外，在事件处理函数中，`this` **始终指向注册事件的 `dom`**

