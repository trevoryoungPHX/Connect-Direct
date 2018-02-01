<template>
    <div id="userProfile">
      <UserProfileNav></UserProfileNav>
      <div class="userProfile">
        <div class ="formHolder">
          <form @submit.prevent="editProfile">
            <h1>Profile Settings</h1>
            <input type="text"  v-model="info.first_name" placeholder="First Name" required>
            <input type="text"  v-model="info.last_name" placeholder="Last Name" required>
            <input type="email" v-model="info.email" placeholder="Email Address" required>
            <input type="text" v-model="info.job_title" placeholder="Job Title" required>
            <input type="text" v-model="info.company_name" placeholder="Company Name" required>
            <<input type="text" v-model="info.linkedin_url" placeholder="LinkedIn URL">
            <br /><button type='submit' id="button1">Save </button><br />
          </form>
          <transition name="slide">
          <p v-if="successMessage" id="profileMessage">Profile Updated!<br /><br /><span id="return"><router-link to="/user-page">Return to Opportunity Feed</router-link></span></p>
          </transition>
        </div>
      </div>
      <AppFooter2></AppFooter2>
    </div>
</template>

<script>
import AppFooter2 from './AppFooter2.vue'
import UserProfileNav from './UserProfileNav.vue'
import axios from 'axios'

export default {
  name: 'UserProfile',
  components: { AppFooter2, UserProfileNav },
  data() {
    return {
      info: {
        first_name: "",
        last_name: "",
        email: "",
        job_title: "",
        company_name: "",
        linkedin_url: "",
      },
      successMessage: false
    }
  },
  methods:{
      getUserName: function() {
        let token = localStorage.getItem('usertoken');
        axios.get(`/userInfo?token=${token}`).then(response => {
          this.info = response.data;
        })
      },

      editProfile: function(){
        let userToken = localStorage.getItem('usertoken');
        axios.post(`/updateUser`, {token:userToken, user:this.info}).then(response => {
          this.successMessage = true;
        })
      }

  },
  created() {
    this.getUserName()
  }
}
</script>

<style scoped>

#profileMessage {
  font-size: 20px;
  font-weight: bold;
}

#return {
padding: 13px;
border-radius: 3px;
color: white;
-webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
-moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#userProfile {
  -webkit-animation: fadein 2s;
   -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
     -o-animation: fadein 2s;
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      @-moz-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      @-webkit-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      @-ms-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
      }

      @-o-keyframes fadein {
          from { opacity: .5; }
          to   { opacity: 1; }
}

h1 {
  padding-bottom: 30px;
}
.userProfile  {
  height: auto;
  background-image: url("../assets/network.jpeg");
  background-size: cover;
  margin-bottom: 0px;
  padding-top: 80px;
  padding-bottom: 80px;
}

.formHolder {
  min-height: 400px;
  background-color: white;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  padding-top: 30px;
  padding-bottom: 20px;
}

button {
  padding: 10px;
  width: 200px;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  margin: 20px;
  font-size: 20px;
  background: #1D976C;
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);
  background: linear-gradient(to top, #7bd19a, #1D976C);
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

form {
  font-family: 'Questrial', sans-serif;
}

input {
  font-family: 'Questrial', sans-serif;
  width: 80%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: white;
  height: 40px;
  border-radius: 3px;
  color: black;
  outline: none;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {

}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(30px)
  }
  to {
    transform: translateY(0)
  }
}

</style>
