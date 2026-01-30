<template>
  <div>
    <div style="width:100px; height:30px; border:1px solid">
      <Item :isActive="curActive === 'dongman'" @active="curActive = 'dongman'">
        动漫
      </Item>
    </div>
    <div style="width:100px; height:30px; border:1px solid">
      <Item
        :isActive="curActive === 'dianjing'"
        @active="curActive = 'dianjing'"
      >
        电竞
      </Item>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      curActive: "dianjing",
    };
  },
  methods: {
    test(e) {
      console.log(e);
    },
  },
};
</script>
