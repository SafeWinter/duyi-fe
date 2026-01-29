<template>
  <div style="width:100px; height:60px; border:1px solid">
    <Item :isActive="true">
      asdfasfd
    </Item>
  </div>
</template>

<script>
import Item from "./components/Item";
export default {
  components: {
    Item,
  },
};
</script>
