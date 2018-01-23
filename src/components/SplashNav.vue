<template>
  <div class="splashNav">
    <div id="container">
    <img height="100px" src="../assets/test direct connect logo.png" />
    <router-link to="/seeker-splash" exact>Recruit Professionals</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SplashNav',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.splashNav {
  background-color: #FDF1D7;
  color: white;
  text-align: left;
  margin-bottom: 30px;
  height: auto ;
  width: 100%;
}
#container {
  padding-left: 10%;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
