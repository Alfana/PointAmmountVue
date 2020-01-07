<template>
    <v-container class="text-center bgUtama">   
      <!-- <Loading v-model="showLoading" ></Loading> -->

        <v-card elevation="0" class="jam">
          <span id="jam" class="garis"></span>
        </v-card>

        <!-- <v-card class="nuLuhur" elevation="3">
          <v-row>
            <v-col style="margin: -3px 0px -3px 5px; color:#2171A1;">
              <h5>Point CS</h5>
              <h3>2000</h3>
            </v-col>
            <div style="border-left:1px solid #2171A1;max-width:1px;margin-top:10px;margin-bottom:10px"></div>
            <v-col style="margin: -3px 10px -3px -10px;color:#2171A1;">
              <h5>Point Mitra</h5>
              <h3>2000</h3>
            </v-col>
          </v-row>
        </v-card> -->
      
      <!-- <v-card 
      elevation="3"
      class="pie"
      >
        <div>
            <apexchart width="100%" height="100%" type="donut" :options="chartOptions" :series="series"></apexchart>
        </div>
      </v-card> -->

      <!-- MENU ADMIN -->
      <v-card
      v-if="$route.name !== 'auth' && akses == 0"
      elevation="3"
      class="menuicon"
      >
        <v-row>
          <!-- <v-col cols="4" sm="3">
            <router-link to="karyawan">
              <v-img class="icon" src="/icon/point.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Data Karyawan</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="karyawan">
              <v-img class="icon" src="/icon/point.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Tambah</h5>
          </v-col> -->
          <!-- <v-col cols="4" sm="3">
            <router-link to="/pointao">
              <v-img class="icon" src="/icon/aopoint.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point AO</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/inputpoint">
              <v-img class="icon" src="/icon/mitrapoint.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point Mitra</h5>
          </v-col> -->
        </v-row>
        
        <v-row>
          <v-col cols="4" sm="3">
            <router-link to="/riwayatadmin">
              <v-img class="icon" src="/icon/riwayat.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Riwayat Point</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/rewayatreedemadmin">
              <v-img class="icon" src="/icon/reward.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Riwayat Reedem</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/gift">
              <v-img class="icon" src="/icon/reward.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Hadiah</h5>
          </v-col>
        </v-row>
      </v-card>
      
      <!-- MENU OFFICER -->
      <v-card
      v-if="$route.name !== 'auth' && akses == 1"
      elevation="3"
      class="menuicon"
      >
        <v-row>
          <!-- <v-col cols="4" sm="3">
            <router-link to="/home">
              <v-img class="icon" src="/icon/home.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Dashboard</h5>
          </v-col> -->
          <v-col cols="4" sm="3">
            <router-link to="/pointcs">
              <v-img class="icon" src="/icon/cspoints.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point CS</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/pointao">
              <v-img class="icon" src="/icon/aopoint.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point AO</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/inputpoint">
              <v-img class="icon" src="/icon/mitrapoint.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point Mitra</h5>
          </v-col>
          <!-- <v-col cols="4" sm="3">
            <router-link to="">
              <v-img class="icon" src="/icon/rank.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Pringkat KCP</h5>
          </v-col> -->
          
        </v-row>
        
        <v-row>
          <!-- <v-col cols="4" sm="3">
            <router-link to="/mitra">
              <v-img class="icon" src="/icon/reedem.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Reedem</h5>
          </v-col> -->
          <v-col cols="4" sm="3">
            <router-link to="/riwayat">
              <v-img class="icon" src="/icon/riwayat.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Riwayat Point</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/rewayatreedem">
              <v-img class="icon" src="/icon/reedem.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Riwayat Reedem</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/gift">
              <v-img class="icon" src="/icon/reward.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Hadiah</h5>
          </v-col>
          <!-- <v-col cols="4" sm="3">
            <router-link to="/inputpoint">
              <v-img class="icon" src="/icon/point.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Input Point</h5>
          </v-col> -->
          <!-- <v-col cols="4" sm="3">
            <router-link to="/mitra">
              <v-img class="icon" src="/icon/reedem.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Reedem</h5>
          </v-col> -->
          <!-- <v-col cols="4" sm="3">
            <router-link to="">
              <v-img class="icon" src="/icon/logout2.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Log Out</h5>
          </v-col> -->
        </v-row>
      </v-card>

      <!-- MENU AO -->
      <v-card
      v-if="$route.name !== 'auth' && akses == 4"
      elevation="3"
      class="menuicon"
      >
        <v-row>
          <v-col cols="4" sm="3">
            <router-link to="/pointaoini">
              <v-img class="icon" src="/icon/aopoint.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point AO</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/riwayatao">
              <v-img class="icon" src="/icon/riwayat.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Riwayat Point</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/giftao">
              <v-img class="icon" src="/icon/reward.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Hadiah</h5>
          </v-col>
        </v-row>
      </v-card>

      <!-- MENU CS -->
      <v-card
      v-if="$route.name !== 'auth' && akses == 2"
      elevation="3"
      class="menuicon"
      >
        <v-row>
          <v-col cols="4" sm="3">
            <router-link to="/pointcsini">
              <v-img class="icon" src="/icon/cspoints.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Point CS</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/riwayatcs">
              <v-img class="icon" src="/icon/riwayat.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Riwayat Point</h5>
          </v-col>
          <v-col cols="4" sm="3">
            <router-link to="/giftcs">
              <v-img class="icon" src="/icon/reward.png"></v-img>
            </router-link>
            <h5 class="icontext--text">Hadiah</h5>
          </v-col>
        </v-row>
      </v-card>

      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
          @click="detailgift(card.title)"
          >
            <img :src="card.src" alt="" class="white--text align-end" style="height: 120px; width: 172px;">
            <v-card-subtitle class="pb-0" v-text="card.title"></v-card-subtitle>
            <v-card-text class="text--primary" v-text="card.des"></v-card-text>            
          </v-card>
        </v-col>
      </v-row>

        <!-- end isi body -->
    </v-container>
