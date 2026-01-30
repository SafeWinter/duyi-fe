<template>
  <div class="app-container">
    <TitleMenu @activate="selected = true" :isActive="selected">
      <template #title>发现频道</template>
      <template v-slot:icon>&gt;</template>
    </TitleMenu>
    <!-- <Item :isActive="active === '1'" @activate="dealActivate('1')" >
      动漫
    </Item>
    <Item :isActive="active === '2'" @activate="dealActivate('2')" >
      电竞
    </Item> -->
  </div>
</template>

<script>
import Item from './components/Item';
import TitleMenu from './components/TitleMenu';

export default {
  name: 'App',
  components: {
    Item,
    TitleMenu,
  },
  data(){
    return {
      active: '',
      selected: false,
    }
  },
  methods: {
    dealActivate(value) {
      this.active = value;
    }
  },
};
</script>

<style scoped>
.app-container {
  width: 250px;
  height: 500px;
  border: 1px solid gray;
}
/* class fell through 样式类透传 */
.item-container {
  width:100px; 
  height:30px;
  border: 1px solid violet;
}
</style>
