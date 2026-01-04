# L02：首个 Vue 应用



本节不涉及 `Vue` 的具体讲解，通过一个简单的商品列表的加载、更新、删除来感受 `Vue` 的功能。



## 1 体验时提到的概念

`Vue` 模板：使用 `new Vue({el: '#app'})` 引用的页面元素（`id` 为 `"app"` 的 `HTML` 元素）会成为一个 `Vue` 模板，经过 `Vue` 实例的内部处理，再生成一个新的、功能增强后的页面元素。

数据响应式特性：页面数据的变化会导致页面 **重新渲染**。

`Vue` 版本：`2.7.16`（`2.x` 的最终版）



## 2 大胡子语法

即模板中的变量引用的写法（`L2`）：

```html
<div id="app">
  <h1>{{message}}</h1>
</div>
<script src="js/vue.min.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue!'
    }
  });
  console.log(Vue.version); // 2.7.16
</script>
```



## 3 模板中的循环

用到 `v-for`、`v-on`（`@click`） 指令：

```html
<div id="app">
  <h1>标题：商品管理系统</h1>
  <ul>
    <li v-for="item in products" key="item.id">
      商品名称：{{ item.name }}，商品数量：
      <button v-on:click="changeStock(item, item.stock - 1)">-</button>
      {{ item.stock || '已售罄'}}
      <button @click="changeStock(item, item.stock + 1)">+</button>
    </li>
  </ul>
</div>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue!',
      products: [
        { id: 1, name: 'iPhone', stock: 5 },
        { id: 2, name: 'Xiaomi', stock: 6 },
        { id: 3, name: 'Huaway', stock: 7 }
      ]
    },
    methods: {
      changeStock(item, newStock) {
        item.stock = Math.max(newStock, 0);
      }
    }
  });
</script>
```



## 3 计算属性

计算总库存（`L26` 至 `L28`）：`this` 指向 `Vue` 实例。

```html
<div id="app">
  <h1>标题：商品管理系统</h1>
  <ul>
    <li v-for="item in products" key="item.id">
      商品名称：{{ item.name }}，商品数量：
      <button v-on:click="changeStock(item, item.stock - 1)">-</button>
      {{ item.stock || '已售罄'}}
      <button v-on:click="changeStock(item, item.stock + 1)">+</button>
    </li>
  </ul>
  <p>总库存：{{total}}</p>
</div>
<script src="js/vue.min.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue!',
      products: [
        { id: 1, name: 'iPhone', stock: 5 },
        { id: 2, name: 'Xiaomi', stock: 6 },
        { id: 3, name: 'Huaway', stock: 7 }
      ]
    },
    computed: {
      total() {
        return this.products.reduce((sum, {stock}) => sum + stock, 0);
      }
    },
    methods: {
      changeStock(item, newStock) {
        item.stock = Math.max(newStock, 0);
      }
    }
  });
</script>
```



## 4 体验响应式数据的删除

通过注册 `remove` 方法实现（`L9`、`L35`）：

```html
<div id="app">
  <h1>标题：商品管理系统</h1>
  <ul>
    <li v-for="item in products" key="item.id">
      商品名称：{{ item.name }}，商品数量：
      <button v-on:click="changeStock(item, item.stock - 1)">-</button>
      {{ item.stock || '已售罄'}}
      <button v-on:click="changeStock(item, item.stock + 1)">+</button>
      <button @click="remove(item.id)">删除</button>
    </li>
  </ul>
  <p>总库存：{{total}}</p>
</div>
<script src="js/vue.min.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue!',
      products: [
        { id: 1, name: 'iPhone', stock: 5 },
        { id: 2, name: 'Xiaomi', stock: 6 },
        { id: 3, name: 'Huaway', stock: 7 }
      ]
    },
    computed: {
      total() {
        return this.products.reduce((sum, {stock}) => sum + stock, 0);
      }
    },
    methods: {
      changeStock(item, newStock) {
        item.stock = Math.max(newStock, 0);
      },
      remove(id) {
        this.products = this.products.filter(item => item.id !== id);
      }
    }
  });
</script>
```

