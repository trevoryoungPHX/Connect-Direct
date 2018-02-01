<template>
  <div class="User">
    <UserNav></UserNav>
    <div class="wrapper">
      <nav class="main-nav">
        <div id ="main-navHolder">
          <p id="welcomeName">Welcome,<br /> {{userName}}!</p>
          <div id="greenLine"></div>
            <div id = "menu">
              <a><router-link id="menuLink" to="/user-profile" exact>Your Profile<br  />
              <img height="40px"src="../assets/profile.png" /></router-link></a><br /><br />
              <a id="menuLink" @click="logout">Log Out<br />
              <img height="40px"src="../assets/left.png" /></a><br />
            </div>
            <div id="greenLine"></div>

          <fieldset>
              <legend id="filterTypeTitle">Search <img height="15px"src="../assets/searchwhite.png" /></legend>
              <input type="search" v-model="search" placeholder="Title or Description" id="search" name=""><br />
          </fieldset>
          <br />
            <hr />
          <br />
          <fieldset>
              <legend id="filterTypeTitle">Filter By Location <img height="15px"src="../assets/locationwhite.png" /></legend>
              <input type="search" v-model="searchCity" placeholder="'85251' or 'Scottsdale'" id="search" name=""><br />
          </fieldset>
          <br />
            <hr />
          <br />
          <br /><h3 id="filterTypeTitle2">Filter By Type <img height="15px"src="../assets/typewhite.png" /></h3>
          <div class="control-group">
            <label class="control control-checkbox">
                Classroom Speaker
                    <input type="checkbox" value="Classroom Speaker" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Company Tour
                    <input type="checkbox" value="Company Tour" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Competition Judge
                    <input type="checkbox" value="Competition Judge" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Conference Speaker
                    <input type="checkbox" value="Conference Speaker" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Job Shadowing
                    <input type="checkbox" value="Job Shadowing" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
              Materials & Equipment
                    <input type="checkbox" value="Materials & Equipment" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Mentorship
                    <input type="checkbox" value="Mentorship" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Mock Interviews
                    <input type="checkbox" value="Mock Interview" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Panelist
                    <input type="checkbox" value="Panelist" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
              Project Review
                    <input type="checkbox" value="Project Review" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
              Workshop Presenter
                    <input type="checkbox" value="Workshop Presenter" name="" v-model="searchCategory" />
                <div class="control_indicator"></div>
            </label><br />
        </div>
        </div>
      </nav>
      <article class="content">
        <img width="100%" id="imageHeader" src="../assets/opportunities.png" />
          <div id="opportunityOverflow">
            <div v-for="info in filteredList">  
            <div id="opportunityHolder">
              <div id = 'whiteBackground'>
                <h1 id="postTitle"><span id="postCategory">{{info.category}}</span><br /><br />{{info.title}}</h1>
                <hr />
                <div id="section1">
                  <p id="postInfo">Post By: {{info.first_name}} {{info.last_name}}, {{info.job_title}} at {{info.organization_name}} on {{newStartDate(info.created_at)}}</p>
                  <p id="postDescription">{{info.description}}</p>
                  <p id="postInfoLink"><a v-bind:href="info.website_url">Visit Website</a></p>
                  <div v-if="info.start_date && info.end_date">
                    <p id="postDates">{{newStartDate(info.start_date)}} - {{newStartDate(info.end_date)}}</p>
                  </div>
                  <div v-if="!info.start_date && !info.end_date">
                    <p id="postDates">Ongoing - We're Flexible!</p>
                  </div>
                  <div v-if="info.start_time">
                    <p id="postDates">{{newStartDate(info.start_date)}} from {{newStartTime(`2018-01-30T${info.start_time}`)}} to {{newStartTime(`2018-01-30T${info.end_time}`)}}</p>
                  </div>
                </div>
                <div id="section2">
                  <p id="postLocation">{{info.location_name}}<br /> {{info.address}} <br /> {{info.city}}, {{info.state}}, {{info.zip}}</p>
                </div>
              <button id="sendMessage" v-on:click="requestInfo = !requestInfo" >Connect <img height="12px"src="../assets/arrowicon.png" /></button>
              <transition name="slide">
                <div id = "requestInfo" v-if="requestInfo">
                  <form @submit.prevent="postInfo(info.op_id)">
                    <textarea width="100%" v-model="message"></textarea><br />
                    <button id="sendMessage" type="submit">Send Message <img height="10px"src="../assets/mailwhite.png" /></button><br />
                    <br /><p><b>Once sent, your contact information will be shared with the opportunity organizer.<br />Connect Direct will only share your contact information with those you have reached out to.</b> </p>
                  </form>
                </div>
              </transition>
            </div>
            </div>
            <div id="greenLine"></div>
          </div>
          </div>
      </article>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import UserNav from './UserNav.vue'
