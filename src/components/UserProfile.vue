<template>
    <div>
      <UserNav></UserNav>
      <div class="userProfile">
        Test
      </div>
      <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppFooter from './AppFooter.vue'
import UserNav from './UserNav.vue'


export default {
  name: 'UserProfile',
  components: { AppFooter, UserNav },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.userProfile {
  color: black;
}

</style>
