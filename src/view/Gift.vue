<template>
    <v-container fluid>
      <v-card 
        elevation="7" 
        class="header" 
        height="50"
        >
            <v-list-item >
            <v-list-item-content>
            <v-list-item-title class="font-weight-black"><center>Silahkan Pilih Kategori Hadiah</center></v-list-item-title>
            </v-list-item-content>
            </v-list-item>        
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
            <!-- <v-card-text class="text--primary" v-text="card.des"></v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
  import axios from 'axios'; //eslint-disable-line
  import url from '@/config'//eslint-disable-line
  export default {
    data: () => ({
    produk : '',
    judul: "Kategori",
    header: false,
    reedem: false,
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
        // { title: 'Prospek Debitur', des:'', link:'/reedemlist' , src: '/produk/prospekdebitur.png', flex: 6 },
        // { title: 'Realisasi Debitur', des:'', link:'/reedemlist' , src: '/produk/realisasidebitur.png', flex: 6 },
    ],
    }),
    methods:{
      detailgift(produk){
        localStorage.produk = produk
        this.$router.push('/giftdet')
      },
      
    },      
    
  }
</script>

<style>
.btl{
    float: right;
}
.gambar{
  height: 120px !important;
}
</style>