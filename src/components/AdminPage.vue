<template>
  <div class="User">
    <UserProfileNav2></UserProfileNav2>
    Admin has successfully logged in!
    <AppFooter2></AppFooter2>
  </div>
</template>

<script>

import AppFooter2 from "./AppFooter2"
import UserProfileNav2 from "./UserProfileNav2"
export default {
  name: 'User',
  components: { AppFooter2, UserProfileNav2 },
  data() {
    return {
      msg: 'Test message'
    }
  },
  created() {
    if (!this.$auth.check()) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
