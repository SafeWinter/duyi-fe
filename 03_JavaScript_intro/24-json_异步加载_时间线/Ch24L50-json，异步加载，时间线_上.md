# Ch24L50 JSON，异步加载，时间线（上）



## 1 DOM 树和 CSS 树

内核按 **深度优先原则** 生成 `DOM` 树、`CSS` 树，最终生成一个 `渲染树`（`Render Tree`）。

生成 `DOM` 树的过程，又叫做 `DOM` 树的 **解析**。因此解析到 `img` 节点，没必要等到 `src` 引用的内容加载完毕才生成 `DOM` 节点。

`DOM` 树的重新构建，又叫重排（`reflow`），包括：

- `DOM` 节点的增删
- `DOM` 节点的高度变化、位置变化、`display` 属性由 `none` :arrow_right: `block`
- 读取 `offsetWidth`、`offsetLeft`

重绘（`repaint`）：基于 `CSS` 的颜色等（影响较小，但也影响）。



## 2 异步加载 JS

异步加载的三种方案：

1. `defer`：`JS` 代码既可以写到一个脚本文件、通过 `src` 引入，也可以直接写在开闭标签之间（但两种方式 **不能同时启用**）。执行时机：等到整个页面解析完毕（即 `DOM` 树生成完毕）时才会执行；
2. `async`：加载完就执行，且 JS 脚本 **不能写到** `script` 标签内；
3. 动态生成 `script` 节点。

使用方案一和方案二，JS 不会阻塞页面。方案三是为了实现异步、按需加载。例如：

```js
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'demo.js';
// 动态执行
document.head.appendChild(script);
```

其中，L3 只下载脚本（异步下载），不执行脚本；等执行到 L5 时脚本才执行。加载完的回调逻辑（兼容 IE）：

```js
// IE
script.onreadystatechange = function() {
    var state = script.readyState
    if(state == 'complete' || state == 'loaded') {
        demo();
    }
};

// not IE: Chrome, Safari, Firefox, Opera
script.onload = function() {
    demo();
};

document.head.appendChild(script);
```

最终封成函数：

```js
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if(script.readyState) {
        // IE
        script.onreadystatechange = function() {
            if(script.readyState == 'complete' || script.readyState == 'loaded') {
                callback();
            }
        }; 
    } else {
        // not IE: Chrome, Safari, Firefox, Opera
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.head.appendChild(script);
}
```

为防止 `script.src` 瞬间完成而导致 `change` 事件响应失效，最好像 L17 那样写到事件绑定逻辑的后面。

使用时，应将目标函数放入一个回调函数中，否则会报错：

```js
// demo.js
function demo() {
  console.log('This is a demo');
}

// index.html
loadScript('demo.js', () => demo());  // This is a demo
```

