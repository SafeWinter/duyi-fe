import Products from "./components/Products.js";

const template = `
  <div class="app-container">
    <h1>库存管理系统</h1>
    <Products />
  </div>
`;

export default {
  name: "App",
  components: {
    Products,
  },
  template,
};
