<template>
  <div class="Login">
    <input type='checkbox' id='form-switch'>
    <form id='login-form' @submit.prevent="userLogin">
      <input v-model="email" type="text" placeholder="email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type='submit'>Login</button>
      <label for='form-switch'><span>Register</span></label>
    </form>
    <form id='register-form' action="" method='post'>
      <input type="text" placeholder="Username" required>
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <input type="password" placeholder="Re Password" required>
      <button type='submit'>Register</button>
      <label for='form-switch'>Already Member ? Sign In Now..</label>
    </form>
    <span v-if="errMsg">Invalid login details</span>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errMsg: false
    }
  },
  methods: {
    userLogin() {
      let redirect = this.$auth.redirect()
      this.$auth.login({
        data: {
          email: this.email,
          password: this.password
        },
        success(data) {
          console.log('data', data)
          this.$auth.token(null, data.data.token)
          this.$auth.user(data.data.user[0])
          console.log('user', this.$auth.user())
        },
        error(err) {
          this.errMsg = true
        },
        redirect: { name: redirect ? redirect.from.name : 'UserPage' }
      })
    }
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
