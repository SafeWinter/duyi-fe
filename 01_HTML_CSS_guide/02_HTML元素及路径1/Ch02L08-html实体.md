# Ch02L08 HTML 实体



实体字符通常用于在页面中显示一些特殊符号。

两种写法：

1. &单词;
2. &#数字;



常见的 HTML 字符实体：

- 小于符号：`&lt;`
- 大于符号：`&gt;`
- 空格符号：`&nbsp;`
- 版权符号：`&copy;`
- & 符号：`&amp;`



> [!tip]
>
> MDN 写出的常见 HTML 实体：
>
> | Character |  Entity   | Note                                                         |
> | :-------: | :-------: | :----------------------------------------------------------- |
> |     &     |  `&amp;`  | Interpreted as the beginning of an entity or character reference. |
> |     <     |  `&lt;`   | Interpreted as the beginning of a [tag](https://developer.mozilla.org/en-US/docs/Glossary/Tag) |
> |     >     |  `&gt;`   | Interpreted as the ending of a [tag](https://developer.mozilla.org/en-US/docs/Glossary/Tag) |
> |     "     | `&quot;`  | Interpreted as the beginning and end of an [attribute](https://developer.mozilla.org/en-US/docs/Glossary/Attribute)'s value. |
> |  (space)  | ` &nbsp;` | Interpreted as the non breaking space.                       |
> |     –     | `&ndash;` | Interpreted as the en dash (half the width of an em unit).   |
> |     —     | `&mdash;` | Interpreted as the em dash (equal to width of an "m" character). |
> |     ©     | `&copy;`  | Interpreted as the copyright sign.                           |
> |     ®     |  `&reg`   | Interpreted as the registered sign.                          |
> |     ™     | `&trade;` | Interpreted as the trademark sign.                           |
> |     ≈     | `&asymp;` | Interpreted as almost equal to sign.                         |
> |     ≠     |  `&ne;`   | Interpreted as not equal to sign.                            |
> |     £     | `&pound;` | Interpreted as the pound symbol.                             |
> |     €     | `&euro;`  | Interpreted as the euro symbol.                              |
> |     °     |  `&deg;`  | Interpreted as the degree symbol.                            |

详见官方列表：https://html.spec.whatwg.org/multipage/named-characters.html
