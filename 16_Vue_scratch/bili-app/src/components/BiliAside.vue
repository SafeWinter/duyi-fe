<template>
  <div class="bili-aside-container">
    <ChannelSearch />
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
import ChannelList from '@/components/ChannelList';
import TitleMenu from '@/components/TitleMenu';
import ChannelSearch from '@/components/ChannelSearch';
import api from '@/services/channel';

export default {
  name: 'BiliAside',
  components: {
    TitleMenu,
    ChannelList,
    ChannelSearch
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
.bili-aside-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  /* border: 1px solid gray; */
  /* border-bottom: none; */
}
</style>