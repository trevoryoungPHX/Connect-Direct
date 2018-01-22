<template>
  <div class="User">
    You have successfully logged in!
  </div>
</template>

<script>
export default {
  name: 'User',
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
