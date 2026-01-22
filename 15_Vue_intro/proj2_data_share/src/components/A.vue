<template>
  <div class="block">
    <p>【Comp A】<br/>the number is</p>
    <h1>{{$store.state.count}}</h1>
    <p>
      <button>减少</button>
      <button>异步增加</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AComp'
};
</script>