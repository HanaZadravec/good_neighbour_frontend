import { createRouter, createWebHistory } from 'vue-router'
import pocetna from '@/views/pocetna.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
const routes = [
  {
    path:'/',
    name:'pocetna',
    component: pocetna
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/signup',
    name:'signup',
    component:signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
