<template>
  <div>
  <div id="opportunityHolder">
    <div id = 'whiteBackground'>
      <h1 id="postTitle"><span id="postCategory">INSERT CATEGORY:</span><br /><br /> 5th grade teacher seeking software engineer for classroom presentation</h1>
      <hr />
      <div id="section1">
        <p id="postInfo">Post By: Test Seeker Name, Test Job Title, Test Organization Name on Date Posted</p>
        <p id="postDescription">Test Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p id="postDates">Placeholder for 1 of three graphics showing time and date, or ongoing</p>
      </div>
      <div id="section2">
        <p id="postLocation">Location: Test Location Name <br /> Address Line 1 <br /> City, State, Zip</p>
        <p id="postWebsite">More Info: www.testurl.com</p>
      </div>
    <button id="sendMessage" v-on:click="requestInfo = !requestInfo" >Connect <img height="12px"src="../assets/arrowicon.png" /></button>
    <transition name="slide">
      <div id = "requestInfo" v-if="requestInfo">
        <form>
          <textarea width="100%"></textarea><br />
          <button id="sendMessage" type="submit">Send Message <img height="10px"src="../assets/mailwhite.png" /></button><br />
          <br /><p><b>Once sent, your contact information will be shared with the opportunity organizer.<br />Connect Direct will only share your contact information with those you have reached out to.</b> </p>
        </form>
      </div>
    </transition>
  </div>
</div>
<div id="greenLine"></div>
  </div>
</template>

<script>

export default {
  name: 'Opportunity',
  data() {
    return {
      requestInfo: ""
    }
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
  margin-bottom: 25px;
  border-radius: 20px;
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
  color: black;;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  background: white;
  font-size: 20px;
}

#postWebsite {
  font-style: italic;
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
  background: white;
  margin: 0px;
  padding: 20px;
  border-radius: 5px;
}

textarea {
  width:100%;
  height: 100px;
  font-size: 20px;
  border-radius: 5px;
  background: white;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #eef2f3, white);
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
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
