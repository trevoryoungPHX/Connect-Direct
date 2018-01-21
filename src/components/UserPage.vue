<template>
  <div class="User">
    You have successfully logged in
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      msg: 'some new component, yo'
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
