import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home'
import Login from './view/Login'
import Account from './view/Account'
import Pengajuan from './view/FormPengajuan'
import VueRouterMultiguard from 'vue-router-multiguard'
import VueSession from 'vue-session'
import VueApexCharts from 'vue-apexcharts'

// var options = {
  //   persist: true
  // }
  // Vue.use(VueSession, options)
  
Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts) 
Vue.use(VueSession)
Vue.use(Router)

const adminLogin = (to, from, next) => {
  if ((localStorage.id == 1 || localStorage.id == 2)) {
    next();
  }else{
    next('/Auth');
  }
}

const cekSession = (to, from, next) => {
  if (localStorage.sess !== null) {
    next();
  }else{
    next('/Auth');
  }
}

const router = new Router({
    mode: 'history',
    routes: [
        {path: '*', redirect:'/'},
        {path: '/Auth', component:Login, name: 'auth'},
        {path: '/', component:Home, name: 'home', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/account', component:Account, beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pengajuan', component:Pengajuan, name: 'pengajuan', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
    ]
  })

export default router