# L06：HTML5 文档

---

本节主要结合 `HTML5_manual.md` 中的 **文档** 部分进行学习。



## 1 音视频元素

`HTML5` 音视频元素常用属性：

|   属性名   | 含义             | 类型     |
| :--------: | ---------------- | -------- |
|   `src`    | 多媒体的文件路径 | 普通属性 |
| `controls` | 是否显示播放控件 | 布尔属性 |
| `autoplay` | 是否自动播放     | 布尔属性 |
|   `loop`   | 是否循环播放     | 布尔属性 |
|  `muted`   | 静音播放         | 布尔属性 |

练习 1：在页面上加载一个 `mp4` 视频：

```html
<video src="./open.mp4" controls autoplay muted></video>
```

练习 2：在页面上加载一个 `mp3` 的音频：

```html
<audio src="./shamoluotuo.mp3" controls></audio>
```



## 2 HTML5 语义化

元素语义化是指 **每个 HTML 元素都代表着某种含义，在开发中应该根据 *元素含义* 选择元素**。

元素语义化的好处：

1. 利于 `SEO`（搜索引擎优化）；
2. 利于无障碍访问；
3. 利于浏览器的插件分析网页；



## 3 自定义属性

即形如 `data-*` 的元素属性，可通过 `dom.dataset.<attr_name>` 获取，例如：`ulElem.dataset.abc`。

