# Ch01L02 HTML和CSS概述

## 1 相关术语

术语降低沟通成本（喜大普奔、鸡你太美：形容对方篮球打的特别好）

- web：互联网
- w3c：**W**orld **W**ide **W**eb **C**onsortium，万维网联盟，非盈利性的组织，为互联网提供各种标准（网址：w3.org）。
- XML：extension markup language，可扩展的标记语言：用于定义文档结构。

如：请在每周周一下午两点，从人人网下载最新美剧《权力的游戏》：

```xml
<任务>
    <执行日期> 每周一 </执行日期>
    <执行时间> 下午两点 </执行时间>
    <下载地址> 人人网 </下载地址>
    <下载目标> 最新版《权力的游戏》 </下载目标>
</任务>
```



## 2 何为 HTML

HTML 是 W3C 组织定义的语言标准：HTML 是用于描述页面结构的语言。

结构：有什么东西，该东西表示什么含义

HTML：Hyper Text Markup Language，超文本标记语言。

书写一个一级标题：

```html
<h1>一级标题</h1>
```

文档参考：MDN——Mozilla Development Network，Mozilla开发者社区。



## 3 何为 CSS

CSS 是 W3C 定义的语言标准：CSS 是用于描述页面展示的语言，决定了页面长什么样子。



## 4 HTML 与 CSS 的执行

HTML、CSS -> 浏览器内核 -> 页面

浏览器：

1. shell：外壳
2. core：内核（JS执行引擎、渲染引擎）、

IE: Trident
Firfox: Gecko
Chrome: Webkit / Blink
Safari: Webkit
Opera: Presto / Blink

经 ChatGPT 整理：

|     浏览器      |             内核             |                           演变过程                           |
| :-------------: | :--------------------------: | :----------------------------------------------------------: |
|  Google Chrome  |      Blink (基于WebKit)      |       2013 年 4 月从 WebKit 分支出来，建立 Blink 内核        |
| Mozilla Firefox |        Gecko（壁虎）         |       1998 年首次发布基于 Gecko 内核的 Firefox 浏览器        |
| Microsoft Edge  | Blink (2019年之前为EdgeHTML) | 2015 年首次发布基于 EdgeHTML 内核的 Edge 浏览器，2019年后转为 Chromium 内核 |
|  Apple Safari   |            WebKit            |       2003 年首次发布基于 WebKit 内核的 Safari 浏览器        |
|      Opera      |  Blink (2013年之前为Presto)  |  2013 年之前使用自主研发的 Presto 内核，之后转为 Blink 内核  |
|       IE        |      Trident（三叉戟）       | IE11及以前都是 Trident，2015 年推出 Edge（EdgeHTML 内核）；2019 年 1 月，Edge 改为 Google Chromium 项目的 Blink 内核 |

推荐下载浏览器：Chrome。



## 5 关于版本和兼容性

HTML5、CSS3

HTML5：2014年

CSS3：目前还没有制定完成。

XHTML：可以认为是HTML的一种一个版本，完全符合XML的规范。H5 推出后逐渐弃用。
