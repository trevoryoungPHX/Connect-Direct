<template>
  <div class="seekerLoginNav">
    <div id="container">
      <router-link to="/" exact><img height="100px" src="../assets/test direct connect logo.png" /></router-link>
    <router-link to="/login" exact>User Login</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SeekerLoginNav',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.seekerLoginNav {
  color: white;
  text-align: left;
  height: auto ;
  width: 100%;
  background: #FDF1D7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FDF1D7, #fce4b5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FDF1D7,  #fce4b5);
  -webkit-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
}
#container {
  padding-left: 12%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.splash {
  background-color: #2d3e49;
  min-height: 800px;
  height: auto;
}
</style>
