# L03：ES6 对象

---

本节主要围绕 `ES语言提升.md` 第三节展开。



## 1 键值对强调知识点

`Object.fromEntries(entries)`：将属性名和属性值的数组转换为对象



## 2 关于对象冻结

仅对当前对象的第一层键值对实现冻结，无法递归冻结更深层次。



## 3 相同的判定

使用 `Object.is()` 的好处：

- 修复 Bug：`NaN` 和 `NaN` 相等；
- 修复 Bug：`+0` 和 `-0` 不相等。

