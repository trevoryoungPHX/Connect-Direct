<template>
  <div class="seekerPage">
    <UserNav></UserNav>
    <div class="wrapper">
      <nav class="main-nav">
        <div id ="main-navHolder">
          <p id="welcomeName">Welcome,<br /> {{userName}}!</p>
          <div id="greenLine"></div>
            <div id = "menu">
              <a><router-link id="menuLink" to="/seeker-profile" exact>Your Profile<br />
              <img height="40px"src="../assets/profile.png" /></router-link></a><br /><br />
              <a id="menuLink" @click="logout">Log Out<br />
              <img height="40px"src="../assets/left.png" /></a><br />
            </div>
            <div id="greenLine"></div>
          <form id="searchForm">
              <legend id="filterTypeTitle">Search Your Posts <img height="15px"src="../assets/searchwhite.png" /></legend>
              <input type="search" v-model="search" placeholder="Title or Description" id="input"><br />
          </form>
          <br />
            <hr />
          <br />
          <fieldset>
              <legend id="filterTypeTitle">Filter By Location <img height="15px"src="../assets/locationwhite.png" /></legend>
              <input v-model="searchCity" type="search" placeholder="'85251' or 'Scottsdale'" id="input" name=""><br />
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
        <div id="newPost">
          <img id="cactus" src="../assets/cactus.png" />
          <div id="formHolder">
            <h1 id="postCategory">Choose Date Options</h1><br />
            <select id="categories" name="parent" class="form-control" v-model="selected" required>
              <option disabled selected>Select An Option</option>
              <option value="item0">Ongoing</option>
              <option value="item1">Date & Time</option>
              <option value="item2">Date Range</option>
            </select>
            <form v-if="selected === 'item0'" @submit.prevent="submitPostOngoing">
            <div id="category">
              <label for="categories">Category:</label>
              <select id="categories" v-model="category" name="category" required>
                <option value="Select Option" selected disabled>Select an Option</option>
                <option value="Classroom Speaker">Classroom Speaker</option>
                <option value="Company Tour">Company Tour</option>
                <option value="Competition Judge">Competition Judge</option>
                <option value="Conference Speaker">Conference Speaker</option>
                <option value="Job Shadowing">Job Shadowing</option>
                <option value="Materials & Equipment">Materials & Equipment</option>
                <option value="Mentorship">Mentorship</option>
                <option value="Mock Interviews">Mock Interviews</option>
                <option value="Panelist">Panelist</option>
                <option value="Project Review">Project Review</option>
                <option value="Workshop Presenter">Workshop Presenter</option>
              </select>
            </div>
                  <label for="title">Title:</label><br />
                  <input id="input3" v-model="title" type="text" name="title" required><br />
                  <label for="description">Description:</label>
                  <textarea id="differentShadow" v-model="description" name="description" required></textarea>
                  <label for="website_url">Website URL:</label>
                  <input id="input2" type="text" v-model="website_url" name="website_url" required><br />
                  <label for="location_name">Location Name:</label>
                  <input id="input2" type="text" v-model="location_name" name="location_name" required><br />
                  <label for="address">Address:</label>
                  <input id="input2" type="text" v-model="address" name="address" required><br />
                  <label for="city">City:</label>
                  <input id="input2" type="text" v-model="city" name="city" required><br />
                  <label for="state">State:</label>
                  <input id="input2" type="text" v-model="state" name="state" required><br />
                  <label for="zip">Zip:</label>
                  <input id="input2" type="text" v-model="zip" name="zip" required>
              <button type="submit" id="filterButton2">Submit</button><br /><br />
              <span id = "error" v-if="msg">{{msg}}</span><br /><br />
            </form>

              <form v-if="selected === 'item2'" @submit.prevent="submitPostRange">
              <div>
                <div id="dateRange">
                  <label for="start_date">Start Date:</label>
                  <input id="input4" v-model="start_date" name="start_date" type="date">
                  <label for="end_date">End Date:</label>
                  <input id="input4" v-model="end_date" name="end_date" type="date">
                </div>
              </div>
              <div id="category">
                <label for="categories">Category:</label>
                <select id="categories" v-model="category" name="categories" required>
                  <option value="Select Option" selected disabled>Select an Option</option>
                  <option value="Classroom Speaker">Classroom Speaker</option>
                  <option value="Company Tour">Company Tour</option>
                  <option value="Competition Judge">Competition Judge</option>
                  <option value="Conference Speaker">Conference Speaker</option>
                  <option value="Job Shadowing">Job Shadowing</option>
                  <option value="Materials & Equipment">Materials & Equipment</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Mock Interviews">Mock Interviews</option>
                  <option value="Panelist">Panelist</option>
                  <option value="Project Review">Project Review</option>
                  <option value="Workshop Presenter">Workshop Presenter</option>
                </select>
              </div>
                    <label for="title">Title:</label><br />
                    <input id="input3" v-model="title" type="text" name="title" required><br />
                    <label for="description">Description:</label>
                    <textarea id="differentShadow" v-model="description" name="description" required></textarea>
                    <label for="website_url">Website URL:</label>
                    <input id="input2" type="text" v-model="website_url" name="website_url" required><br />
                    <label for="location_name">Location Name:</label>
                    <input id="input2" type="text" v-model="location_name" name="location_name" required><br />
                    <label for="address">Address:</label>
                    <input id="input2" type="text" v-model="address" name="address" required><br />
                    <label for="city">City:</label>
                    <input id="input2" type="text" v-model="city" name="city" required><br />
                    <label for="state">State:</label>
                    <input id="input2" type="text" v-model="state" name="state" required><br />
                    <label for="zip">Zip:</label>
                    <input id="input2" type="text" v-model="zip" name="zip" required>
                  <button type="submit" id="filterButton2">Submit</button><br /><br />
                  <span id = "error" v-if="msg">{{msg}}</span><br /><br />
              </form>

            <form v-if="selected === 'item1'" @submit.prevent="submitPostTime">
            <div>
              <div id="singleDate">
                <label for="start_date">Date:</label>
                <input id="input4" v-model="start_date" name="start_date" type="date">
                <label for="start_time">Start Time:</label>
                <input id="input4" v-model="start_time" name="start_time" type="time">
                <label for="start_time">End Time:</label>
                <input id="input4" v-model="end_time" name="end_time" type="time">
              </div>
            </div>
              <div id="category">
                <label for="categories">Category:</label>
                <select id="categories" v-model="category" name="categories" required>
                  <option value="Select Option" selected disabled>Select an Option</option>
                  <option value="Classroom Speaker">Classroom Speaker</option>
                  <option value="Company Tour">Company Tour</option>
                  <option value="Competition Judge">Competition Judge</option>
                  <option value="Conference Speaker">Conference Speaker</option>
                  <option value="Job Shadowing">Job Shadowing</option>
                  <option value="Materials & Equipment">Materials & Equipment</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Mock Interviews">Mock Interviews</option>
                  <option value="Panelist">Panelist</option>
                  <option value="Project Review">Project Review</option>
                  <option value="Workshop Presenter">Workshop Presenter</option>
                </select>
              </div>
                    <label for="title">Title:</label><br />
                    <input id="input3" v-model="title" type="text" name="title" required><br />
                    <label for="description">Description:</label>
                    <textarea id="differentShadow" v-model="description" name="description" required></textarea>
                    <label for="website_url">Website URL:</label>
                    <input id="input2" type="text" v-model="website_url" name="website_url" required><br />
                    <label for="location_name">Location Name:</label>
                    <input id="input2" type="text" v-model="location_name" name="location_name" required><br />
                    <label for="address">Address:</label>
                    <input id="input2" type="text" v-model="address" name="address" required><br />
                    <label for="city">City:</label>
                    <input id="input2" type="text" v-model="city" name="city" required><br />
                    <label for="state">State:</label>
                    <input id="input2" type="text" v-model="state" name="state" required><br />
                    <label for="zip">Zip:</label>
                    <input id="input2" type="text" v-model="zip" name="zip" required>
                    <button type="submit" id="filterButton2">Submit</button><br /><br />
                    <span id = "error" v-if="msg">{{msg}}</span><br /><br />
            </form>

          </div>
        </div>
        <img width="96.5%" id="imageHeader" src="../assets/posts.png" />
          <div id="opportunityOverflow">
            <div v-for="info in filteredList">
            <div id="opportunityHolder">
              <div id = 'whiteBackground'>
                <h1 id="postTitle"><span id="postCategory">{{info.category}}</span><br /><br /> {{info.title}}</h1>
                <hr />
                <div id="section1">
                  <p id="postInfo">Date Posted: {{newStartDate(info.created_at)}}</p>
                  <p id="postDescription">Description: {{info.description}}</p>
                  <p id="postInfo"><a v-bind:href="info.website_url">Visit Website</a></p>
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
                  <p id="postLocation">Location: {{info.location_name}}<br /> {{info.address}} <br /> {{info.city}}, {{info.state}}, {{info.zip}}</p>
                </div>
              <button id="delete" v-on:click="confirmDelete = !confirmDelete">Delete Post</button><br />
              <transition name="slide">
                <div id="confirmDelete" v-if="confirmDelete">
                  <br />
                  Are you sure you want to delete this post?<br />
                  <button id="yes" @click="deletePost(info.id)">Yes</button> <button id="no" v-on:click="confirmDelete = !confirmDelete">No</button>
                </div>
              </transition>
              <button id="sendMessage" v-on:click="requestInfo = !requestInfo" >View Inquiries <img height="12px"src="../assets/arrowicon.png" /></button>
              <div v-for="mssg in info.messages">
              <transition name="slide">
                <div id = "requestInfo" v-if="requestInfo">
                  <p id="inquiryHeader">From: {{mssg.first_name}} {{mssg.last_name}} - {{mssg.job_title}} at {{mssg.company_name}}</p>
                  <p id="smallText">Date: {{newStartDate(mssg.created_at)}}  </p>
                  <p id="inquiryDescription">{{mssg.message}}</p>
                  <a v-bind:href='mssg.linkedin_url'><img id="linkedIn" src="../assets/linked.png" /></a>
                  <p id="inquiryDescription2"><a id="mailTag" v-bind:href="`mailto:${mssg.email}`">Send Mail<img id="mail" src="../assets/mailwhite.png" /></a></p>
                </div>
              </transition>
            </div>
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
import axios from 'axios';
import moment from "moment"

