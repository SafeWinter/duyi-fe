<template>
  <div class="block">
    <p>【Comp A】<br/>the number is</p>
    <h1>{{$store.state.count}}</h1>
    <p>
      <button @click="handleDecrease">减少</button>
      <button @click="handleAsyncIncrease">异步增加</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AComp',
  methods: {
    handleDecrease() {
      this.$store.commit('decrease');
    },
    handleAsyncIncrease() {
      this.$store.dispatch('asyncIncrease')
    }
  }
};
</script>