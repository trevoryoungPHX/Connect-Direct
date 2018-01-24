<template>
  <div class="User">
    <UserNav></UserNav>
    <div class="wrapper">
      <nav class="main-nav">
        <p id="welcomeName">Welcome, Trevor!</p>
        <fieldset>
            <legend id="filterTypeTitle">Search</legend>
            <input type="search" placeholder="'HealthCare' or 'Engineering'" id="" name=""><br />
            <button id="filterButton">Find</button>
        </fieldset>
        <br />
        <fieldset>
            <legend id="filterTypeTitle">Filter By Location</legend>
            <input type="search" placeholder="'85251' or 'Scottsdale'" id="" name=""><br />
            <button id="filterButton">Locate</button>
        </fieldset>
        <br />
        <fieldset id="fieldset">
          <legend id="filterTypeTitle">Filter By Type</legend>
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Classroom Speaker</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Company Tour</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Competition Judge</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Conference Speaker</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Job Shadowing</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Materials & Equiptment</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Mentorship</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Mock Interviewing</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Panelist</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Project Review</label>
          </div><br />
          <div>
            <input type="checkbox" id="checkbox" name="" value="">
            <label for="">Workshop Presenter</label>
          </div><br />
        </fieldset>
      </nav>
      <article class="content">
        <img width="100%" id="imageHeader" src="../assets/arrows.jpg" />
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>
          <Opportunity></Opportunity>

      </article>
      <footer class="main-footer">FOOTER</footer>
    </div>
  </div>
</template>

<script>

import UserNav from './UserNav.vue'
import Opportunity from './Opportunity.vue'

export default {
  name: 'User',
  components: { UserNav, Opportunity },
  data() {
    return {
      msg: 'Test message'
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

#imageHeader{
  border-radius:5px;
  margin-bottom: 15px;
}

#checkbox {
  cursor: pointer;
  width: 15px;
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
  /* border-radius: 2px; */
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
#welcomeName {
  font-weight: bold;
  font-size: 26px;
  font-style: italic;
}

fieldset {
  text-align: center;
}

#fieldset {
  text-align: left;

}

* {box-sizing: border-box;}

    .wrapper {
      background-color: #2d3e49;
        margin-left: 10%;
        margin-right:10%;
        margin-top: 20px;
    }

    .wrapper > * {
        background-color: white;
        padding: 10px;
    }

.main-head {
  grid-area: header;
}

.content {
  grid-area: content;
  min-width: 300px;
  background: white;
}
.main-nav {
  grid-area: nav;
  min-width: 250px;
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
  background-color: #2d3e49;
  border-top-left-radius: 30px;
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

</style>