export default {
  name: 'SeekerPage',
  components: { UserNav, AppFooter},
  data() {
    return {
      msg: '',
      mssg: '',
      requestInfo: "",
      confirmDelete: false,
      userName: "",
      information:[],
      seekerName: [],
      selected: "",
      start_date: '',
      end_date: '',
      start_time: '',
      end_time: '',
      category: '',
      title: '',
      description: '',
      website_url: '',
      location_name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      search: '',
      searchCity: '',
      searchCategory: []
    }
  },
  computed: {
    filteredList() {
      let searchfilter = this.information.filter(posts => {
        let title = posts.title.toLowerCase()
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
      submitPostOngoing() {
        if(this.website_url.slice(0,7)!=="http://"){
          this.website_url = "http://"+this.website_url;
        }
        let token = localStorage.getItem('usertoken');
        axios.post(`/opportunities?token=${token}`, {category:this.category, title:this.title, description:this.description, website_url:this.website_url, location_name:this.location_name, address:this.address, city:this.city, state:this.state, zip:this.zip}).then(response => {
          this.information = response.data.opportunities;
          this.msg= response.data.msg
        })
      },
      submitPostRange() {
        if(this.website_url.slice(0,7)!=="http://"){
          this.website_url = "http://"+this.website_url;
        }
        let token = localStorage.getItem('usertoken');
        axios.post(`/opportunities?token=${token}`, {start_date:this.start_date, end_date:this.end_date, category:this.category, title:this.title, description:this.description, website_url:this.website_url, location_name:this.location_name, address:this.address, city:this.city, state:this.state, zip:this.zip}).then(response => {
          this.information = response.data.opportunities;
          this.msg= response.data.msg
        })
      },
      submitPostTime() {
        if(this.website_url.slice(0,7)!=="http://"){
          this.website_url = "http://"+this.website_url;
        }
        let token = localStorage.getItem('usertoken');
        axios.post(`/opportunities?token=${token}`, {start_date:this.start_date, start_time:this.start_time, end_time:this.end_time, category:this.category, title:this.title, description:this.description, website_url:this.website_url, location_name:this.location_name, address:this.address, city:this.city, state:this.state, zip:this.zip}).then(response => {
          this.information = response.data.opportunities;
          this.msg= response.data.msg
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
    getSeekerPosts: function() {
      let token = localStorage.getItem('usertoken');
        axios.get('/posts/getone?token='+token).then(response => {
          this.information = response.data ;
        })
      },
    deletePost: function(id) {
      let token = localStorage.getItem('usertoken');
        axios.delete(`/opportunities/${id}/?token=`+token).then(response => {
          this.information = response.data;
        })
      },
      getSeekerName: function() {
        let token = localStorage.getItem('usertoken');
        axios.get(`/seekerInfo?token=${token}`).then(response => {
          this.userName = response.data.first_name ;
        })
      }
      },
    created(){
    this.getSeekerPosts(),
    this.getSeekerName()
 }
}

</script>

<style scoped>

#dateOptions {
  text-align: center;
}

#error {
  color: black;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
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


#yes {
  padding: 5px;
  width: 90px;
  margin-top: 5px;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  font-size: 15px;
  background: red;
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#no {
  padding: 5px;
  width: 90px;
  margin-top: 5px;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  font-size: 15px;
  background-color: #2d3e49;
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#cactus {
  width: 100%;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  border-radius: 6px;
  margin-bottom: 15px;
}

#searchForm {
  color: white;
}
#categories {
  font-family: 'Questrial', sans-serif;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  margin-bottom: 10px;
}


#newPostHeader {
  color: black;
  font-size: 35px;
  padding: 20px;
  text-align: center;
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

#formHolder {
  width: 100%;
  background: #FDF1D7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FDF1D7, #fce4b5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FDF1D7,  #fce4b5);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  height: 100%;
  border-radius: 6px;
  text-align: LEFT;
  padding: 15px;
}

#newPost {
  padding: 15px;
  background-color: #2d3e49;
  margin-bottom: 20px;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  text-align: center;
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
  padding: 10px;
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
  width: 100%
}



