<template>
  <div v-loading="loading" class="home-container" ref="home">
    <CarouselList :data="banners"/>
  </div>
</template>

<script>
import { getBanner } from '@/api/banner';
import CarouselList from './CarouselList.vue';

export default {
  components: {
    CarouselList
  },
  data() {
    return {
      loading: true,
      banners: [],
    };
  },
  async created() {
    this.banners = await getBanner();
    this.loading = false;
  },
}
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>