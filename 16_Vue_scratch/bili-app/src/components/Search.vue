<template>
  <form class="search-area" @submit.prevent="handleSearch">
    <input type="text" v-model="searchValue" :placeholder="placeHolder" />
    <div class="icon" @click="handleSearch">
      <Icon type="search" />
    </div>
  </form>
</template>

<script>
import Icon from "./Icon";
export default {
  components: {
    Icon,
  },
  props: {
    placeHolder: {
      type: String,
      default: "搜索关键字",
    },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    handleSearch() {
      if (this.searchValue) {
        this.$emit("search", this.searchValue);
      }
    },
  },
};
</script>

<style scoped>
.search-area {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  position: relative;
}
.search-area input {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 45px;
}
.icon {
  position: absolute;
  width: 40px;
  height: 100%;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0c0c0;
  cursor: pointer;
}
</style>