import AppFooter from './AppFooter.vue'
import axios from 'axios'
import moment from "moment"


export default {
  name: 'User',
  components: { UserNav, AppFooter },
  data() {
    return {
      msg: 'Test message',
      menu: true,
      information:[],
      userName: [],
      requestInfo:'',
      message: "",
      search: '',
      searchCity: '',
      searchCategory: []
    }
  },
  computed: {
    filteredList() {
      let searchfilter = this.information.filter(posts => {
        let title = posts.title.toLowerCase()
        let description = posts.description.toLowerCase()
        let search = this.search.toLowerCase()
        return title.includes(search) || description.includes(search)
      })

      let zipFilter = searchfilter.filter(posts => {
        let zip = posts.zip.toString()
        let city = posts.city.toLowerCase()
        let searchCity = this.searchCity.toLowerCase()
        return city.includes(searchCity) || zip.includes(searchCity)
      })

      return zipFilter.filter(posts => {
        if(this.searchCategory.length === 0){
          return posts
        }else{
          return this.searchCategory.includes(posts.category)
        }

    })
  }
  },
  methods:{
    postInfo(id) {
      let token = localStorage.getItem('usertoken');
      axios.post(`/postInfo?token=${token}`, {message:this.message, opportunity_id:id}).then(response => {
        this.message = "";
        this.requestInfo = false;
        this.info = response.data;
      })
    },
    newStartDate: function(date) {
      return moment(date).format('LL');
    },
    newStartTime: function(time) {
      return moment(time).format('LT');
    },
    logout: function(){
      localStorage.removeItem('usertoken');
      this.$router.push('/')
    },
    getInfo: function() {
      let token = localStorage.getItem('usertoken');
        axios.get(`/allOpportunities?token=${token}`).then(response => {
          this.information = response.data ;
        })
      },
    getUserName: function() {
      let token = localStorage.getItem('usertoken');
      axios.get(`/userInfo?token=${token}`).then(response => {
        this.userName = response.data.first_name ;
      })
    },
    moment: function () {
      return moment();
      }
    },
    created() {
      this.getInfo(),
      this.getUserName()
    }
  }

</script>

<style scoped>
#greenLine {
  width: 90%;
  height: 7px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
}

#menuLink {
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

#menuLink:hover {
  color: #1D976C;
}

#opportunityOverflow {
  background: #2d3e49;
  border-radius: 6px;
  padding-top: 20px;
  max-height: 1200px;
  overflow-y: scroll;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);

}

#menu {
  height: auto;
  margin: 10px;
  font-size: 20px;
  padding: 20px;
  border-radius: 6px;
  color: white;
  font-size: 20px;
}



#headshot {
  border-radius: 300px;
  width: 70%;
  margin-left:auto;
  margin-right: auto;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  border: 2px solid black;
}


#imageHeader{
  border-radius:5px;
  margin-bottom: 15px;
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
}



form {
  font-family: 'Questrial', sans-serif;
}

input {
  font-family: 'Questrial', sans-serif;
  width: 90%;
  text-align: center;
  margin-bottom: 10px;
  background-color: white;
  height: 20px;
  border-radius: 3px;
  color: black;
  outline: none;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#filterButton {
  padding: 4px;
  width: 50%;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  font-size: 15px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border-radius: 3px;

  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}


