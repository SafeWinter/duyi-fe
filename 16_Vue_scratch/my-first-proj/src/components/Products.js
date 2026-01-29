const template = `
<div class="product-container">
  <ul v-if="hasData">
    <li v-for="product in products" :key="product.id">
      名称：{{product.name}}; 
      库存：
      <button 
        :disabled="product.stock === 0" 
        @click="changeStock(product, product.stock - 1)"
      >
        &minus;
      </button>
      <span>{{product.stock | fmtStock}}</span>
      <button @click="changeStock(product, product.stock + 1)">&plus;</button>
      <button @click="remove(product.id)">删除</button>
    </li>
  </ul>
  <div v-else>暂无库存</div>
</div>
`;

export default {
  name: "Products",
  filters: {
    fmtStock: (v) => (+v > 0 ? v : "无货"),
  },
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasData() {
      return this.products && this.products.length > 0;
    }
  },
  methods: {
    changeStock(item, newStock) {
      this.$emit('stockChange', item, newStock);
    },
    remove(id) {
      this.$emit('remove', id);
    },
  },
  template,
};
