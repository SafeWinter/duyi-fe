<template>
  <div class="user-name">
    <!-- Scenario 1 -->
    <span v-if="status === 'loading'">loading...</span>
    <!-- Scenario 2 -->
    <template v-else-if="status === 'login'">
      <router-link to="/user">{{ user.name }}</router-link>
      <a href="" @click.prevent="logOut">Logout</a>
    </template>
    <!-- Scenario 3 -->
    <router-link v-else to="/login" exact-path>Login</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "UserName",
  computed: {
    ...mapState("user", ["user"]),
    ...mapGetters("user", ["status"]),
  },
  methods: {
    async logOut(){
      await this.$store.dispatch('user/logout');
      this.$router.push({name: 'Login'});
    }
  }
};
</script>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>
