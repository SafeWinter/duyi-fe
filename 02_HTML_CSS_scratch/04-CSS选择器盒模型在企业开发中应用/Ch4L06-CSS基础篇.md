# Ch4L06 CSS初级篇

## 1 HTML 收尾

HTML、CSS、JavaScript 的编程模式：结构、行为、样式相分离。

> [!important]
>
> 一面要 20 分钟内解决，不要拖太久：主流的浏览器及其内核都有哪些？

|       名称        |                             内核                             |
| :---------------: | :----------------------------------------------------------: |
| Internet Explorer |          最早为 Trident（三叉戟）后来改用 Chromium           |
|      Firefox      |                        Gecko（壁虎）                         |
|   Google Chrome   |                        WebKit / Blink                        |
|      Safari       |                            WebKit                            |
|       Opera       | Presto（意大利语，意为【很快】。从 Opera 15 开始，改为 Chromium（铬）） |

主流浏览器须满足：

- 市场份额是否够大
- 是否有独立研发的内核



HTML 注释：`<!-- Comment Content -->`，其作用——

- 写注释
- 辅助调试



一个月的项目周期，通常开发一周，调试三周。时间通常是 3:7 开。



## 2 引入 CSS

CSS 全称：**C**ascading **S**tyle **S**heet，层叠样式表

引入方式：

1. 行间样式
2. 页面级引入
3. 外部文件引入



网页是从服务器下载到本地的，并且是 HTML 和 CSS 文件 **同时下载**（浏览器使用不同的线程并行执行）



`id` 选择器指定具体内容：

```css
[id="only"] {
	background-color: red;
}
```



## 3 CSS 权重

又称优先级：

|         选择器          |    权重    |
| :---------------------: | :--------: |
|      `!important`       | `Infinity` |
|        行间样式         |    1000    |
|          `id`           |    100     |
| `class` \| 属性 \| 伪类 |     10     |
|     标签 \| 伪元素      |     1      |
|         通配符          |     0      |

注意：

- `Infinity` 是 **确定的值**： (Infinity + 1) > Infinity
- 上述权重是 256 进制，不是 10 进制（*？存疑？*）