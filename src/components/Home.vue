<template>
  <div id="background">
    <div class="home">
      <div class="splash-container">
        <div class="splash">
          <h1 id="about">Welcome to Connect Direct!</h1><br />
          <router-link to="/login" exact>  <button id="learnMore3">Get Started</button></router-link>
          <div id="learnMore">Learn More<img id="arrow" src="../assets/down.png" /></div>
        </div>
    </div>
    </div>
    <div id = "siteDescriptionHolder">
      <div id = "siteDescription">
        <img height="100vw" src="../assets/test direct connect logo.png" /><br /><br />
        <p id="appName"> A place for professionals to connect with organizations, educators & associations looking for professional development opportunities.</p><br /><p id="descriptionText"> Whether you are a school teacher looking to expose your students to a new career path, an event planner looking for a conference speaker or workshop presenter, or a business organization looking for someone to provide company tours or serve on a business panel - Connect Direct is the best place to connect directly with professionals eager and willing to give their time and share their expertise. <br /><br /><span id="appName">Start finding new connections today!</span></p>
        <br />
        <router-link to="/login"> <button id="learnMore2">User Log-In</button></router-link><br /><br />
        <br />
        <router-link to="/seeker-splash"> <button id="learnMore2">Organization Log-In</button></router-link><br />
        <br />
        <p id="descriptionText">Classroom Speakers</p>
        <p id="descriptionText">Company Tours</p>
        <p id="descriptionText">Competition Judges</p>
        <p id="descriptionText">Conference Speakers</p>
        <p id="descriptionText">Job Shadowing</p>
        <p id="descriptionText">Materials & Equipment</p>
        <p id="descriptionText">Mentorship Opportunities</p>
        <p id="descriptionText">Mock Interviews</p>
        <p id="descriptionText">Panelists</p>
        <p id="descriptionText">Project Reviews</p>
        <p id="descriptionText">Workshop Presenters</p><br />
      </div>
      <iframe id="youtubeVid" src="https://www.youtube.com/embed/5I_IgxXYHnw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div id="footer">
      <p>&copy; 2018 Connect Direct - IN DEVELOPMENT MODE! Please contact trevoryoung.web@gmail.com with any inquiries.</p>
      <p>Developed by <a id = "myWebsite" target="_blank" href="http://trevdev.co">trevdev.co</a></p>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Splash',
  data() {
    return {
    }
  }
}
</script>

<style scoped>

#youtubeVid {
  width: 78.2%;
  height: 45vw;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.75);
  border: 3px solid black;
}

#about {
  margin-top: 10px;
  font-size: 30px;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
}

#getConnected {
  font-size: 50px;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  margin-bottom: 20px;
}

#myWebsite {
  color: white;
}

.home {
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

#appName {
  font-weight: bolder;
  font-size: 30px;
}
#descriptionText {
  font-size: 20px;
}
#siteDescriptionHolder {
  width: 100%;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;
  border-top: 20px solid #2d3e49;
  background-image: url("../assets/cactus3.jpeg");
  background-size: cover;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  padding:60px;
}


#siteDescription {
  width: 80%;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  opacity: .7;
  padding: 20px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#arrow {
  height:25px;
  padding-left: 5px;
  margin-top: 5px;
}
.splash-container {
  background-image: url(../assets/home.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 750px;
  top: 0;
  left: 0;
  padding-top: 20px;
}

#learnMore {
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  padding-bottom: 20px;
  margin-top: 270px;
  width: 250px;
  font-family: 'Questrial', sans-serif;
  font-size: 25px;

  color: white;
  border-radius: 3px;

}

#learnMore2 {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: 70px;
  font-size: 20px;
  font-family: 'Questrial', sans-serif;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -webkit-animation: pulsate 3s ease-out;
-webkit-animation-iteration-count: infinite;
}

#learnMore3 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 205px;
  padding: 20px;
  margin-bottom: 20px;
  width: 300px;
  font-family: 'Questrial', sans-serif;
  font-size: 25px;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -webkit-animation: pulsate 3s ease-out;
-webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes pulsate {
0% {
    opacity: 0.9;
}
50% {
    opacity: 1.0;
}
100% {
    opacity: 0.9;
}
}


.content-wrapper {
    top: 100%;
    width: 100%;
    min-height: 12%;
    background: white;

}

.content {
  height: AUTO;
}

#footer {
  background: #2d3e49;
  color: white;
  height: 100px;
  width: 100%;
  padding-top: 10px;
  z-index: 200;
}

</style>
