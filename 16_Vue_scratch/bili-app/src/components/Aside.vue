<template>
  <div class="aside">
    <ChannelSearch />
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <template v-slot:title>
        <!-- 给title具名插槽传递内容 -->
        发现频道
      </template>
      <template v-slot:icon>
        >
      </template>
    </TitleMenu>
    <ChannelList :activeId="activeId" @active="activeId = $event" />
  </div>
</template>

<script>
import TitleMenu from "./TitleMenu";
import ChannelList from "./ChannelList";
import ChannelSearch from "./ChannelSearch";
export default {
  components: {
    TitleMenu,
    ChannelList,
    ChannelSearch,
  },
  data() {
    return {
      activeId: 100, // 默认选中的是热门
    };
  },
};
</script>

<style scoped>
.aside {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
