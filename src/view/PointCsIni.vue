<template>
    <v-container>
        <v-card elevation="3">
            <v-tabs
            v-model="reedem"
            fixed-tabs
            background-color="transparent"
            color="#2171A1"
            elevation="3"
            class="tabreedem"
            icons-and-text
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#daftarcs">
                    Point CS
                    <v-icon>mdi-face-agent</v-icon>
                </v-tab>
            </v-tabs>
        </v-card>
        
        <div
        v-for="(item, i) in datacs"
        :key="i"
        >
            <v-card 
            elevation="7" 
            class="mitracard" 
            shaped
            height="70"
            >
            <v-list-item >
            <v-list-item-avatar color="iconbawah">
                <v-icon dark>mdi-account-circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="font-weight-black">{{item.name}}</v-list-item-title>
                <v-list-item-subtitle class="font-weight-medium">{{item.point}} Point</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>        
            </v-card>
        </div>
    </v-container>
</template>


<script>
  import axios from 'axios'; //eslint-disable-line
  import url from '@/config'
  export default {
    data: () => ({
      reedem: null,
      datacs: [],

    }),
    methods :{      
      detailao(idao, namaao){
        localStorage.id_ao = idao
        // localStorage.tabledetail = "ao"
        localStorage.namaao = namaao
        this.$router.push('/detao')
      },
      getpointao() {
          var idofficer = [localStorage.unit]
            axios
            .post(url.api+'allpointcs', idofficer)
            .then((res)=>{
                this.datacs = res.data
                // console.log(res)//eslint-disable-line
            })
        },
    },
    created(){
        this.getpointao()
    },
  }
</script>

<style>
.mitracard{
  margin-top: 10px;
  margin-bottom: 13px;
  padding-top: 5px;
}
.btl{
    float: right;
}
</style>