import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAay79GKowxtYgqzeHPLNaD4YuxOn_SndY'
  }
})
Vue.use(VueGeolocation)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



