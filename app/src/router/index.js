import Vue from 'vue'
import VueRouter from 'vue-router'
import pocetna from '@/views/pocetna.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import home from '@/views/home.vue'
import aboutUs from '@/views/aboutUs.vue'
import contact from '@/views/contact.vue'
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
  ]
})

export default router
