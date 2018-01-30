<template>
    <div>

        <router-view></router-view>

    </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style >

input {
  outline: none;
}

button {
  outline: none;

}

html {
  font-family: 'Questrial', sans-serif;
  text-align: center;
  margin-top: 0px;
  cursor: default;
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


body {
  margin: 0px;
}

a  {
  color: black;
  text-decoration: none;

}

</style>