</template>

<script>
import axios from 'axios';//eslint-disable-line
// import Loading from './Loading'
export default {
  name: 'Index',
  created (){
    // var myVar = setInterval(myTimer, 1000);//eslint-disable-line
  
    function myTimer() {//eslint-disable-line
      var d = new Date();
      // document.getElementById("jam").innerHTML = d.toLocaleTimeString('en-GB');
      var TT = d.toLocaleTimeString('en-GB');
      var DD = ("0" + d.getDate()).slice(-2);
      var MM = ("0" + (d.getMonth() + 1)).slice(-2);
      var YYYY = d.getFullYear();
      var date_string = TT + " - " + YYYY + "/" + MM + "/" + DD;

      document.getElementById("jam").innerHTML = date_string;
    }
  },
  data: () => ({
    user: localStorage.name,
    unit: localStorage.unit,
    akses: localStorage.akses,
    cards: [
        { title: 'Loan', des:'', link:'/reedemlist' , src: '/produk/loan.png', flex: 6 },
        { title: 'Deposito', des:'', link:'/reedemlist' , src: '/produk/deposito.png', flex: 6 },
        { title: 'Giro', des:'', link:'/reedemlist' , src: '/produk/giro.png', flex: 6 },
        { title: 'Tabungan', des:'', link:'/reedemlist' , src: '/produk/tabungan.png', flex: 6 },
        { title: 'Bancassurance', des:'', link:'/reedemlist' , src: '/produk/bancassurance.png', flex: 6 },
        { title: 'DPLK', des:'', link:'/reedemlist' , src: '/produk/dplk.png', flex: 6 },
        { title: 'SimPel', des:'', link:'/reedemlist' , src: '/produk/simple.png', flex: 6 },
        { title: 'Credit Card', des:'', link:'/reedemlist' , src: '/produk/cc.png', flex: 6 },
        { title: 'Reksadana', des:'', link:'/reedemlist' , src: '/produk/reksadana.png', flex: 6 },
        { title: 'T-Samsat', des:'', link:'/reedemlist' , src: '/produk/tsamsat.png', flex: 6 },
        { title: 'Western Union', des:'', src: '/produk/wu.png', flex: 6 },
        { title: 'Penerbitan ATM', des:'', link:'/reedemlist' , src: '/produk/atm.png', flex: 6 },
        { title: 'BJB Digi', des:'', link:'/reedemlist' , src: '/produk/bjbdigi.png', flex: 6 },
        { title: 'Kerjasama Sekolah', des:'', link:'/reedemlist' , src: '/produk/sekolah.png', flex: 6 },
        { title: 'Pembayaran Lainnya', des:'', link:'/reedemlist' , src: '/produk/lainnya.png', flex: 6 },
    ],
    showLoading: false,
    loading: true,
    edit: false,
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    data:[],
    sheet: false,
    inset: false,
    hideOverlay: false,
    menu: [
      { title: 'Logout', icon: 'mdi-logout' },
    ],
    series: [23, 11],
    chartOptions: {
      colors: ['#2171A1', '#FFDF00'],
      labels: ["Claimed Point", "Idle Point"],
      dataLabels: {
        enabled: true,
        // style: {
        //     colors: ['#F44336', '#E91E63', '#9C27B0']
        // }
      },
      plotOptions: {
        pie: {
          customScale: 1,
          // size:100
          donut: {
              size: '45%',
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom',
      },
    }
  }),
  components: {
    // Loading
  },
  methods:{
    detailgift(produk){
      localStorage.produk = produk
      this.$router.push('/giftdet')
    },
    logout(){
      this.$session.destroy();
      localStorage.clear();
      this.$router.push('Auth');
    },
  },
  computed: {

  },

  watch: {
      
  },
};
</script>

<style>
.bulat-atas{
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
}
.bulat-bawah{
    border-bottom-left-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
}
.cstm-tmbl{
    width: 50px;
    height: 50px;
}
.bgGrad{
    background: #f84100;
    background-image: linear-gradient(#f84100, #f9d213);
}
.tmblTambah{
  margin-top: -25px;
}
.bgUtama{
  background-color: #f9f9f9;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.pie{
  margin-bottom: 13px;
  padding-top: 5px;
}
.nuLuhur{
  margin-bottom: 13px;
}
.jam{
  background-color: #f9f9f9 !important;
  margin-bottom: 5px;
}
/* .garis{
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
} */
.icon{
  width: 45%;
  margin-left: 25%;
  margin-top: 5%;
  margin-bottom: 5%; 
}
.menuicon{
  margin-bottom: 8px;
}
/* .gambar{
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  width: 50%;
  height: 120px;
} */
</style>
