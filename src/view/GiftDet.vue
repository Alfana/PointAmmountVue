<template>
    <v-container fluid>
      <v-card 
        elevation="7" 
        class="header" 
        height="50"
        >
            <v-list-item >
            <v-list-item-content>
            <v-list-item-title class="font-weight-black"><center v-text="'Hadiah '+judul"></center></v-list-item-title>
            </v-list-item-content>
            </v-list-item>        
      </v-card>
      <v-btn small class="ma-2" tile color="indigo" dark to="/gift">
        <v-icon left>mdi-keyboard-backspace</v-icon> Kembali
      </v-btn>
      <v-btn small class="ma-2 tambah" tile color="success" @click="tambah()" v-if="user==0">
        <v-icon small left>mdi-gift</v-icon> Tambah Hadiah
      </v-btn>

      <v-row dense>
        <v-col
          v-for="key in gift"
          :key="key.title"
          cols="6"
        >
          <v-card>
            <v-img
              :src="link+key.gambar"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"              
            >
            </v-img>
            <v-card-subtitle class="pb-0">{{key.nama_reward}}</v-card-subtitle>
            <v-card-text class="text--primary">{{key.point}} Point</v-card-text>            
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
    link: url.gambar+'produk/',
    user: localStorage.akses,
    produk: localStorage.produk,
    judul: localStorage.produk,
    gift: [],
    reward: null,
    }),
    methods:{
      tambah(){
        localStorage.kembali = "/giftdet"
        this.$router.push("/gifttambah")
      },
      giftdetail() {
          var produk = [localStorage.produk]
          // console.log(produk)//eslint-disable-line
            axios
            .post(url.api+'reward', produk)
            .then((res)=>{
                this.gift = res.data
                // console.log(res)//eslint-disable-line
            })
        },
    },      
    created(){
        this.giftdetail()
    },
    
  }
</script>

<style>
.btl{
    float: right;
}
.tambah{
  float: right;
  width: 150px;
}
</style>