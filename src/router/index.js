import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import UserPage from '@/components/UserPage'
import SeekerLogin from '@/components/SeekerLogin'
import AdminLogin from '@/components/AdminLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/user-page',
      name: 'UserPage',
      component: UserPage
    },
    {
      path: '/seeker-login',
      name: 'SeekerLogin',
      component: SeekerLogin
    },
    {
      path: '/admin-login',
      name: 'AdminLogin',
      component: AdminLogin
    }
  ]
})
