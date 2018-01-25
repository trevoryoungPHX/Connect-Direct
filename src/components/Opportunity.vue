<template>
  <div id="opportunityHolder">
    <div id = 'whiteBackground'>
      <p>Placeholder for 1 of three grtaphics showing time and date, or ongoing</p>
      <h1>INSERT CATEGORY: 5th grade teacher seeking software engineer for classroom presentation</h1>
      <hr />
      <div id="section1">
        <p>Post By: Test Seeker Name, Test Job Title, Test Organization Name</p>
        <p>Date Posted:</p>
        <p>Test Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div id="section2">
        <p>Location: Test Location Name</p>
        <p>Address Line 1</p>
        <p>City, State, Zip</p>
      </div>
    <button v-on:click="requestInfo = !requestInfo" >Connect</button>
    <transition name="slide">
      <div id = "requestInfo" v-if="requestInfo">
        <form>
          <textarea width="100%"></textarea><br />
          <button id="sendMessage" type="submit">Send Message</button>
          <p>Once sent, your contact information will be shared with the opportunity organizer.<br />Connect Direct will never share your contact information unless you request informormation. </p>
        </form>
      </div>
    </transition>
  </div>
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

#sendMessage {
  width: 150px;
  margin-top: 15px;
}

#requestInfo {
  margin-top: 20px;
  padding: 20px;
  color: white;
  background-color: #2d3e49;
  border-radius: 3px;
  -webkit-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 2px -1px rgba(0,0,0,0.75);
}

#whiteBackground {
  background: #FDF1D7;  /* fallback for old browsers */
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
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
    border: 2px solid black;
    height: auto;
    margin: 10px;
    padding: 20px;
    border-radius: 3px;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    background: white;  /* fallback for old browsers */
   background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to top, #eef2f3, white);
}

#section2 {
    border: 2px solid black;
    height: auto;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 3px;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
    background: white;  /* fallback for old browsers */
   background: -webkit-linear-gradient(to top, #eef2f3, white);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to top, #eef2f3, white);
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
    border: 1.5px solid rgba(0,0,0,0.38);
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
