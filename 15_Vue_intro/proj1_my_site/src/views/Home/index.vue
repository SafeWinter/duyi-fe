<template>
  <div v-loading="loading" class="home-container" ref="home">
    <CarouselList :data="data" />
  </div>
</template>

<script>
import CarouselList from "./CarouselList.vue";
import { mapState } from "vuex";

export default {
  components: {
    CarouselList,
  },
  computed: {
    ...mapState('banner', ['loading', 'data']),
  },
  created() {
    this.$store.dispatch('banner/fetchBanner')
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
