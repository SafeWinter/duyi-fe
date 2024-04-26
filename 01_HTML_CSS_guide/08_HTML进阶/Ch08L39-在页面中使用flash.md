# Ch08L39 在页面中使用 flash

两种方式：

- 通过 `object` 元素
  - `data` 属性：填写 `flash` 所在路径
  - `type` 属性：填写 `flash` 对应的 `MIME` 类型值
- 通过 `embed` 元素
  - `src` 属性：填写 `flash` 所在路径
  - `type` 属性：填写 `flash` 对应的 `MIME` 类型值

它们都是 **可替换元素**。

写法示例：

```html
<!-- 单独写法 -->
<object data="./example.swf" type="application/x-shockwave-flash">
    <param name="quality" value="high">
</object>
<embed quality="high" src="./example.swf" type="application/x-shockwave-flash">

<!-- 考虑兼容性的写法 -->
<object data="./example.swf" type="application/x-shockwave-flash">
    <embed quality="high" src="./example.swf" type="application/x-shockwave-flash">
</object>
```





> [!tip]
>
> `MIME` (**M**ultipurpose **I**nternet **M**ail **E**xtensions)
>
> 多用途互联网邮件类型：
>
> 比如，资源是一个 `jpg` 图片，MIME：`image/jpeg`
>
> `flash` 的类型值为 `application/x-shockwave-flash`
