<template>
  <DIV>
    <div class="home">
      <div class="splash-container">
        <div class="splash">
          <img height="150px" src="../assets/test direct connect logo.png" /><br />
          <router-link to="/login" exact>  <button id="learnMore3">Login<img height="20px" src="../assets/arrowicon.png" /></button></router-link>
          <div id="learnMore">Learn More<img id="arrow" src="../assets/down.png" /></div>
        </div>
    </div>
    <div id = "siteDescriptionHolder">
      <div id = "siteDescription">
        <img height="150px" src="../assets/test direct connect logo.png" /><br /><br />
        <p id="appName"> A place for professionals to connect with organizations, educators & associations looking for professional development opportunities.</p> <br /><br /><p id="descriptionText"> Whether you are an elementary school teacher looking to expose your children to a new career path, an event planner looking for a conference speaker or workshop presenter, or a business organization looking for someone to provide company tours or serve on a panel - Connect Direct is the best place to connect directly with professionals eager and willing to give their time and share their expertise. <br /><br /><span id="appName">Start finding new connnctions today!</span></p>
      </div>
    </div>
    <div class="content-wrapper">
        <div class="content">
          <ul class="flex-container">
            <li class="flex-item"><img id="professional" src="../assets/profesional.jpg" /></li>
            <li class="flex-item">
                <ul>
                  <li>Classroom Speakers</li>
                  <li>Company Tours</li>
                  <li>Competition Judges</li>
                  <li>Conference Speakers</li>
                  <li>Job Shadowing</li>
                  <li>Materials & Equiptment</li>
                  <li>Mentorship Opportunities</li>
                  <li>Mock Interviews</li>
                  <li>Panelists</li>
                  <li>Project Reviews</li>
                  <li>Workshop Presenters</li>
                </ul>
            </li>
            <BR />
            <li class="flex-item"><img id="professional" src="../assets/organization2.jpg" /></li>
          </ul>
          <ul class="flex-container">
            <li class="flex-item2"><router-link to="/login"> <button id="learnMore2">User Log-In</button></router-link></li>
            <li class="flex-item2"><img height="150px" src="../assets/test direct connect logo.png" /></li>
            <li class="flex-item2"><router-link to="/seeker-splash"> <button id="learnMore2">Organization Log-In</button></router-link></li>
          </ul>
        </div>
    </div>
    </div>
    <div id="footer">
      <p>&copy; 2018 Connect Direct </p>
      <p>Developed by <a target="_blank" href="http://trevdev.co">trevdev.co</a></p>
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
#appName {
  font-weight: bolder;
  font-style: italic;
  font-size: 20px;
}
#descriptionText {
  font-size: 20px;
}
#siteDescriptionHolder {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background: #2d3e49;
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  padding:20px;
  border-radius: 6px;
  margin-top: 20px;
}

#siteDescription {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: #FDF1D7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FDF1D7, #fce4b5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FDF1D7,  #fce4b5);
  padding: 20px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

#professional {
  height: 100%;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
}

.flex-container {
  padding: 40px;
  margin: 0;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}

.flex-item {
  padding: 10px;
  width: 380px;
  height: 450px;
  margin-top: 10px;
  list-style: none;
  text-align: center;
}

.flex-item > ul {
  list-style-type: none;
  font-size: 20px;
  font-weight: bold;
}

.flex-item > ul > li {
  padding: 10px;
}
.flex-item2 {
  padding: 10px;
  width: 380px;
  height: auto;
  margin-top: 5px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}

#arrow {
  height:25px;
  padding-left: 5px;
  margin-top: 5px;
}
.splash-container {
  background-image: url(../assets/home.png);\
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 800px;
  top: 0;
  left: 0;
  padding-top: 20px;
}

#learnMore {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 50%;
  font-family: 'Questrial', sans-serif;
  font-size: 35px;
  background: #2d3e49;
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  color: white;
  border-radius: 3px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.25);
  -webkit-animation: pulsate 3s ease-out;
-webkit-animation-iteration-count: infinite;
}

#learnMore2 {
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 150px;
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
  margin-top: 180px;
  padding: 20px;
  width: 250px;
  font-family: 'Questrial', sans-serif;
  font-size: 35px;
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
  background: -webkit-linear-gradient(to left, #2d3e49, #516f82);
  background: linear-gradient(to left, #2d3e49, #516f82);
  color: white;
  height: 100px;
  width: 100%;
  padding-top: 10px;
  margin-top: 10px;
  z-index: 200;
}

</style>
