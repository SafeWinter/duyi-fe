# L34：Vuex 在文章博客项目中的应用



本节主要利用 `Vuex` 中的数据仓库，将首页中的标语和侧边栏的联系人信息通过 `state` 的各种状态进行替换，进一步强化子模块、`mutations`、`actions` 等概念。



## 实测备忘录

### 1 链接的更新

实测发现，QQ 的快速链接方式已经过期：

```markdown
tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
```

即便本地登录 QQ 也会被平台拦截：

![QQ link deprecated](../assets/9.9.png)



另外，`L21` 接口文档中的头像和网站图标链接也已经过期，根据视频内容全部更新：

```js
{
    avatar: "http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c",
    favicon: "https://duyiedu.com/favicon.ico"
}
```



### 2 Vuex 强化

`getters` 和 `mutations` 接口方法中的第一参数都是 `state`，且相对于当前模块：

```js
export default {
  getters: {
    // 构造侧边栏联系方式数据源，用于 Contact 组件渲染
    contacts({ data }) {
      return [...];
    },
  },
  mutations: {
    updateLoading(state, { loading }) {
      state.loading = loading;
    },
  },
};
```

积累 `mapState`、`mapGetters` 的用法：

```js
computed: {
  ...mapGetters("setting", ["contacts"]),
  ...mapState("setting", {
    url: ({data}) => data && data.avatar,
    title: ({data}) => data && data.siteTitle,
    icp: ({data}) => data && data.icp,
  }),
},
```

由于多处渲染需要 `data` 获取成功后才能拿到值，因此在 `main.js` 中用 `Promise` 做了简单处理：

```js
import store from './store';
store.dispatch('setting/fetchSetting')
  .then(data => {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  });
```

代价是页面初始加载有白屏。



### 3 网站图标的修改

核心在于变更图标的时机：获取全局设置数据后（`actions` 的处理过程中）：

```js
if(data.favicon) {
  // <link rel="shortcut icon" href="//favicon.ico" />
  const link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.href = data.favicon;
  document.querySelector('head').appendChild(link);
}
```

