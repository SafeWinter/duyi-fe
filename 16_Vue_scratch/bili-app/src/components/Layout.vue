<template>
  <div class="container">
    <header class="head">
      <slot name="head"></slot>
    </header>
    <div class="mid">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.head {
  height: 50px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.mid {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
}
.left {
  float: left;
  width: 250px;
  height: 100%;
}
.right {
  overflow: hidden;
  height: 100%;
  background: #f4f4f4;
}
</style>
