import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home'
import Login from './view/Login'
import Account from './view/Account'
import InputPoint from './view/InputPoint'
import Riwayat from './view/Riwayat'
import RiwayatAdmin from './view/RiwayatAdmin'
import RiwayatCs from './view/RiwayatCs'
import RiwayatAo from './view/RiwayatAo'
import RiwayatReedem from './view/RiwayatReedem'
import RiwayatReedemAdmin from './view/RiwayatReedemAdmin'
import Mitra from './view/Mitra'
import DetMitra from './view/DetMitra'
import DetCs from './view/DetCs'
import DetAo from './view/DetAo'
import ReedemMit from './view/ReedemMit'
import Gift from './view/Gift'
import GiftDet from './view/GiftDet'
import GiftCs from './view/GiftCs'
import GiftAo from './view/GiftAo'
import Pengajuan from './view/FormPengajuan'
import PointCs from './view/PointCs'
import PointCsIni from './view/PointCsIni'
import PointAo from './view/PointAo'
import PointAoIni from './view/PointAoIni'
import PointMitra from './view/PointMitra'
import PeringkatKcp from './view/PeringkatKcp'
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
  if ((localStorage.id >= 1)) {
    next();
  }else{
    next('/Auth');
  }
}

const officerlogin = (to, from, next) => { //eslint-disable-line
  if ((localStorage.akses == 1)) {
    next();
  }else if((localStorage.akses == 2)) {
    next('/gift');
  }
}

const cekSession = (to, from, next) => {
  if (localStorage.sess !== null) {
    next();
  }else{
    next('/Auth');
  }
}

const loginPage = (to, from, next) => {
  if (localStorage.sess == null) {
    next();
  }else{
    next('/');
  }
}

const router = new Router({
    mode: 'history',
    routes: [
        {path: '*', redirect:'/'},
        {path: '/Auth', component:Login, name: 'auth', beforeEnter: VueRouterMultiguard([loginPage])},
        {path: '/', component:Home, name: 'home', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/inputpoint', component:InputPoint, name: 'inputpoint', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/riwayat', component:Riwayat, name: 'riwayat', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/riwayatadmin', component:RiwayatAdmin, name: 'riwayatadmin', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/riwayatcs', component:RiwayatCs, name: 'riwayatcs', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/riwayatao', component:RiwayatAo, name: 'riwayatao', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/rewayatreedem', component:RiwayatReedem, name: 'rewayatreedem', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/rewayatreedemadmin', component:RiwayatReedemAdmin, name: 'rewayatreedemadmin', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/mitra', component:Mitra, name: 'mitra', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/detmitra', component:DetMitra, name: 'detmitra', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/detcs', component:DetCs, name: 'detcs', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/detao', component:DetAo, name: 'detao', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/reedemmit', component:ReedemMit, name: 'reedemmit', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/gift', component:Gift, name: 'gift', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/giftdet', component:GiftDet, name: 'giftdet', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/giftcs', component:GiftCs, name: 'giftcs', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/giftao', component:GiftAo, name: 'giftao', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/account', component:Account, name: 'account', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pengajuan', component:Pengajuan, name: 'pengajuan', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pointcs', component:PointCs, name: 'pointcs', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pointao', component:PointAo, name: 'pointao', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pointaoini', component:PointAoIni, name: 'pointaoini', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pointcsini', component:PointCsIni, name: 'pointcsini', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/pointmitra', component:PointMitra, name: 'pointmitra', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
        {path: '/peringkatkcp', component:PeringkatKcp, name: 'peringkatkcp', beforeEnter: VueRouterMultiguard([adminLogin,cekSession])},
    ]
  })

export default router