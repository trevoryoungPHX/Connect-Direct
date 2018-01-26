<template>
  <div class="seekerPage">
    Seeker has successfully logged in!
    <button>TEST</button>
  </div>
</template>

<script>
export default {
  name: 'SeekerPage',
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

.seekerPage {
  color: black;
}
</style>
