<template>
  <div class = "wrapper">
  <footer class="splashFooter">
      &copy; 2018 Connect Direct <br />
      <router-link to="admin-login">Admin Portal</router-link>
  </footer>
</div>
</template>

<script>
export default {
  name: 'SplashFooter',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.splashFooter {
  background-color: #2d3e49;
  color: white;
  height: 100px;
  width: 100%;
  padding-top: 30px;
}

a {
  color: white;
  font-style: italic;
  font-style: oblique;
}
</style>
