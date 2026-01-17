# L29：博客文章详情页开发（五）——触底加载与回顶部



## 1 触底加载效果

评论列表设计为增量加载，其本质是加载分页数据，特点是【只加载下一页】（如果有）的评论；如果没有下一页，则中止请求。

触底加载增量数据的原理图如下：

![bottom loading principles](../assets/29.1.png)

触底判定：`scrollHeight - (scrollTop + clientHeight)` 的绝对值在最大误差距离内（如 `100px`），即可判为【触底】。

具体实现方案：借用目录高亮追踪时引入的事件总线，同样侦听 `mainScroll` 事件，实现在防抖滚动时，既要追踪目录大纲的高亮渲染，又要判定是否触底加载新的数据：

```js
// BlogComment.vue
created(){
  // window.getMoreData = this.getMoreData; // for debugging
  this.$bus.$on('mainScroll', this.handleMainScroll)
},
beforeDestroy(){
  this.$bus.$off('mainScroll', this.handleMainScroll)
},
methods: {
  async handleMainScroll(main){
    if(this.loading) {
      return;
    }
    const dist = Math.abs(main.scrollHeight - main.scrollTop - main.clientHeight);
    if(dist <= this.bottomMargin) {
      await this.getMoreData();
    }
  },
}
```

注意：上节触发 `mainScroll` 事件时，动态渲染目录的当前位置时并没有用到携带的参数（正文滚动区的 `DOM` 元素）。该元素是用来判定滚动条是否触底用的。





## 2 快速回到页面顶部效果

（待补）
