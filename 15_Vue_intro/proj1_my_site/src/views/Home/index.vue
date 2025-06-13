<template>
  <div v-loading="loading" class="home-container" ref="home">
    <CarouselList :data="banners" />
  </div>
</template>

<script>
import { getBanner } from "@/api/banner";
import CarouselList from "./CarouselList.vue";
import fetchBanner from '@/mixins/fetchBanners';

export default {
  components: {
    CarouselList,
  },
  mixins: [fetchBanner([])],
  methods: {
    async getRemoteData() {
      // implement the instance mothod in fetchBanner mixin
      return await getBanner();
    }
  }
};
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
