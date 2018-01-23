<template>
  <div class="SeekerLogin">
    <AdminNav></AdminNav>
    <div class = "circleBorder">
    <div id = 'adminFormHolder'>
      <form id='login-form' @submit.prevent="adminLogin">
        <h1>Admin Login</h1>
        <input v-model="email" type="text" placeholder="Email Address" required>
        <input v-model="password" type="password" placeholder="Password" required><br /><br />
        <button type='submit'>Access Admin Panel</button><br />
        <span id = "error" v-if="errMsg">Invalid login credentials.<br />Please try again.</span><br /><br />
      </form>
      <img height="215px" src="../assets/test direct connect logo.png" />
      </div>
    </div>
    <SplashFooter></SplashFooter>
  </div>
  </div>

</template>

<script>

import AdminNav from './AdminNav.vue'
import SplashFooter from './SplashFooter.vue'

export default {
  name: 'AdminLogin',
  components: { AdminNav, SplashFooter },
  data() {
    return {
        email: "",
        password: "",
        errMsg: ''}
  },
  methods: {
    adminLogin() {
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
        redirect: { name: redirect ? redirect.from.name : 'AdminPage' }
      })
    }
  }
}
</script>

<style scoped>

.SeekerLogin {
  background-color: #2d3e49;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }
.circleBorder {
  border: 20px solid black;
  width: 690px;
  margin-bottom: 50px;
  border-radius: 700px;
  margin-left: auto;
  background-color: #FDEFD2;
  margin-right: auto;
  -webkit-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
}
button {
  padding: 10px;
  width: 70%;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  font-size: 15px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border-radius: 2px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
}

button:hover {
  padding: 10px;
  width: 70%;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
}


#adminFormHolder {
  min-height: 670px;
}
form {
  margin: 0 auto;
  width: 300px;
  font-family: 'Questrial', sans-serif;

}
input {
  margin-bottom: 3px;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  font-family: 'Questrial', sans-serif;

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

h1 {
  padding-top: 50px;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  font-size: 50px;
}

</style>
