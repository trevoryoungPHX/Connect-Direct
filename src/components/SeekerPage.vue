<template>
  <div class="Seeker">
    Seeker has successfully logged in!
  </div>
</template>

<script>
export default {
  name: 'Seeker',
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
