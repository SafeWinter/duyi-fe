# Ch20L42 date对象，定时器（上）



## 1 DOM 操作习题

（1）在原型链上实现 `insertAfter` 方法：

解1：先 `nextElementSibling`，再 `insertBefore`；

解2：先 `insertBefore`，互换参数再 `insertBefore`。



（2）将元素子节点逆序（非递归）：

解：使用 `appendChild` 逆序遍历（跳过最后一个子节点）



