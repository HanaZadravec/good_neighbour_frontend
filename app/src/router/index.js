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
      component: pocetna,meta: { requiresAuth: false,requiresGuest:true }
    },
    {
      path: '/login',
      name: 'login',
      component: login,meta: { requiresAuth: false,requiresGuest:true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,meta: { requiresAuth: false,requiresGuest:true }
    },
    {
      path: '/home',
      name: 'home',
      component: home,meta: { requiresAuth: true }
    },
    {
      path: '/aboutus',
      name: 'aboutUs',
      component: aboutUs,meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,meta: { requiresAuth: true }
    },
    {
      path: '/crimes',
      name: 'crimes',
      component: crimes,meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,meta: { requiresAuth: true }
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,meta: { requiresAuth: true }
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications,meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Provjerite je li korisnik autoriziran
    if (!token) {
      // Ako nije autoriziran, preusmjerite ga na login stranicu
      next('/login');
    } else {
      
        next();
      }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // Provjerite je li korisnik gost i pokušava pristupiti rutama koje zahtijevaju gost status
    if (token) {
      // Ako je korisnik gost i ima token, preusmjerite ga na željenu rutu
      next('/home');
    } else {
      // Ako je korisnik gost i nema token, nastavite s prikazom rute
      next();
    }
  } else {
    // Nije potrebna autorizacija za ovu rutu, nastavite s prikazom
    next();
  }
});


export default router