form {
  font-family: 'Questrial', sans-serif;
}

#input {
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


.seekerPage {
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
#input2 {
  font-family: 'Questrial', sans-serif;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;

  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  height: 20px;
  border-radius: 3px;
  color: black;
  outline: none;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#input3 {
  font-family: 'Questrial', sans-serif;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  height: 20px;
  border-radius: 3px;
  color: black;
  outline: none;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#input4 {
  font-family: 'Questrial', sans-serif;
  width: 170px;
  padding: 15px;
  margin-bottom: 10px;

  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
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

#filterButton2 {
  padding: 14px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
    grid-template-columns: 1fr 4fr;
    grid-template-areas:
      "nav     content"
      "nav     content"
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
          from { opacity: .7; }
          to   { opacity: 1; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: .7; }
          to   { opacity: 1; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: .7; }
          to   { opacity: 1; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: .7; }
          to   { opacity: 1; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: .7; }
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


#delete {
  padding: 5px;
  width: 90px;
  margin-top: 5px;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  font-size: 15px;
  background: red;
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#linkedIn {
  height: 20px;
  margin-bottom: -2.5px;
  padding-left: 3px;
}

#mail {
  height: 20px;
  margin-bottom: -1.0px;
  padding-left: 6px;
}
#inquiryHeader{
  font-weight: bold;
  margin-bottom: 7px;
  font-size: 20px;
}

#smallText {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
}

#inquiryDescription{
  padding: 0;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  color: black;
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ece9e6, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ece9e6, #ffffff);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  background: white;
}

#inquiryDescription2{
  padding-right: 10;
  font-size: 18px;
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
  padding: 10px;
  text-align: left;
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
  font-size: 20px;
  border-radius: 5px;
  color: black;
  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  outline: none;
  padding: 10PX;
}

#differentShadow{
  width:100%;
  height: 100px;
  font-size: 20px;
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

#mailTag {
  color: white;
  font-weight: bolder;
  margin-left: 1px;
  margin-right: 2px;
}

</style>
