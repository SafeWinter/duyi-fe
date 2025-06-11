<template>
  <div class="home-container" ref="home">
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
      banners: [],
    };
  },
  async created() {
    this.banners = await getBanner();
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