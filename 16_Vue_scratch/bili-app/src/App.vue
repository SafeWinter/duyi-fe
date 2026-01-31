<template>
  <div>
    <div style="width:250px">
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
  </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu";
import ChannelList from "./components/ChannelList";
import ChannelSearch from "./components/ChannelSearch";
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
