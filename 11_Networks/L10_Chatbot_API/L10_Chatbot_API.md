# L10：示例项目：聊天机器人 —— API 接口封装

---



## 1 项目简介

改造本地静态页面，通过调用远程接口实现前端数据接口的开发。主要实现以下接口：

`js/api.js`：

```js
    async function reg(userInfo) {}

    async function login(loginInfo) {}

    async function exists(loginId) {}

    async function profile() {}

    async function sendChat(content) {}

    async function getHistory() {}

    function logout() {}
```

注意：登录成功后，需要将请求头中的登录令牌存入本地 `localStorage`，并且在后续接口中带上该 `token` 完成请求。



## 2 实用调试工具 rest client

安装 `rest client` 插件后，创建文件 `test.http` 可实现接口的快速调用：

![](../assets/10.1.png)