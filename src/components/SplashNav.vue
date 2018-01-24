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
  color: white;
  text-align: left;
  margin-bottom: 30px;
  height: auto ;
  width: 100%;
  background: #FDF1D7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FDF1D7, #fce4b5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FDF1D7,  #fce4b5);
}
#container {
  padding-left: 12%;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
