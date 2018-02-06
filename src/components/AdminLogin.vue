<template>
  <div class="adminLogin">
    <AdminNav></AdminNav>
    <div class = "circleBorder">
      <div id = 'adminFormHolder'>
        <form id='login-form' @submit.prevent="adminLogin">
          <h1>Admin Login</h1>
          <input v-model="email" type="email" placeholder="Email Address" required>
          <input v-model="password" type="password" placeholder="Password" required>
          <button type='submit'>Access Admin Panel</button><br />
          <span id = "error" v-if="errMsg">{{errMsg}}</span><br /><br />
          <img width="70%" src="../assets/test direct connect logo.png" /><br /><br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import AdminNav from './AdminNav.vue'
import axios from 'axios'
export default {
  name: 'AdminLogin',
  components: { AdminNav },
  data() {
    return {
      email: '',
      password: '',
      errMsg: ''
    }
  },
  methods: {
    adminLogin() {
      axios.post('/admin/login', {email:this.email, password:this.password}).then((res)=>{
        localStorage.setItem('usertoken', res.data.token);
        this.$router.push('/admin-page');
      }).catch((err)=>{
        console.log(err.response.data.errMsg);
        this.errMsg = err.response.data.errMsg;
      })
    }
  }
}
</script>

<style scoped>

#error {
  font-style: italic;
  color: red;
  font-weight: bolder;
  font-size: 20px;
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



.adminLogin {
  background-image: url(../assets/image3.jpg);
  padding-bottom: 200px;
  background-size: cover;
  background-repeat: no-repeat;
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
  margin-bottom: 50px;
  border-radius: 100px;
  margin-left: auto;
  width: 50%;
  min-width: 380px;
  opacity: .85;
  margin-top: 50px;
  background-color: white;
  margin-right: auto;
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

}

button {
  padding: 10px;
  width: 70%;
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

form {
  margin: 0 auto;
  width: 300px;
  font-family: 'Questrial', sans-serif;

}
input {
  margin-bottom: 3px;
  padding: 10px;
  font-size: 20px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #FDEFD2;
  font-family: 'Questrial', sans-serif;

}

label {
  cursor: pointer;
}

h1 {
  padding:20px;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  font-size: 35px;
}

</style>
