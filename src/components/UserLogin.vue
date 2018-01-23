<template>
  <div class="Login">
    <input type='checkbox' id='form-switch'>
    <form id='login-form' @submit.prevent="userLogin">
      <h1>User Login</h1>
      <input v-model="email" type="text" placeholder="Email Address" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type='submit'>Let's Do This</button><br />
      <span id = "error" v-if="errMsg">Invalid login credentials.<br />Please try again.</span><br /><br />
      <label for='form-switch'>Not a member? Click here to register!</label>
    </form>
    <form id='register-form' action="" method='post'>
      <h1>Register New User</h1>
      <input type="text" placeholder="First Name" required>
      <input type="text" placeholder="Last Name" required>
      <input type="email" placeholder="Email Address" required>
      <input type="text" placeholder="Phone Number" required>
      <input type="text" placeholder="Job Title" required>
      <input type="text" placeholder="Company Name" required>
      <input type="text" placeholder="LinkedIn URL" required>
      <input type="password" placeholder="Password" required>
      <input type="password" placeholder="Re-Enter Password" required><br />
      <button type='submit' id="button1">Get Started</button><br />
      <label for='form-switch'>Already a member? Click here to sign in!</label>
    </form>
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


h1 {
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  font-size: 45px;
}
.Login {
  background-image: url(../assets/image1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 585px;
}
form {
  margin: 0 auto;
  width: 30%;
  min-width: 250px;
  padding: 40px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 20px 4px rgba(0,0,0,0.58);
}
input {
  margin-bottom: 3px;
  padding: 10px;
  width: 90%;
  background-color: #fdf1d7;
  border: 1px solid gray;
  font-family: 'Questrial', sans-serif;
}

button {
  padding: 10px;
  width: 50%;
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
  width: 50%;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
}

#error {
  font-style: italic;
  color: red;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
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
  opacity: .95;
  padding-top: 15px;
}

#form-switch:checked ~ #register-form {
  display: block;
  background-color: white;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }

}

#login-form {
  background-color: white;
  opacity: .95;
  padding-top: 15px;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }

  }


#form-switch:checked ~ #login-form {
  display: none;
  background-color: white;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: .95; }

  }

</style>
