<template>
  <div class="User">
    <UserNav></UserNav>
    <div class="wrapper">
      <nav class="main-nav">
        <div id ="main-navHolder">
          <p id="welcomeName">Welcome,<br /> Trevor!</p>
          <img id ="headshot" src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAsOAAAAJGE0YjUxNTllLTYyYWYtNGE1OS04MWVkLTcyMWI2YjMyZjA3ZA.jpg" /><br /><br />
            <div id = "menu">
              <a href="">Your Profile</a><br />
              <a href="">Log Out</a><br />
              <a href="">Refer a Professional</a><br />
              <a href="">Refer an Organization</a><br />

            </div>
          <br />
          <fieldset>
              <legend id="filterTypeTitle">Search</legend>
              <input type="search" placeholder="'Health Care' or 'Engineering'" id="search" name=""><br />
              <button id="filterButton">Find</button>
          </fieldset>
          <br />
          <hr />
          <br />
          <fieldset>
              <legend id="filterTypeTitle">Filter By Location</legend>
              <input type="search" placeholder="'85251' or 'Scottsdale'" id="search" name=""><br />
              <button id="filterButton">Locate</button>
          </fieldset>
          <br />
          <br />
          <h3 id="filterTypeTitle2">Filter By Type</h3>
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
            </label>
        </div>

        </div>
      </nav>
      <article class="content">
        <img width="100%" id="imageHeader" src="../assets/arrows.png" />
          <div id="opportunityOverflow">
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>
          </div>
      </article>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import UserNav from './UserNav.vue'
import Opportunity from './Opportunity.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'User',
  components: { UserNav, Opportunity, AppFooter },
  data() {
    return {
      msg: 'Test message',
      menu: true,
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
  border: 2px solid black;
  height: auto;
  margin: 10px;
  padding: 20px;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  background: white;  /* fallback for old browsers */
 background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
 background: linear-gradient(to top, #eef2f3, white);
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
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
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
  border: 1.5px solid rgba(0,0,0,0.38);
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
}

#welcomeName {
  font-weight: bold;
  font-size: 26px;
  color: white;
  font-style: italic;
  margin-top: 0px;
  padding-top: 30px;
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
