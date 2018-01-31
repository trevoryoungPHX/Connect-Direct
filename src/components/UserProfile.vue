<template>
    <div id="userProfile">
      <UserProfileNav></UserProfileNav>
      <div class="userProfile">
        <div class ="formHolder">
            <form @submit.prevent="">
            <h1>Profile Settings</h1>
            <input type="text"  placeholder="First Name" required>
            <input type="text"  placeholder="Last Name" required>
            <input type="email" placeholder="Email Address" required>
            <input type="text" placeholder="Job Title" required>
            <input type="text" placeholder="Company Name" required>
            <input type="text" placeholder="LinkedIn URL">
            <input type="password" placeholder="Password" required><br />
            <button type='submit' id="button1">Save <img height="15px"src="../assets/arrowicon.png" /></button><br />
          </form>
        </div>
      </div>
      <AppFooter2></AppFooter2>
    </div>
</template>

<script>
import AppFooter2 from './AppFooter2.vue'
import UserProfileNav from './UserProfileNav.vue'


export default {
  name: 'UserProfile',
  components: { AppFooter2, UserProfileNav },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

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

</style>
