<template>
    <v-container fluid>
      <v-card 
        elevation="7" 
        class="header" 
        height="60"
        >
            <v-list-item >
            <v-list-item-content>
            <v-list-item-title class="font-weight-black"><center v-text="'Hadiah '+judul"></center></v-list-item-title>
            <v-list-item-subtitle><center v-text="'Sisa Point : '+sisapoint"></center></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>        
      </v-card>
      <v-btn small class="ma-2 kembali" tile color="primary" @click="kembali()">
        <v-icon left>mdi-keyboard-backspace</v-icon> Kembali
      </v-btn>
      <v-btn small class="ma-2 reedem" tile color="success" @click="reedem()">
        <v-icon left>mdi-coin</v-icon> Reedem
      </v-btn>
      
      <v-card 
        raised
        class="pesan"         
        v-show="statkosong"
        >
        <v-card-text class="text--primary" v-text="pesankosong"></v-card-text>      
      </v-card>
      <!-- <div v-text="pesankosong"></div> -->

      <v-row dense>
        <v-col
          v-for="(key,i) in gift"
          :key="i"
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
            <v-card-subtitle class="pb-0 namareward"><div :id="'namareward'+i">{{key.nama_reward}}</div> Point</v-card-subtitle>
            <v-card-text class="text--primary"><div :id="'pointreward'+i">{{key.point}}</div> Point</v-card-text>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-chip
                class="ma-2"
                color="teal"
                text-color="white"
                small
              >
                <v-avatar left>
                  <v-icon>mdi-basket-fill</v-icon>
                </v-avatar>
                <!-- <div :id="'qty'+i"></div> -->
                <input type="text" :id="'qty'+i" value="0" class="qty">
              </v-chip>
              <!-- <v-list-item-title>QLY : 12</v-list-item-title> -->
              <!-- <v-text class="qty">12</v-text> -->

              <v-btn disabled :id="'tbmin'+i" icon @click="updateQty(i,key.point)">
                <v-icon>mdi-tray-minus</v-icon>
              </v-btn>

              <v-btn icon :id="'tbplus'+i" @click="updateQtyPlus(i,key.point)">
                <v-icon>mdi-tray-plus</v-icon>
              </v-btn>
            </v-card-actions>         
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
    dis: true,
    judul: localStorage.produk,
    sisapoint: localStorage.maxpoint,
    gift: [],
    reward: null,
    pesankosong: '',
    statkosong: false,
    point: '',
    produk: '',
    }),
    methods:{
      updateQty(val,key){
          var now = document.getElementById('qty'+val).value
          if (now == 1) {
            document.getElementById('tbmin'+val).setAttribute("disabled", "disabled")
            document.getElementById('tbmin'+val).setAttribute("class", "v-btn v-btn--disabled v-btn--flat v-btn--icon v-btn--round theme--light v-size--default")
          }
          if (this.sisapoint >= 0) {
            document.getElementById('tbplus'+val).removeAttribute("disabled", "disabled")
            document.getElementById('tbplus'+val).setAttribute("class", "v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default")
          }
          
          
          document.getElementById('qty'+val).value = now-=1
          
          var hasil = parseInt(this.sisapoint) + key
          this.sisapoint = hasil

          // this.sisapoint = hasil
      },
      updateQtyPlus(val,key){
          var now = parseInt(document.getElementById('qty'+val).value)
          document.getElementById('qty'+val).value = now+=1
          if (now >= 0) {
            document.getElementById('tbmin'+val).removeAttribute("disabled", "disabled")
            document.getElementById('tbmin'+val).setAttribute("class", "v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default")
          }

          // var max = parseInt(localStorage.maxpoint)
          // console.log(key+1)//eslint-disable-line
          if (this.sisapoint <= key+key-1) {
            document.getElementById('tbplus'+val).setAttribute("disabled", "disabled")
            document.getElementById('tbplus'+val).setAttribute("class", "v-btn v-btn--disabled v-btn--flat v-btn--icon v-btn--round theme--light v-size--default")
            // document.getElementById('reedem').setAttribute("disabled", "disabled")
          }

          var hasil = parseInt(this.sisapoint) - key
          this.sisapoint = hasil

          // this.sisapoint = hasil
      },
      giftdetail() {
          var produk = [localStorage.produk, localStorage.maxpoint]
          // console.log(produk)//eslint-disable-line
            axios
            .post(url.api+'reedemreward', produk)
            .then((res)=>{
                this.gift = res.data
                // console.log(res)//eslint-disable-line
                if (this.gift === undefined || this.gift.length == 0) {
                  this.pesankosong = "Point Tidak Mencukupi, Kumpulkan lebih banyak point!"
                  this.statkosong = true
                }else{
                  this.pesankosong = ""
                  this.statkosong = false
                }
            })
            
        },
      kembali(){
        var kembali = localStorage.kembali
        this.$router.push(kembali)
      },
      reedem(){
        var jml = document.getElementsByClassName('qty').length//eslint-disable-line
        var kembali = localStorage.kembali
        var id_user = ''//eslint-disable-line
        
        var akses = localStorage.redjab
        var namaao = localStorage.namaao
        var namacs = localStorage.namacs
        var namamit = localStorage.namamitra
        var jab = ''

        if (kembali == "detao") {
          id_user = localStorage.id_ao
        }else if(kembali == "detcs"){
          id_user = localStorage.id_cs
        }else if(kembali == "detmitra"){
          id_user = localStorage.id_mitra
        }

        if (akses == '5') {
          jab = 'AO'
          const wa = [
            namaao,
            jab
          ]
          axios
            .post(url.api+'kirim_wa', wa)
            .then((res)=>{
                if (res.status==200) {
                  console.log("WA AO DIKIRIM")//eslint-disable-line
                }
            })
        }else if(akses == '2'){
          jab = 'CS'
          const wa = [
            namacs,
            jab
          ]
          axios
            .post(url.api+'kirim_wa', wa)
            .then((res)=>{
                if (res.status==200) {
                  console.log("WA CS DIKIRIM")//eslint-disable-line
                }
            })
        }else{
          jab = 'MITRA'
          const wa = [
            namamit,
            jab
          ]
          axios
            .post(url.api+'kirim_wa', wa)
            .then((res)=>{
                if (res.status==200) {
                  console.log("WA MITRA DIKIRIM")//eslint-disable-line
                }
            })
        }

        
        for (let i = 0; i < jml; i++) {
          if (document.getElementById('qty'+i).value > 0) {
            var id_officer = localStorage.id
            // var id_user = localStorage.id_cs
            var produk = localStorage.produk
            var point_reedem = document.getElementById('pointreward'+i).innerText
            var produk_reedem = document.getElementById('namareward'+i).innerText
            var qty = document.getElementById('qty'+i).value
            var pored = point_reedem*qty
            var jabatan = localStorage.redjab

            const data =[
              id_officer,
              id_user,
              produk,
              pored,
              produk_reedem,
              qty,
              jabatan
            ]

            axios
            .post(url.api+'Ireedem', data)
            .then((res)=>{
                if (res.status==200) {
                    alert("Point Berhasil Di Reedem!")//eslint-disable-line
                    this.$router.push('/'+kembali)
                }
            })
          }
            
        }

        
      }
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
.header{
  margin-bottom: 10px;
}
.pesan{
  margin-top: 30px;
  height: 65px;
  text-align: center;
}
.reedem{
  float: right;
  width: 120px;
}
.kembali{
  width: 130px;
}
.qty{
  float: left;
}
</style>