<template>
    <div id="seekerProfile">
      <SeekerProfileNav></SeekerProfileNav>
      <div class="seekerProfile">
        <div class ="formHolder">
          <form @submit.prevent="editProfile">
            <h1>Profile Settings</h1>
            <input type="text"  v-model="info.first_name" placeholder="First Name" required>
            <input type="text"  v-model="info.last_name" placeholder="Last Name" required>
            <input type="email" v-model="info.email" placeholder="Email Address" required>
            <input type="text" v-model="info.job_title" placeholder="Job Title" required>
            <input type="text" v-model="info.organization_name" placeholder="Organization Name" required>
            <br /><button type='submit' id="button1">Save </button><br />
          </form>
          <transition name="slide">
            <p v-if="successMessage" id="profileMessage">Profile Updated!<br /><br /><span id="return"><router-link to="/seeker-page">Return to Your Home Page</router-link></span></p>
          </transition>
        </div>
      </div>
      <AppFooter2></AppFooter2>
    </div>
</template>

<script>
import AppFooter2 from './AppFooter2.vue'
import SeekerProfileNav from './SeekerProfileNav.vue'
import axios from 'axios'

export default {
  name: 'SeekerProfile',
  components: { AppFooter2, SeekerProfileNav },
  data() {
    return {
      info: {
        first_name: "",
        last_name: "",
        email: "",
        job_title: "",
        organization_name: "",
      },
      successMessage: false
    }
  },
  methods:{
      getUserName: function() {
        let token = localStorage.getItem('usertoken');
        axios.get(`/seekerInfo?token=${token}`).then(response => {
          this.info = response.data;
        })
      },

      editProfile: function(){
        let userToken = localStorage.getItem('usertoken');
        axios.post(`/updateSeeker`, {token:userToken, seeker:this.info}).then(response => {
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

#seekerProfile {
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

h1 {
  padding-bottom: 30px;
}
.seekerProfile  {
  height: auto;
  background-image: url("../assets/network2.jpeg");
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
  font-family: 'Questrial', sans-serif;
}

input {
  font-family: 'Questrial', sans-serif;
  width: 80%;
  text-align: center;
  margin-bottom: 10px;
  background-color: white;
  height: 40px;
  font-weight: bold;
  font-size: 15px;
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
