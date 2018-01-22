<template>
  <div class="SeekerLogin">
    Test Seeker Login
  </div>
</template>

<script>
export default {
  name: 'SeekerLogin',
  data() {
  },
  methods: {
  }
}
</script>

<style scoped>
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
