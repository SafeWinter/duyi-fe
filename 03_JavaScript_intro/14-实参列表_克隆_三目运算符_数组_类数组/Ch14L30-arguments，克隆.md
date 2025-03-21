# Ch14L30 arguments，克隆



## 递归实现深拷贝

`ES5` 版本：

```js
function deepClone(origin, target) {
    function isArray(val) {
        // return Array.isArray(val);
        return Object.prototype.toString.call(val) === '[object Array]';
    }
    
    if(origin === null || origin === undefined) {
        throw Error('origin should not be null or undefined.');
    }
    
    var target = target || {};
    for (var prop in origin) {
        if(origin.hasOwnProperty(prop)) {
            var value = origin[prop];
            if(value !== null && typeof(value) === 'object') {
                target[prop] = isArray(value) ? [] : {};
                deepClone(value, target[prop]);
            } else {
                target[prop] = value;
            }
        }
    }
    return target;
}
```

`instanceof` 的隐藏 Bug：页面存在父子域（如引入 `iframe` 元素时），子域从的实例和父域中的对象在对比时容易发生误判；而 `toString()` 则没有这个问题。

第 14 行使用了三目运算符，可令代码更加简洁（可读性可能会变差，重构需谨慎）。



实现过程梳理：

1. 确定手动拷贝流程（分情况讨论后写伪代码）
2. 分部确定所需工具函数（判定引用值、原始值）
3. 实现核心逻辑
4. 引入递归逻辑（检查递归是否有出口）
5. 完善代码：
   1. 非空校验（实参、中间值）
   2. 三目运算符重构
6. 手动测试。



新版实现：

```js
const deepClone = (obj, newObj = {})=> {
    if(obj === null || typeof obj !== 'object') {
        throw new Error('Invalid input: ' + obj);
    }
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            var value = obj[key];
            if(value === null || typeof value !== 'object') {
                newObj[key] = value;
            } else {
                newObj[key] = Array.isArray(value) ? [] : {};
                clone(value, newObj[key]);
            }
        }
    }
    return newObj;
}
```

