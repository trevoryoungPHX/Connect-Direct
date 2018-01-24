<template>
  <div class="User">
    <UserNav></UserNav>
    <div class="wrapper">
      <nav class="main-nav">
        <p id="welcomeName">Welcome, Trevor!</p>
        <form>
          <div>
            <div id="filterTypeTitle">Filter By Location</div><br />
            <input type="search" placeholder="'85251' or 'Scottsdale'" id="" name="">
            <button>Search</button>
          </div><br />
        </form>
        <fieldset>
          <legend id="filterTypeTitle">Filter By Type</legend><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Classroom Speaker</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Company Tour</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Competition Judge</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Conference Speaker</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Job Shadowing</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Materials & Equiptment</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Mentorship</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Mock Interviewing</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Panelist</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Project Review</label>
          </div><br />
          <div>
            <input type="checkbox" id="" name="" value="">
            <label for="">Workshop Presenter</label>
          </div><br />
        </fieldset>
      </nav>
      <article class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </article>
      <footer class="main-footer">FOOTER</footer>
    </div>
  </div>
</template>

<script>

import UserNav from './UserNav.vue'

export default {
  name: 'User',
  components: { UserNav },
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

form {
  font-family: 'Questrial', sans-serif;
}

input {
  font-family: 'Questrial', sans-serif;
}


#filterTypeTitle {
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
}
#welcomeName {
  font-weight: bold;
  font-size: 26px;
  text-decoration: underline;
}

fieldset {
  text-align: left;
}

* {box-sizing: border-box;}

    .wrapper {
      background-color: #2d3e49;
        margin-left: 10%;
        margin-right:10%;
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
}
.main-nav {
  grid-area: nav;
  min-width: 200px;
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
  grid-gap: 5px;
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
