# Ch3L04 JS入门、js引入、变量、值类型、运算符



## 1 主流浏览器的内核

|      浏览器       |         内核         |
| :---------------: | :------------------: |
| Internet Explorer | Trident --> Chromium |
|      Chrome       |    Webkit / Blink    |
|      FireFox      |        Gecko         |
|       Opera       | Presto --> Chromium  |
|      Safari       |        Webkit        |



## 2 关于多个 script 标签的独立性

同一页面上的多个 `script` 标签内的 `JavaScript` 脚本，相互独立、互不影响。

JS 的语法错误会引发后续代码终止，但不影响其他 JS 代码块（`script` 标签）



## 3 保留字 vs 关键字

保留字为预留给以后的功能，关键字为在用的不能作变量名的单词。



## 4 堆和栈

基本类型在栈上，复制值；

引用类型在堆上，复制引用（地址）。



## 5 关于 NaN

全称 Not a number，非数。

`0 / 0` 的结果就是 `NaN`。`NaN === NaN` 结果为假（`false`）。

`NaN` 参与的运算，结果均为 `NaN`。
