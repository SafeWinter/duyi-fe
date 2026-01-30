<template>
  <div class="app-container">
    <Item :isActive="active === '1'" @activate="dealActivate('1')" >
      动漫
    </Item>
    <Item :isActive="active === '2'" @activate="dealActivate('2')" >
      电竞
    </Item>
  </div>
</template>

<script>
import Item from './components/Item';

export default {
  name: 'App',
  components: {
    Item
  },
  data(){
    return {
      active: '',
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
/* class fell through 样式类透传 */
.item-container {
  width:100px; 
  height:30px;
  border: 1px solid violet;
}
</style>
