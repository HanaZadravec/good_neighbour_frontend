import Vue from 'vue'
import VueRouter from 'vue-router'
import pocetna from '@/views/pocetna.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import home from '@/views/home.vue'
import aboutUs from '@/views/aboutUs.vue'
import contact from '@/views/contact.vue'
import crimes from '@/views/crimes.vue'
import profile from '@/views/myProfile.vue'
import chat from '@/views/chat.vue'
import notifications from '@/views/notifications.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pocetna',
      component: pocetna
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/aboutus',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/crimes',
      name: 'crimes',
      component: crimes
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications
    },
  ]
})

export default router
