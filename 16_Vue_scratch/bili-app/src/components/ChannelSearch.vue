<template>
  <div class="channel-search-container">
    <SearchBar placeholder="搜索频道" @search="handleSearch"/>
  </div>
</template>

<script>
import SearchBar from './SearchBar';

export default {
  name: 'ChannelSearch',
  components: {
    SearchBar
  },
  methods: {
    handleSearch(keyword) {
      // search logics here
      console.log(keyword);
    }
  },
}
</script>

<style scoped>
.channel-search-container {
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  margin-block: 18px;
  padding-inline: 18px;
}
</style>