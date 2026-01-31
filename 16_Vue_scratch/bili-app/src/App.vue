<template>
  <div class="app-container">
    <TitleMenu :isActive="activeId === 0" @activate="activeId = 0">
      <template #title>发现频道</template>
      <template v-slot:icon>&gt;</template>
    </TitleMenu>
    <ChannelList 
      :cols="2"
      :minRows="3"
      :rowHeight="40"
      :barHeight="40"
      :data="data" 
      :activeId="activeId" 
      @activate="handleActivate" 
    />
  </div>
</template>

<script>
import ChannelList from './components/ChannelList';
import TitleMenu from './components/TitleMenu';
import api from './services/channel.js';

export default {
  name: 'App',
  components: {
    TitleMenu,
    ChannelList
  },
  data(){
    return {
      activeId: 0,
      data: [],
    }
  },
  async created() {
    this.data = await api.getChannels();
    // console.log('data fetched:', this.data);
  },
  methods: {
    handleActivate(id) {
      this.activeId = id;
    }
  },
};
</script>

<style scoped>
.app-container {
  width: 250px;
  border: 1px solid gray;
}
</style>
