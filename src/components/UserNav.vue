<template>
  <div class="userNav">
    <div id="container">
    <img height="100px" src="../assets/test direct connect logo.png" />
    <button id="menuButton"><img width="100%" src="../assets/menu.png" /></button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserNav',
  data() {
    return {
    }
  }
}
</script>

<style scoped>

#menuButton {
  border-radius: 300px;
  display: inline;
  height: 50px;
  width: 50px;
  margin-left: 30px;
  padding-top: 6px;
  outline:0;
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  border-radius: 50px;
  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.58);
  cursor: pointer;
  position:absolute;
  top:10;
  margin-top: 30px;
}

#menuButton:hover {
  background: #1D976C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #7bd19a, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #7bd19a, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.userNav {
  background-color: #FDF1D7;
  color: white;
  text-align: left;
  margin-bottom: 30px;
  height: auto ;
  width: 100%;
}

#container {
  padding-left: 10%;
  padding-top: 20px;
  padding-bottom: 20px;
}

</style>
