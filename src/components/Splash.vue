<template>
  <div>
    <div class="splash">
      <splashNav></splashNav>
      <userLogin></userLogin>
    </div>
    <splashFooter></splashFooter>
  </div>
</template>

<script>
import UserLogin from './UserLogin.vue'
import SplashNav from './SplashNav.vue'
import SplashFooter from './SplashFooter.vue'
export default {
  name: 'Splash',
  components: { UserLogin, SplashNav, SplashFooter },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.splash {
  background-color: #2d3e49;
  min-height: 800px;
  height: auto;
}

</style>
