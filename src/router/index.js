import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import UserPage from '@/components/UserPage'
import SeekerSplash from '@/components/SeekerSplash'
import AdminLogin from '@/components/AdminLogin'
import SeekerPage from '@/components/SeekerPage'
import UserProfile from '@/components/UserProfile'
import AdminPage from '@/components/AdminPage'
import SeekerProfile from '@/components/SeekerProfile'


Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/seeker-splash',
      name: 'SeekerSplash',
      component: SeekerSplash
    },
    {
      path: '/admin-login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/seeker-page',
      name: 'SeekerPage',
      component: SeekerPage
    },
    {
      path: '/admin-page',
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: '/seeker-profile',
      name: 'SeekerProfile',
      component: SeekerProfile
    }
  ]
})
