<template>
  <div class="appFooter">
      <p>&copy; 2018 Connect Direct </p>
      <p>Developed by <a href="http://trevdev.co">trevdev.co</a></p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.appFooter {
  background: #2d3e49;
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  color: white;
  height: 100px;
  width: 100%;
  padding-top: 10px;
  margin-top: 10px;
}

</style>
