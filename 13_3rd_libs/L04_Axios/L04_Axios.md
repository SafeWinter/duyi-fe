# L04：JS 第三方库之 Axios

---

> 课程内容详见 `Third_libraries_manual.md` 的 `Axios` 小节。

`Axios` 是一个基于 `Promise` 的网络请求库，可以用于浏览器和 `Node.js`。

> 官网：https://axios-http.com/
>
> 中文官网：https://axios-http.com/zh/
>
> `CDN`：https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js

`Axios` 是一个基于 `Promise` 的网络请求第三方 `JS` 库。在浏览器环境中，它封装了 `XHR`，提供更加便捷的 `API` 发送请求。

## 基本用法

```js
// 发送 get 请求到 https://study.duyiedu.com/api/herolist，输出响应体的内容
axios.get("https://study.duyiedu.com/api/herolist").then(resp => {
  console.log(resp.data); // resp.data 为响应体的数据，Axios 会自动解析 JSON 格式
})

// 发送 get 请求到 https://study.duyiedu.com/api/user/exists?loginId=abc，输出响应体的内容
axios.get("https://study.duyiedu.com/api/user/exists", {
  params: { // 这里可以配置查询参数，Axios 会自动将其进行 URL 编码
    loginId: "abc"
  },
}).then(resp => {
  console.log(resp.data); // resp.data 为响应体的数据，Axios 会自动解析 JSON 格式
})

// 发送 POST 请求到 https://study.duyiedu.com/api/user/reg
// Axios 会将第二个参数转换为 JSON 格式的请求体
axios.post("https://study.duyiedu.com/api/user/reg", {
  loginId: 'abc',
  loginPwd: '123123',
  nickname: '棒棒鸡'
}).then(resp => {
  console.log(resp.data); // resp.data 为响应体的数据，Axios 会自动解析 JSON 格式
})
```

`Axios` 的基本用法为：

```js
axios.get(URL 地址, [请求配置]);
axios.post(URL 地址, [请求体对象], [请求配置]);

// 或直接使用 Axios 方法，在请求配置中填写请求方法
axios(请求配置);
```

## 实例

`Axios` 允许开发者先创建一个实例，后续通过使用实例进行请求。

这样做的好处是可以预先进行某些配置，例如：

```js
// 创建实例
const instance = axios.create({
  baseURL: 'https://study.duyiedu.com/'
});

// 发送 GET 请求到 https://study.duyiedu.com/api/herolist，输出响应体的内容
instance.get("/api/herolist").then(resp => {
  console.log(resp.data); // resp.data 为响应体的数据，Axios 会自动解析 JSON 格式
})
```

## 拦截器

有时，我们可能需要对所有的请求或响应做一些统一的处理 ——

比如，在请求时，如果发现本地有 `token`，需要附带到请求头；

又比如，在拿到响应后，我们仅需要取响应体中的 `data` 属性；

再比如，如果发生错误，我们需要做一个弹窗显示……

**这些统一的行为就非常适合使用拦截器**：

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // config 为当前的请求配置
  // 在发送请求之前做些什么
  // 这里，我们添加一个请求头
  const token = localStorage.getItem('token');
  if(token){
    config.headers.authorization = token;
  }
  return config; // 返回处理后的配置
});

// 添加响应拦截器
axios.interceptors.response.use(function (resp) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return resp.data.data; // 仅得到响应体中的 data 属性
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  alert(error.message); // 弹出错误消息
});
```

设置好拦截器后，后续的请求和响应都会触发对应的函数。

拦截器可以针对 `Axios` 实例进行设置。