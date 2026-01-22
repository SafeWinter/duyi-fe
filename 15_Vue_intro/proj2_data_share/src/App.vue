<template>
  <div class="container">
    <a-comp />
    <b-comp />
  </div>
</template>

<script>
import AComp from './components/A.vue';
import BComp from './components/B.vue';

export default {
  name: 'App',
  components: {
    AComp,
    BComp
  }
}
</script>