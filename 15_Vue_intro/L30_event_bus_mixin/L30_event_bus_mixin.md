# L30：代码优化——事件总线相关逻辑归类与重构



## 1 重构概况

本以为和事件总线相关的所有逻辑都可以抽离出来，实际只有两个存在长滚屏的组件容器可以合并到 `mixin` 中：

- 文章列表根组件（`BlogList/index.vue`）
- 文章详情根组件（`BlogDetail/index.vue`）

二者无论是作为发布者还是订阅者，都具有高度一致的逻辑：

- 作为发布者：主动触发 `mainScroll` 事件，又分两种情况：
  - 携带 `DOM` 容器：用于判定是否触底加载、是否显示 `ToTop` 组件；
  - 不携带容器：用于在跳转到其他子模块前隐藏 `ToTop` 组件、同时中止触底加载、以及目录高亮追踪。
- 作为订阅者：被动响应 `ToTop` 触发的 `backToTop` 事件，将滚轮位置重置为 `0`。



核心逻辑如下：

```js
import { debounce } from '@/utils';

export default function(refName) {
  return {
    mounted(){
      // as publisher
      this.debouncedMainScroll = debounce(this.handleMainScroll, 50);
      this.$refs[refName].addEventListener('scroll', this.debouncedMainScroll);
      
      // as observor
      this.$bus.$on('backToTop', this.handleBackToTop);
    },
    beforeDestroy(){
      // as publisher
      this.$refs[refName].removeEventListener('scroll', this.debouncedMainScroll);
      // 切换到其他组件前，通知所有观察者停止响应（BlogComment、BlogToc、ToTop）
      // 若不传 dom 参数，则不执行 mainScroll 回调
      this.$bus.$emit('mainScroll');  

      // as observor
      this.$bus.$off('backToTop', this.handleBackToTop);  // 订阅者在 ToTop
    },
    methods: {
      handleMainScroll() {
        this.$bus.$emit('mainScroll', this.$refs[refName]);
      },
      handleBackToTop(top) {
        this.$refs[refName].scrollTop = top;
      }
    }
  };
}
```



## 2 实战备忘

本想趁更新图标库的契机补全 `ToTop` 组件的预览版 `ToTop/preview.vue`，结果使用 `vue serve` 命令始终无法在 `Vue` 示例上成功注册 `$bus` 对象（始终报 `undefined`）。测试到中途不得不暂时搁置。