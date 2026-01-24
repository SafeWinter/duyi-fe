<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <user-name />
    </div>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import UserName from './components/UserName';
export default {
  components: {
    UserName,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-block: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .ml-5 {
  margin-left: 5px;
}
.content, #nav {
  width: 400px;
  margin-inline: auto;
  border: 2px solid #2c855d;
  border-radius: 0.5em;
}
.content {
  height: 300px;
  margin-block-start: 0.5em;
}
</style>

