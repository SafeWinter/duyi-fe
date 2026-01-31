<template>
  <div class="layout-container">
    <header class="head">
      <slot name="head"></slot>
    </header>
    <section class="body">
      <aside class="left" v-if="$slots.left">
        <slot name="left"></slot>
      </aside>
      <main class="main" v-if="$slots.main">
        <slot name="main"></slot>
      </main>
      <aside class="right" v-if="$slots.right">
        <slot name="right"></slot>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
.layout-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.head {
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.body {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.5);

  display: flex;
}
.left {
  flex: 0 0 auto;
  width: 250px;
}
.main {
  flex: 1 1 auto;
  background: #f4f4f4;
}
.right {
  flex: 0 0 auto;
}

</style>