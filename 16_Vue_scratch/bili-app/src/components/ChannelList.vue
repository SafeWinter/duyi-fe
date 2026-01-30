<template>
  <div class="channel-list">
    <div v-for="item in channels" :key="item.id" class="item">
      <Channel
        @active="$emit('active', item.id)"
        :isActive="item.id === activeId"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel";
import channelServ from "../services/channel";
export default {
  components: {
    Channel,
  },
  props: ["activeId"],
  data() {
    return {
      channels: [],
    };
  },
  async created() {
    var datas = await channelServ.getChannels();
    this.channels = datas.filter((item) => item.name !== "热门");
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
}
.item {
  float: left;
  width: 50%;
}
</style>
