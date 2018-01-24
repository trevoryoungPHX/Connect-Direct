<template>
  <div class="User">
    <UserNav></UserNav>
    <AppFooter></AppFooter>
  </div>
</template>

<script>

import UserNav from './UserNav.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'User',
  components: { UserNav, AppFooter },
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

.User {
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
