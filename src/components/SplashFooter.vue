<template>
  <div class = "wrapper">
  <footer class="splashFooter">
      <p>&copy; 2018 Connect Direct </p>
      <p><router-link to="admin-login">Admin Portal</router-link></p>
      <p>Developed by <a href="http://trevdev.co">trevdev.co</a></p>
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
  background: #2d3e49;
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  color: white;
  height: 120px;
  width: 100%;
  padding-top: 30px;
}

a {
  color: white;
  font-style: italic;
  font-style: oblique;
}
</style>
