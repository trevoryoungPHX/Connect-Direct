<template>
  <div class="Login">
    <input type='checkbox' id='form-switch'>
    <form id='login-form' @submit.prevent="userLogin">
      <input v-model="email" type="text" placeholder="Email Address" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type='submit'>Login</button><br />
      <label for='form-switch'>Not a member?<span> Click here</span> to register!</label>
    </form>
    <form id='register-form' action="" method='post'>
      <input type="text" placeholder="First Name" required>
      <input type="text" placeholder="Last Name" required>
      <input type="email" placeholder="Email Address" required>
      <input type="text" placeholder="Phone Number" required>
      <input type="text" placeholder="Job Title" required>
      <input type="text" placeholder="Company Name" required>
      <input type="text" placeholder="LinkedIn URL" required><br /><br />
      <input type="password" placeholder="Password" required>
      <input type="password" placeholder="Re-Enter Password" required><br />
      <button type='submit' id="button1">Register</button><br />
      <label for='form-switch'>Already a member? Click here to sign in!</label>
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

.Login {
  background-image: url(../assets/image1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 700px;
  padding-top: 50px;
  padding-bottom: 20px;
}
form {
  margin: 0 auto;
  width: 30%;
  min-width: 250px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
}
input {
  margin-bottom: 3px;
  padding: 10px;
  width: 90%;
  border: 1px solid gray;
  font-family: 'Questrial', sans-serif;
}

button {
  padding: 10px;
  width: 50%;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  font-size: 20px;
}

button:hover {
  padding: 10px;
  width: 50%;
  background-color: red;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  font-size: 20px;
}

label {
  cursor: pointer;
}

#form-switch {
  display: none;
  font-family: 'Questrial', sans-serif;
  background-color: white;
}

#register-form {
  display: none;
}

#form-switch:checked ~ #register-form {
  display: block;
  background-color: #fdf1d7;
}

#login-form {
  background-color: #fdf1d7;
}
#form-switch:checked ~ #login-form {
  display: none;
  background-color: white;
}
</style>
