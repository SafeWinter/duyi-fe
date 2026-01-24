<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" autocomplete="new-password" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">
        {{ loading ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>
<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState({
      loading: state => state.user.loading
    })
  },
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  methods: {
    async handleSubmit() {
      // console.log("登录", this.loginId, this.loginPwd);
      const user = await this.$store.dispatch('user/login', {
        loginId: this.loginId,
        loginPwd: this.loginPwd
      });
      if(!user) {
        this.loginId = '';
        this.loginPwd = '';
        this.$nextTick(() => 
          alert('用户名或密码不正确，请重新登录！'));
      } else {
        const path = this.$route.query.returnurl || '/';
        this.$router.push(path);
      }
    },
  },
};
</script>
<style scoped>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
.form-item input {
  height: 26px;
  font-size: 14px;
  flex: 1 1 auto;
}
.form-item label {
  width: 70px;
}
.form-item button {
  flex: 1 1 auto;
  background: #50936c;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
}
</style>
