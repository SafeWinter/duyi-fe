const template = `
<div class="product-container">
  <ul>
    <li v-for="product in products" :key="product.id">
      名称：{{product.name}}; 
      库存：
      <button :disabled="product.stock === 0" @click="changeStock(product, product.stock - 1)">&minus;</button>
      <span>{{product.stock | fmtStock}}</span>
      <button @click="changeStock(product, product.stock + 1)">&plus;</button>
      <button @click="remove(product.id)">删除</button>
    </li>
  </ul>
</div>
`;

export default {
  name: "Products",
  filters: {
    fmtStock: (v) => (+v > 0 ? v : "无货"),
  },
  data() {
    return {
      products: [
        { id: 1, name: "iPhone", stock: 10 },
        { id: 2, name: "Xiaomi", stock: 5 },
        { id: 3, name: "Huaway", stock: 15 },
      ],
    };
  },
  methods: {
    changeStock(item, newStock) {
      item.stock = Math.max(0, newStock);
    },
    remove(id) {
      this.products = this.products.filter((e) => e.id !== id);
    },
  },
  template,
};
