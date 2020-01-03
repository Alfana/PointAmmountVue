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
            <img :src="card.src" alt="" class="white--text align-end gambar">
            <v-card-subtitle class="pb-0" v-text="card.title"></v-card-subtitle>
            <v-card-text class="text--primary" v-text="card.des"></v-card-text>            
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
        { title: 'Loan', des:'', link:'/reedemlist' , src: '/produk/login.png', flex: 6 },
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  width: 50%;
  height: 120px;
}
</style>