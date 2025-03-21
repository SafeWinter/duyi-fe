# Ch13L28 this，笔试真题讲解（上）



## 1 typeof 的返回值

`typeof` 只能返回六个值：

- `'string'`
- `'boolean'`
- `'number'`
- `'undefined'`
- `'object'`
- `'function'`



## 2 isNaN() 的手动实现：

```js
function isNaN1(value) {
    return `${Number(value)}` === 'NaN';
}
```



## 3 深入理解 this

共四个知识点：

（1）函数预编译过程中 `this` 指向 `window`：

```js
function test(c) {
    var a = 123;
    function b() {}
}
test(1);
/* 预编译过程：
AO {
    this: window,  // 若使用 new test(1) 
                   // 则 this = Object.create(test.prototype)
                   // 这也是最准确的写法
                   // 相当于 { __proto__: test.prototype }
    arguments: [1],
    a: undefined,
    b: function() {},
    c: 1
}
```



（2）全局作用域下，`this` 也指向 `window`（在 `Global Object` 中）

（3）`call` / `apply` 可以改变函数运行时 `this` 的指向

（4）形如 `obj.fn();` 中的函数 `fn()` 中的 `this` 指向 `obj`
