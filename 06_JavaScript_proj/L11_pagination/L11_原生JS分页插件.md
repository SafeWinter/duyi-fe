# L11：用原生 JS 实现一个分页插件

---

## 1 需求描述

用原生 `JavaScript` 实现一个分页插件，要求：

1. 调用 `createPager(parent)` 后可以在页面指定元素 `parent` 内自动渲染一个分页导航条；
2. 支持功能：首页、上一页、指定页面、下一页、尾页；
3. 右侧状态栏：实时更新当前页码及总页面，如：`1/50`；
4. 支持多状态切换：禁用/恢复首尾快速导航键、选中/取消选中指定页面；
5. 备选页码区长度相对固定。

最终效果图：

![](../assets/11.1.png)



## 2 要点梳理

1. 使用 `HTML5` 语义化标签提高页面可访问性；
2. 使用 `CSS3` 中的 `Flexbox` 布局快速完成样式设置；
3. 使用 `ES6` 中的 `class` 语法糖进行 `OOP` 开发；
4. 页码备选区的上下边界需分三种情况讨论：
   1. 左翼越界：左翼取第一页，右翼用 `pageSize` 顺推，且不能超过总页数；
   2. 左右翼均不越界：左右翼均为理论值，
   3. 右翼越界：右翼取总页数，左翼用 `pageSize` 倒推，且不能越过第一页；
5. 使用 `data-page` 记录当前页码值，以防无法从 `innerText` 直接读取；
6. 选中当前页时，`CSS` 样式需设置 `user-select: none;`。



核心 JS 逻辑：

```js
getCurrentRange() {
    const half = Math.floor(this.pageSize / 2);
    let start, end;
    if(this.page - half <= 1) {
        start = 1;
        end = this.pageSize;
        end = Math.min(end, this.total);
    } else if(this.page + half <= this.total) {
        start = this.page - half;
        end = this.page + half;
        end = Math.min(end, this.page + half);
    } else {
        end = this.total;
        start = end - this.pageSize + 1;
        start = Math.max(1, start);
    }
    return Array.from({length: end - start + 1}, (_, i) => i + start);
}

updateContent() {
    const newArr = this.getCurrentRange();
    // console.log('newArr', newArr);
    $$('a', this.content).forEach((link, i) => {
        const newPage = newArr[i];
        link.setAttribute('data-page', newPage);
        link.innerText = newPage;
        if(this.isCurrPage(newPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
```



