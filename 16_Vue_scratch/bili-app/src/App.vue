<template>
  <div class="app-container">
    <Item :isActive="active" >
      <template #default>放入内容</template>
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
      active: false,
    }
  },
};
</script>

<style>
.app-container {
  width:100px; 
  height:60px;
  border: 1px solid;
}
</style>
