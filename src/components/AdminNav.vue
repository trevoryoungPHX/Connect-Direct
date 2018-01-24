<template>
    <div class="adminNav">
    <div id="container">
    <img height="100px" src="../assets/test direct connect logo.png" />
    <router-link to="/">Home</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'adminNav',
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.homeButton {
  font-size: 20px;
  padding-bottom: 0;

}

.adminNav {
  color: white;
  text-align: left;
  height: 150px;
  width: 100%;
  margin-bottom: 20px;
  background: #FDF1D7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FDF1D7, #fce4b5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FDF1D7,  #fce4b5);
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
