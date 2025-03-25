# Ch20L43 date对象，定时器（中）



## 1 setInterval

不要试图修改 `setInterval` 的时间间隔来动态控制函数的执行快慢。

该函数的时间精度是很不准确的。

`setInterval` 的底层任务排列机制是基于 **红黑树** 的。

JS 底层知识好书推荐：

1. 《高性能 JavaScript》
2. 《你不知道的 JavaScript》：[https://github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)



## 2 setTimeout

和 `setInterval` 一样，也会返回一个唯一标识，二者不冲突。

`setTimeout` 和 `setInterval` 中函数的 `this` 均指向 `window`。

