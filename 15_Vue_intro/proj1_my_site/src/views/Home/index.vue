<template>
  <div v-loading="loading" class="home-container" ref="home">
    <CarouselList :data="data" />
  </div>
</template>

<script>
import { getBanner } from "@/api/banner";
import CarouselList from "./CarouselList.vue";
import { fetchRemoteData } from '@/mixins';

export default {
  components: {
    CarouselList,
  },
  mixins: [fetchRemoteData([])],
  methods: {
    async getRemoteData() {
      // within mixin: this.data = await this.getRemoteData();
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
