# L05：HTTP 基础知识（一）

---

> 参考：`Networks.md` 第 `1.3` 节。



## 1 关于请求头中的 User-Agent 的值

用于欺骗服务器，没有实际用处。

历史原因：最初用于判定客户端使用的浏览器类型，服务端根据该值决定响应的页面内容，而不用适配所有的浏览器。后来逐渐失效。



## 2 Content-Type

决定请求体中的消息格式。该值必须与请求体中的格式保持一致。