<template>
  <div class="seekerPage">
    <UserNav></UserNav>
    <div class="wrapper">
      <nav class="main-nav">
        <div id ="main-navHolder">
          <p id="welcomeName">Welcome, Trevor!</p>
            <div id = "menu">
              <a><router-link id="menuLink" to="/seeker-profile" exact>Your Profile</router-link></a><br /><br />
              <a id="menuLink" @click="logout">Log Out</a><br /><br />
              <a id="menuLink" href="">Invite</a><br />
            </div>
          <br />
          <fieldset>
              <legend id="filterTypeTitle">Search Your Posts <img height="15px"src="../assets/searchwhite.png" /></legend>
              <input type="search" placeholder="'Health Care' or 'Engineering'" id="input" name=""><br />
              <button id="filterButton">Find</button>
          </fieldset>
          <br />
          <hr />
          <br />
          <fieldset>
              <legend id="filterTypeTitle">Filter By Location <img height="15px"src="../assets/locationwhite.png" /></legend>
              <input type="search" placeholder="'85251' or 'Scottsdale'" id="input" name=""><br />
              <button id="filterButton">Locate</button>
          </fieldset>
          <br />
          <hr />
          <br />
          <br /><h3 id="filterTypeTitle2">Filter By Type <img height="15px"src="../assets/typewhite.png" /></h3>
          <div class="control-group">
            <label class="control control-checkbox">
                Classroom Speaker
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Company Tour
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Competition Judge
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Conference Speaker
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Job Shadowing
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
              Materials & Equiptment
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Mentorship
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Mock Interviewing
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
                Panelist
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
              Project Review
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label>
            <label class="control control-checkbox">
              Workshop Presenter
                    <input type="checkbox" name="" value="" />
                <div class="control_indicator"></div>
            </label><br />
        </div>
        </div>
      </nav>
      <article class="content">
        <div id="newPost">
          <div id="formHolder">
            <h4 id="newPostHeader">New Post</h4>
            <form>
              <form>
                  <h3>Choose a Date Option</h3><br />
                  <input type="radio" name="Date" id="radioButton" checked> <label for="ongoing">Ongoing/Flexible</label><br /><br />
                  <input type="radio" v-model="x" name="Date" id="radioButton"> <label for="singleDate">Date and Time</label><br /><br />
                  <input type="radio" v-model="x" name="Date" id="radioButton"> <label for="singleDate">Date Range</label><br /><br />
              </form>
              <div id="singleDate" v-show="x === 'singleDate'">
                <label for="start_date">Date:</label><br />
                <input id="input2" name="start_date" type="date"><br />
                <label for="start_time">Start Time:</label><br />
                <input id="input2" name="start_time" type="time"><br />
                <label for="start_time">End Time:</label><br />
                <input id="input2" name="end_time" type="time"><br />
              </div>
              <div id="dateRange" v-show="x === 'dateRange'">
                <label for="start_date">Start Date:</label><br />
                <input id="input2" name="start_date" type="date"><br />
                <label for="end_date">End Date:</label><br />
                <input id="input2" name="end_date" type="date"><br />
              </div>
                <div>
                    <label for="title">Title:</label><br />
                    <input id="input2" type="text" name="title" required>
                </div><br />
                <div>
                    <label for="description">Description:</label><br />
                    <textarea id="description" name="description" required></textarea>
                </div><br />
                <div>
                    <label for="location_name">Location Name:</label><br />
                    <input id="input2" type="text" name="location_name" required>
                </div><br />
                <div>
                    <label for="address">Address:</label><br />
                    <input id="input2" type="text" name="address" required>
                </div><br />
                <div>
                    <label for="city">City:</label><br />
                    <input id="input2" type="text" name="city" required>
                </div><br />
                <div>
                    <label for="state">State:</label><br />
                    <input id="input2" type="text" name="state" required>
                </div><br />
                <div>
                    <label for="zip">Zip:</label><br />
                    <input id="input2" type="text" name="zip" required>
                </div><br />
                <button type="submit" id="filterButton2">Submit</button>
            </form>
          </div>
        </div>
        <img width="100%" id="imageHeader" src="../assets/arrows2.png" />
          <div id="opportunityOverflow">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          </div>
      </article>
    </div>
    <AppFooter></AppFooter>  </div>
</template>

<script>
import UserNav from './UserNav.vue'
import AppFooter from './AppFooter.vue'
import Post from './Post.vue'
import axios from 'axios';

export default {
  name: 'SeekerPage',
  components: { UserNav, AppFooter, Post},
  data() {
    return {
      msg: 'Test message'
    }
  },
  methods:{
    logout: function(){
      localStorage.removeItem('usertoken');
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
#radioButton {
  border: 0;
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

#input2 {
  font-family: 'Questrial', sans-serif;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
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
    grid-template-columns: 2fr 3fr;
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
    grid-template-columns: 2fr 3fr 1fr;
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
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Firefox < 16 */
      @-moz-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Safari, Chrome and Opera > 12.1 */
      @-webkit-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Internet Explorer */
      @-ms-keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
      }

      /* Opera < 12.1 */
      @-o-keyframes fadein {
          from { opacity: 0; }
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

</style>
