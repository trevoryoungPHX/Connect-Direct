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
  background-color: #FDF1D7;
  color: white;
  text-align: left;
  height: 150px;
  width: 100%;
  margin-bottom: 20px;
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
