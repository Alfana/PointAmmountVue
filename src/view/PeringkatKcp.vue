<template>
    <v-container>
        <v-card elevation="3">
            <v-tabs
            v-model="kcp"
            fixed-tabs
            background-color="transparent"
            color="#2171A1"
            elevation="3"
            class="tabreedem"
            icons-and-text
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#cs">
                    Pringkat Unit (CS)
                    <v-icon>mdi-crown</v-icon>
                </v-tab>
                <v-tab href="#ao">
                    Pringkat Unit (AO)
                    <v-icon>mdi-crown</v-icon>
                </v-tab>
            </v-tabs>
        </v-card>

        <!-- UNIT CS -->
        <v-tabs-items v-model="kcp">
        <v-tab-item :value="'cs'">
            <div
            v-for="(item, i) in dataunit"
            :key="i"
            >
                <v-card 
                elevation="7" 
                class="mitracard" 
                shaped
                height="70"          
                @click="detailunit(item.unit)"  
                >
                <v-list-item >
                <v-list-item-avatar color="iconbawah">
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-black">{{item.unit}}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-medium">{{item.point1}} Point</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>        
                </v-card>
            </div>
        </v-tab-item>
        </v-tabs-items>

        <!-- UNIT AO -->
        <v-tabs-items v-model="kcp">
        <v-tab-item :value="'ao'">
            <div
            v-for="(item, i) in dataunit_ao"
            :key="i"
            >
                <v-card 
                elevation="7" 
                class="mitracard" 
                shaped
                height="70"          
                @click="detailunit_ao(item.nama_kcp)"  
                >
                <v-list-item >
                <v-list-item-avatar color="iconbawah">
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="font-weight-black">{{item.nama_kcp}}</v-list-item-title>
                    <v-list-item-subtitle class="font-weight-medium">{{item.point2}} Point</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>        
                </v-card>
            </div>
        </v-tab-item>
        </v-tabs-items>
    </v-container>
</template>


<script>
  import axios from 'axios'; //eslint-disable-line
  import url from '@/config'
  export default {
    data: () => ({
      kcp: null,
      dataunit: [],
      dataunit_ao: [],
      datacs: [],
      pointtambah: [],
      pointkurang: [],

    }),
    methods :{      
        detailunit(unit){
            localStorage.detunit = unit
            localStorage.kembali = "peringkatkcp"
            this.$router.push('/peringkatdet')
         },
        detailunit_ao(unit){
            localStorage.detunit = unit
            localStorage.kembali = "peringkatkcp"
            this.$router.push('/peringkatdetao')
         },
        getpointunit() {
            // var idofficer = [localStorage.id]
            axios
            .get(url.api+'allunit')
            .then((res)=>{
                this.dataunit = res.data
                // console.log(res)//eslint-disable-line
            })
        },
        getpointunit_ao() {
            // var idofficer = [localStorage.id]
            axios
            .get(url.api+'allunit_ao')
            .then((res)=>{
                this.dataunit_ao = res.data
                // console.log(res)//eslint-disable-line
            })
        },
    },
    created(){
        this.getpointunit()
        this.getpointunit_ao()
        // this.pointcstambah()
        // this.pointcskurang()
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