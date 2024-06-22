# Ch05L10 typeof，类型转换



## 1 编程形式的区别

1. 面向过程
2. 面向对象



## 2 `typeof` 的六种返回值

- `number`
- `string`
- `boolean`
- `object`：泛指一类引用值，包括 `{}`、`[]`、`null`
- `undefined`
- `function`



## 3 类型转换

分两种：

- 显式类型转换

  - `Number(mix)`
  - `parseInt(string, radix)`
  - `parseFloat(string)`
  - `String(mix)`
  - `Boolean(x)`
  - `toString()`

- 隐式类型转换

  - `isNaN(x)`：先 `Number(x)`，再判定结果

  - `++`、`--`、`+`/`-`（一元正负）：先 `Number(x)`，再计算

    - 能不能转成一个数不确定，但类型一定是 `number`

  - `+`： 加号，先调 `String()`，再运算。

    - 只要有一侧为字符串，则会先调用 `String()`，然后再拼接

  - `-`、`*`、`%`：先用 `Number(x)` 转换，在算下一步。

  - `&&`、`||`、`!`：先用 `Boolean(x)` 转换，再进行布尔运算

  - `<`、`>`、`<=`、`>=`：有数字的，则先用 `Number` 统一为数字，再比较

    - ```js
      1 < '2' // true，先 Number 转换，再比大小
      '3' < '2' // false，按 ASCII 比较
      ```

  - `==`、`!=`：存在隐式转换



### 3.1.1 强转为数字：Number(x)

`NaN` 是高级的数字：

```javascript
const a = Number(undefined);
console.log(`${typeof a}: ${a}`); // number: NaN
```

其他值：f(true) = 1、f(false) = 0、f(null) = 0、f('a') = NaN、f(undefined) = NaN



### 3.1.2 解析为整数：parseInt(x, radix)

```js
parseInt(true);  // NaN
parseInt(false); // NaN
parseInt("123.9"); // 123

parseInt("10", 16); // 16
parseInt('3', 2); // NaN
// 去除右边的非数字
parseInt('12a'); // 12
```



### 3.1.3 解析为浮点数：parseFloat(x)

把右边除了第一个小数点以外的非数字去掉。

```js
parseFloat('123.9abc');  // 123.9
```



> [!tip]
>
> 二进制数 转 十六进制数
>
> 方法：`parseInt` + `toString`
>
> ```js
> const n2 = 1100;
> const n10 = parseInt(n2, 2);  // 12(10)
> const n16 = n10.toString(16); // 'c'(16)
> ```



几个特殊的隐式转换：

```js
false > true;  // false, 按 0 > 1
1 > 2 > 3;  // false, 按 false > 3、0 > 3 处理
2 > 1 > 3;  // false, 按 true > 3、1 > 3 处理
2 > 3 < 1;  // true, 按 false < 1、0 < 1 处理
10 > 100 > 0; // false, 按 false > 0、0 > 0 处理
100 > 10 > 0; // true, 按 true > 0、1 > 0 处理
// 小结：从左到右，先判定第一个结果，再用 Number 强转，最后比较大小
```

再比如：

```js
undefined > 0;  // false, 按 Number(undefined) > 0 ... NaN > 0
undefined < 0;  // false, 同上
undefined == 0; // false, 同上

null > 0; // false, 同 Number(null) > 0 ... 0 > 0 ... false
null < 0; // false, 同上
null == 0; // false, 虽然 Number(null) 为 0，但 null 与 0 有本质区别，因此不相等

undefined == null;  // true
// 小结：L9 与 L7 都是特殊情况。null 和 undefined 同数字比大小，遵循 IEEE 754 标准，该标准规定，null 和 undefined 与数字的比较结果均为 false
```

最特殊的：

```js
// NaN 甚至与自身比较都不相等，因此和其他类型值就更不可能相等了
```



## 4 作业

```js
typeof(a)   // 'undefined'
typeof(undefined) // 'undefined'
typeof(NaN)  // 'number'
typeof(null) // 'object'
var a = '123abc'; typeof(+a);  // 'number' (+a: NaN)
typeof(!!a) // 'boolean' (!!a: true)
typeof(a+'') // 'string' 
1 == '1' // true, 先 Number('1')，再比大小
NaN == NaN  // false
NaN == undefined // false
'11' + 11  // '1111'
1 === '1'  // false
parseInt('123abc')  // 123
var num = 123123.345789;
num.toFixed(3)  // 123123.345(wrong) | '123123.346'(right)
typeof(a)  // 'string', a: '123abc'
```

