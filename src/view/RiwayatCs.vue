<template>
    <v-container>
        <v-card elevation="3">
        <v-tabs
        fixed-tabs
        background-color="transparent"
        color="#2171A1"
        elevation="3"
        class="tabpoint"
        icons-and-text
        v-model="point_mitra"
        >
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mitra">
                History Point
                <v-icon>mdi-face-agent</v-icon>
            </v-tab>
            <v-tab href="#treedem">
                Reedem Point
                <v-icon>mdi-gift</v-icon>
            </v-tab>
        </v-tabs>
        </v-card>

        <v-tabs-items v-model="point_mitra">
        <!-- AO -->
        <v-tab-item :value="'mitra'">
            <v-card>
                <v-card-title>
                <v-row>
                    <v-col cols="6">
                        Riwayat CS  
                        <h5></h5>               
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            outlined
                            rounded
                            v-model="searchcs"
                            label="Cari data"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                </v-card-title>

                <v-data-table
                :headers="headers"
                :items="data_ao"
                :search="searchcs"
                :mobile-breakpoint="100"
                :items-per-page="5"
                :footer-props="{
                    'items-per-page-text': '',
                }"
                >
                </v-data-table>
            </v-card>
        </v-tab-item>

        <!-- REEDEM INTERNAL-->
        <v-tab-item :value="'treedem'">
            <v-card>
                <v-card-title>
                <v-row>
                    <v-col cols="6">
                        Reedem Point
                        <h5></h5>                
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            outlined
                            rounded
                            v-model="searchreedemcs"
                            label="Cari data"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                </v-card-title>

                <v-data-table
                :headers="headersreedemcs"
                :items="data_reedemcs"
                :search="searchreedemcs"
                :mobile-breakpoint="100"
                :items-per-page="5"
                :footer-props="{
                    'items-per-page-text': '',
                }"
                >
                </v-data-table>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
    </v-container>
</template>


<script>
import axios from 'axios'; //eslint-disable-line
import url from '@/config'
export default {
  name: 'Index',
  data: () => ({
    point_mitra: null,
    keterangancs: '',
    idcs:'',
    aksescs:'',
    search: '',
    data:[],
    searchcs:'',
    headers: [
        { text: 'Nama CS', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Point', value: 'point', sortable: false, },
        { text: 'NOA', value: 'noa', sortable: false, },
        { text: 'Nominal', value: 'nominal', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    data_ao: [],
    data_reedemcs: [],
    headersreedemcs: [
        { text: 'Nama Mitra', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Produk Reedem', value: 'produk_reedem', sortable: false, },
        { text: 'Qty', value: 'qty', sortable: false, },
        { text: 'Point Reedem', value: 'reedem', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
  }),
  methods:{
    bukacs(){
        this.getcs()
        this.getreedemcsini()
    },
    getcs() {
        var iduser = [localStorage.id]
        axios
        .post(url.api+'historycs_ini', iduser)
        .then((res)=>{
            this.data_ao = res.data
            // console.log(res)//eslint-disable-line
        })
    },    
    getreedemcsini() {
        var iduser = [localStorage.id]
        axios
        .post(url.api+'historyreedemcs_ini', iduser)
        .then((res)=>{
            this.data_reedemcs = res.data
            // console.log(res)//eslint-disable-line
        })
    },
      
  },
  mounted () {
    
  },
computed:{

},
watch: {

},

    created(){
        this.bukacs()
    }
};
</script>

<style>
.tabpoint{
    margin-bottom: 10px;
}
.btnincs{
    margin-left: -25px;
    margin-bottom: 5px;
}
</style>