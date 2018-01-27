<template>
    <div>
      <UserNav></UserNav>
      <div class="seekerProfile">
        Test
      </div>
      <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppFooter from './AppFooter.vue'
import UserNav from './UserNav.vue'


export default {
  name: 'SeekerProfile',
  components: { AppFooter, UserNav },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.seekerProfile {
  color: black;
}

</style>
