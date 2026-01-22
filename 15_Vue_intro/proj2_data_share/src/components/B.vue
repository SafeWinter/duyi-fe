<template>
  <div class="block">
    <p>【Comp B】<br/>the number is</p>
    <h1>{{$store.state.count}}</h1>
    <p>
      <button @click="handleAsyncDecrease">异步减少</button>
      <button @click="handleIncrease">增加</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BComp',
  methods: {
    handleAsyncDecrease() {
      this.$store.dispatch('asyncDecrease');
    },
    handleIncrease(){
      this.$store.commit('increase');
    }
  }
};
</script>