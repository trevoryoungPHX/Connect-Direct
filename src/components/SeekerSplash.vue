<template>
  <div class="SeekerSplash">
    <div class="splash">
    <seekerLoginNav></seekerLoginNav>
    <seekerLogin></seekerLogin>
  </div>
    <splashFooter></splashFooter>
  </div>
</template>

<script>

import SeekerLoginNav from './SeekerLoginNav.vue'
import SeekerLogin from './SeekerLogin.vue'
import SplashFooter from './SplashFooter.vue'

export default {
  name: 'SeekerSplash',
  components: { SeekerLoginNav, SeekerLogin, SplashFooter },
  methods: {
  }
}
</script>

<style scoped>

.splash {
  background-color: #2d3e49;
}

form {
  width: 300px;
}
input {
  margin-bottom: 3px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
}
button {
  padding: 10px;
}
label {
  cursor: pointer;
}
#form-switch {
  display: none;
}
#register-form {
  display: none;
}
#form-switch:checked ~ #register-form {
  display: block;
}
#form-switch:checked ~ #login-form {
  display: none;
}
</style>
