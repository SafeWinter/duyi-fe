<template>
  <div class="user-container">
    <h1>User Profile ({{ userName }})</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('user', {
      userName: ({ user }) => (user && user.name || '') || ''
    })
  }
}
</script>
