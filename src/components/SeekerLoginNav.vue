<template>
  <div class="seekerLoginNav">
    <div id="container">
    <img height="100px" src="../assets/test direct connect logo.png" />
    <router-link to="/">User Login</router-link>
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

.splash {
  background-color: #2d3e49;
  min-height: 800px;
  height: auto;
}
</style>
