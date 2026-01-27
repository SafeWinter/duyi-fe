<template>
  <div class="project-container" ref="projContainer" v-loading="loading">
    <project-card v-for="item in data" :item="item" :key="item.id" />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard';
import { mapState } from 'vuex';
import { mainScroll } from '@/mixins';

export default {
  name: 'Project',
  mixins: [mainScroll('projContainer')],
  components: {
    ProjectCard
  },
  computed: {
    ...mapState('project', ['data', 'loading'])
  },
  created(){
    this.$store.dispatch('project/fetchData');
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
.project-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