#filterTypeTitle {
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

#filterTypeTitle2 {
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
  color: white;
  margin-bottom: -10px;
}

#welcomeName {
  font-weight: bold;
  font-size: 30px;
  color: white;
  margin-top: 0px;
  padding-top: 30px;
  text-shadow: .5px .5px 1px rgba(150, 150, 150, 1);

}

fieldset {
  text-align: center;
  color: white;
  border: 0;
}

#fieldset {
  text-align: left;

}

* {box-sizing: border-box;}

    .wrapper {
        margin-left: 10%;
        margin-right:10%;
        margin-top: 20px;
    }

    .wrapper > * {
        padding: 10px;
    }

.main-head {
  grid-area: header;
}

.content {
  grid-area: content;
  min-width: 300px;
}
.main-nav {
  grid-area: nav;
  min-width: 250px;
}

#main-navHolder {
  background-color: #2d3e49;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
.wrapper {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "footer";
}
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "nav     content"
      "nav     content"
      "footer  footer";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "nav    content content"
      "nav    content content"
      "footer footer  footer"
   }
}

.User {
  border-top-left-radius: 30px;
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ece9e6, #ffffff);
  min-height: 800px;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
   -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
     -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;

      }

      @keyframes fadein {
          from { opacity:.7; }
          to   { opacity: 1; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity:.7; }
          to   { opacity: 1; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity:.7; }
          to   { opacity: 1; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity:.7; }
          to   { opacity: 1; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity:.7; }
          to   { opacity: 1; }
      }


/* CHECKBOX */

.control {
    display: block;
    position: relative;
    margin-bottom: 5px;
    margin-top: 30px;
    margin-left: 10px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 15px;
    color: white;
    text-align: left;
    padding-left: 30px;

}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 3px;
}

.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
}

.control input:checked ~ .control_indicator {
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C);
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C);
}


.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-checkbox .control_indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
}


#greenLine {
  width: 90%;
  height: 7px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border-radius: 20px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
}

#postCategory {
  color: #1D976C;
  font-weight: bolder;
}

#postInfo {
  font-weight: bolder;
  font-size: 15px;
}

#postInfoLink {
  font-weight: bolder;
  font-size: 15px;
  color: !important #1D976C;
  font-weight: bolder;
}

#postDescription {
  font-size: 15px;
}

#postDates {
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  color: black;
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ece9e6, #ffffff);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  background: white;
  font-size: 20px;
}

#sendMessage {
  width: 150px;
  margin-top: 15px;
}

#requestInfo {
  margin-top: 20px;
  padding: 20px;
  color: white;
  background: #2d3e49;
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  border-radius: 3px;
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
}

#whiteBackground {
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #ece9e6, #ffffff);
  margin: 0px;
  padding: 20px;
  border-radius: 5px;
}

textarea {
  width:100%;
  height: 100px;
  font-size: 15px;
  border-radius: 5px;
  color: black;
  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  outline: none;
  padding: 10PX;
  text-align: left;
}

#section1 {
    height: auto;
    margin: 10px;
    padding: 20px;
    border-radius: 3px;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    background: #FDF1D7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FDF1D7, #fce4b5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FDF1D7,  #fce4b5);
}

#section2 {
    height: auto;
    width: 70%;
    margin-left: auto;
    color: white;
    margin-right: auto;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: bolder;
    padding-top: 15px;
    padding-bottom: 1px;
    border-radius: 3px;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    background: #2d3e49;
    background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
    background: linear-gradient(to left, #2d3e49, #516f82);
}

#opportunityHolder {
  padding: 10;
  border-radius: 5px;
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  margin-bottom: 30px;
  width: 96%;
  margin-left: auto;
  margin-right: auto;
}

button {
    padding: 10px;
    width: 30%;
    font-family: 'Questrial', sans-serif;
    cursor: pointer;
    font-size: 15px;
    background: #1D976C;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
    border-radius: 3px;
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

@keyframes slide-out {
  from {
    transform: translateY(0)
  }
  to {
      transform: translateY(30px)
  }
}

</style>
