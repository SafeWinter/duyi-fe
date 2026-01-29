import Products from "./components/Products.js";

const template = `
  <div class="app-container">
    <h1>库存管理系统</h1>
    <Products 
      :products="phones" 
      @stockChange="handleStockChange" 
      @remove="handleRemove" 
    />
  </div>
`;

export default {
  name: "App",
  template,
  components: {
    Products,
  },
  data() {
    return {
      phones: [
        { id: 1, name: "iPhone", stock: 10 },
        { id: 2, name: "Xiaomi", stock: 5 },
        { id: 3, name: "Huaway", stock: 15 },
      ],
    };
  },
  methods: {
    handleStockChange({ id }, newStock) {
      const target = this.phones.find((phone) => phone.id === id);
      if (target) {
        target.stock = Math.max(0, newStock);
      }
    },
    handleRemove(id) {
      this.phones = this.phones.filter((phone) => phone.id !== id);
    },
  },
};
