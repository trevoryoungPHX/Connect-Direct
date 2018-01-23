<template>
  <div class="SeekerLogin">
    <AdminNav></AdminNav>
    <SplashFooter></SplashFooter>
  </div>
</template>

<script>

import AdminNav from './AdminNav.vue'
import SplashFooter from './SplashFooter.vue'

export default {
  name: 'AdminLogin',
  components: { AdminNav, SplashFooter },
  data() {
  },
  methods: {
  }
}
</script>

<style scoped>
form {
  margin: 0 auto;
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
