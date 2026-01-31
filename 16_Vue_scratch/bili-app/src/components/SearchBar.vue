<template>
  <form class="search-bar-container" @submit.prevent="handleSearch">
    <input class="keyword" type="text" name="kw" id="kw" 
      :placeholder="placeholder" 
      v-model="keyword"
    />
    <div class="box" @click="handleSearch">
      <Icon type="search" extraCls="icon"/>
    </div>
  </form>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'SearchBar',
  components: {
    Icon
  },
  props: {
    placeholder: {
      type: String,
      default: '搜索关键字'
    }
  },
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    handleSearch() {
      if(this.keyword.trim()) {
        // console.log('key word:', this.keyword);
        this.$emit('search', this.keyword);
      }
    }
  },
}
</script>

<style scoped>
.search-bar-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}
.keyword {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  text-indent: 1ch;
  padding-inline-end: 45px;
  border: 1px solid #e7e7e7;
  border-radius: 0.25em;
}
.keyword::placeholder {
  color: #999;
}
.box {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;

  /* background: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.icon {
  color: #c0c0c0;
  font-weight: 900;
}
</style>