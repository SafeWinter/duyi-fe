<template>
  <div class="channel-list-container">
    <Channel class="item" v-for="item in data" :key="item.id"
      :activeId="activeId" 
      :channel="item" 
      @activate="id => $emit('activate', id)"
    />
  </div>
</template>

<script>
import Channel from './Channel';

export default {
  name: 'ChannelList',
  components: {
    Channel
  },
  props: {
    activeId: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      default: () => ([]),
    }
  },
}
</script>

<style scoped>
.channel-list-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 50%;
}
</style>