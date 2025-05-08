# L02：ES6 数组简介

---

本节主要围绕 `ES语言提升.md` 的第二节展开。

附带电子书《深入理解 `ES6`》已上传百度网盘 `SoftDev/PDFs/JavaScript/UnderstandingES6/` 文件夹下，含英文原版及 `epub`、`mobi` 格式。



> [!tip]
>
> **DIY：如何优雅地退出 `forEach`**
>
> **推荐使用 `for...of` 或 `some()/every()` 替代 `forEach`**，因为：
>
> 1. 它们支持更自然的控制流
> 2. 代码意图更清晰
> 3. 性能通常更好（特别是 `for...of`）
>
> 例如：
>
> ```js
> // 使用 for...of 循环（ES6+）
> for (const item of [1, 2, 3, 4]) {
>   console.log(item);
>   if (item === 3) break; // 可以直接使用 break
> }
> 
> // 使用 some() - 当回调返回 true 时停止
> [1, 2, 3, 4].some(item => {
>   console.log(item);
>   return item === 3; // 当返回 true 时停止
> });
> 
> // 使用 every() - 当回调返回 false 时停止
> [1, 2, 3, 4].every(item => {
>   console.log(item);
>   return item !== 3; // 当返回 false 时停止
> });
> ```
>
> `forEach` 最适合需要遍历整个数组且不需要提前退出的场景。
>
> 最后，虽然不能完全退出，但可以通过 `return` 跳过当前迭代：
>
> ```js
> [1, 2, 3, 4].forEach((item, index, array) => {
>   if (item === 3) return; // 跳过本次迭代
>   console.log(item);
> });
> /*
> 1
> 2
> 4
> */
> ```

