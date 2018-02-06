<template>
  <div class="Login">
    <input type='checkbox' id='form-switch'>
    <form id='login-form' @submit.prevent="userLogin">
      <h1>User Login</h1>
      <input v-model="email" type="email" placeholder="Email Address" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type='submit'>Let's Do This <img height="15px"src="../assets/arrowicon.png" /></button><br />
      <span id = "error" v-if="errMsg">{{errMsg}}</span><br /><br />
      <label for='form-switch'><a>Not a member? Click here to register!</a></label>
    </form>
    <form id='register-form' @submit.prevent="userSignup">
      <h1>Register New User</h1>
      <input type="text" v-model="first_name" placeholder="First Name" required>
      <input type="text" v-model="last_name" placeholder="Last Name" required>
      <input type="email" v-model="email" placeholder="Email Address" required>
      <input type="text" v-model="job_title" placeholder="Job Title" required>
      <input type="text" v-model="company_name" placeholder="Company Name" required>
      <input type="text" v-model="linkedin_url" placeholder="LinkedIn URL">
      <input type="password" v-model="password" placeholder="Password" required><br />
      <button type='submit' id="button1">Get Started <img height="15px"src="../assets/arrowicon.png" /></button><br />
      <label for='form-switch'><a>Already a member? Click here to sign in!</a></label><br /><br />
      <span id = "success" v-if="msg">{{msg}}</span><br /><br />
    </form>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errMsg: '',
      first_name: '',
      last_name: "",
      job_title: "",
      company_name: "",
      linkedin_url: "",
      msg: ""
    }
  },
  methods: {
    userLogin() {
      axios.post('/user/login', {email:this.email, password:this.password}).then((res)=>{
        localStorage.setItem('usertoken', res.data.token);
        this.$router.push('/user-page');
      }).catch((err)=>{
        this.errMsg = err.response.data.errMsg;
      })
    },
    userSignup() {
      if(this.linkedin_url.slice(0,7)!=="http://"){
        this.linkedin_url = "http://"+this.linkedin_url;
      }
      axios.post('/user/signup', {email:this.email, password:this.password, first_name:this.first_name, last_name:this.last_name, job_title:this.job_title, company_name:this.company_name, linkedin_url:this.linkedin_url}).then((res)=>{
        this.msg=res.data.msg;
      })
    }
  }
}
</script>

<style scoped>


h1 {
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  font-size: 35px;
  padding: 20px;
}

.Login {
  background-image: url(../assets/image1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 800px;
}
form {
  margin: 0 auto;
  width: 30%;
  min-width: 350px;
  padding: 40px;
  border-radius: 5px;
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ece9e6, #ffffff);
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
  font-size: 15px;
  border-radius: 3px;
  border:2px solid white;
}

button {
  padding: 10px;
  width: 80%;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  font-size: 20px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
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


#success {
  font-style: italic;
  color: #2d3e49;
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
