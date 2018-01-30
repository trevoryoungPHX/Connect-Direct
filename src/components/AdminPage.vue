<template>
  <div class="User">
    <AdminNav2></AdminNav2>
    <div id="pageHolder">
        <button v-on:click="getUsers">Users</button>
        <hr />
        <div id="usersDiv" v-if="usersDiv">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Job Title</th>
            <th>LinkedIn URL</th>
            <th>Delete User</th>
          </tr>
          <tr v-for="user in users">
            <td>{{user.first_name}}</td>
            <td>{{user.last_name}}</td>
            <td>{{user.phone_number}}</td>
            <td>{{user.email}}</td>
            <td>{{user.job_title}}</td>
            <td>{{user.linkedin_url}}</td>
            <td><button id="delete">Delete User</button></td>
          </tr>
        </table>
        <div id="greenLine"></div>
      </div>
        <button v-on:click="getSeekers">Organizations</button>
        <hr />
        <div id="seekersDiv" v-if="seekersDiv">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Job Title</th>
            <th>Organization Name</th>
            <th>Delete User</th>
          </tr>
          <tr v-for="seeker in seekers">
            <td>{{seeker.first_name}}</td>
            <td>{{seeker.last_name}}</td>
            <td>{{seeker.phone_number}}</td>
            <td>{{seeker.email}}</td>
            <td>{{seeker.job_title}}</td>
            <td>{{seeker.organization_name}}</td>
            <td><button id="delete">Delete Orgnization</button></td>
          </tr>
        </table>
        <div id="greenLine"></div>
      </div>
        <button v-on:click="getOpportunities">Opportunity Posts</button>
        <hr />
        <div id="opportunityDiv" v-if="opportunityDiv">
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Location Name</th>
            <th>Category</th>
            <th>Timestamp: </th>
            <th>Delete Opportunity Post</th>
          </tr>
          <tr v-for="opportunity in opportunities">
            <td>{{opportunity.id}}</td>
            <td>{{opportunity.title}}</td>
            <td>{{opportunity.description}}</td>
            <td>{{opportunity.location_name}}</td>
            <td>{{opportunity.category}}</td>
            <td>{{opportunity.created_at}}</td>
            <td><button id="delete">Delete Post</button></td>
          </tr>
        </table>
        <div id="greenLine"></div>
      </div>
        <button v-on:click="getInfo">Inquiries</button>
        <hr />
        <div id="inquiryDiv" v-if="inquiryDiv">
        <table>
          <tr>
            <th>ID</th>
            <th>Message</th>
            <th>Timestamp: </th>
            <th>Delete Inquiry</th>
          </tr>
          <tr v-for="info in info_requests">
            <td>{{info.id}}</td>
            <td>{{info.message}}</td>
            <td>{{info.created_at}}</td>
            <td><button id="delete">Delete Inquiry</button></td>
          </tr>
        </table>
        <div id="greenLine"></div>
      </div>
    </div>
    <AppFooter2></AppFooter2>
  </div>
</template>

<script>

import AppFooter2 from "./AppFooter2"
import AdminNav2 from "./AdminNav2"
import axios from 'axios'
import moment from "moment"


export default {
  name: 'User',
  components: { AppFooter2, AdminNav2 },
  methods:{
    newStartDate: function(date) {
      return moment(date).format('LL');
    },
    newStartTime: function(time) {
      return moment(time).format('LT');
    },
    getUsers: function() {
      if(this.usersDiv){
        this.usersDiv = false;
      }else if (this.users.length<1){
        axios.get('/portal/users').then(response => {
          this.users = response.data;
          this.usersDiv = !this.usersDiv;
        })
      }else{
        this.usersDiv = !this.usersDiv;
      }
    },
    getSeekers: function() {
      if(this.seekersDiv){
        this.seekersDiv = false;
      }else if (this.seekers.length<1){
        axios.get('/portal/seekers').then(response => {
          this.seekers = response.data;
          this.seekersDiv = !this.seekersDiv;
        })
      }else{
        this.seekersDiv = !this.seekersDiv;
      }
    },
    getOpportunities: function() {
      if(this.opportunityDiv){
        this.opportunityDiv = false;
      }else if (this.opportunities.length<1){
        axios.get('/portal/opportunities').then(response => {
          this.opportunities = response.data;
          this.opportunityDiv = !this.opportunityDiv;
        })
      }else{
        this.opportunityDiv = !this.opportunityDiv;
      }
    },
    getInfo: function() {
      if(this.inquiryDiv){
        this.inquiryDiv = false;
      }else if (this.info_requests.length<1){
        axios.get('/portal/info_requests').then(response => {
          this.info_requests = response.data;
          this.inquiryDiv = !this.inquiryDiv;
        })
      }else{
        this.inquiryDiv = !this.inquiryDiv;
      }
    }
  },
  data() {
    return {
      msg: 'Test message',
      usersDiv: false,
      seekersDiv: false,
      opportunityDiv: false,
      inquiryDiv: false,
      users:[],
      seekers:[],
      opportunities:[],
      info_requests:[]
    }
  },
  created() {
    if (!this.$auth.check()) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

table {
  border: 1px solid black;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}



td {
  border: 1px solid black;
  padding: 0px;
}

hr {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}
#greenLine {
  width: 95%;
  height: 7px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 20px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
}
#delete {
  padding: 5px;
  width: 100px;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  font-size: 10px;
  background: red;
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
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

.User {
  background: #2d3e49;
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  min-height: 600px;
}
#pageHolder {
  background-color: white;
  width: 75%;
  opacity: .8;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  padding-top: 30px;
  padding-bottom: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
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

@keyframes slide-out {
  from {
    transform: translateY(0)
  }
  to {
      transform: translateY(30px)
  }
}
</style>
