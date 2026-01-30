<template>
  <div>
    <div style="width:250px">
      <TitleMenu :isActive="select" @active="select = true">
        <template v-slot:title>
          <!-- 给title具名插槽传递内容 -->
          发现频道
        </template>
        <template v-slot:icon>
          >
        </template>
      </TitleMenu>
    </div>
  </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu";
export default {
  components: {
    TitleMenu,
  },
  data() {
    return {
      select: false,
    };
  },
};
</script>
