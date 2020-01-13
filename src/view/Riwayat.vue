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
                Point CS
                <v-icon>mdi-face-agent</v-icon>
            </v-tab>
            <v-tab href="#ao">
                Point AO
                <v-icon>mdi-face-agent</v-icon>
            </v-tab>
            <v-tab href="#tmitra">
                Point Mitra
                <v-icon>mdi-account-group</v-icon>
            </v-tab>
            <!-- <v-tab href="#treedem">
                Reedem Point Internal
                <v-icon>mdi-gift</v-icon>
            </v-tab>
            <v-tab href="#treedemexternal">
                Reedem Point External
                <v-icon>mdi-gift</v-icon>
            </v-tab> -->
        </v-tabs>
        </v-card>

        <!-- CS -->
        <v-tabs-items v-model="point_mitra">
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
                :items="data_cs"
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
        </v-tabs-items>

        <!-- AO -->
        <v-tabs-items v-model="point_mitra">
        <v-tab-item :value="'ao'">
            <v-card>
                <v-card-title>
                <v-row>
                    <v-col cols="6">
                        Riwayat AO 
                        <h5></h5>               
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            outlined
                            rounded
                            v-model="searchao"
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
                :search="searchao"
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

        <!-- MITRA -->
        <v-tabs-items v-model="point_mitra">
        <v-tab-item :value="'tmitra'">
            <v-card>
                <v-card-title>
                <v-row>
                    <v-col cols="6">
                        Point Mitra
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
                :headers="headersmitra"
                :items="data_mitra"
                :search="searchmitra"
                :mobile-breakpoint="100"
                :items-per-page="5"
                :footer-props="{
                    'items-per-page-text': '',
                }"
                >
                    <template v-slot:item.action="{ item }">
                        <v-btn
                            x-small
                            fab
                            outlined
                            color="success"
                        >
                            <v-icon
                                small
                                @click="editItem(item)"
                            >
                                mdi-check-circle
                            </v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:item.action2="{ item }">
                        <v-btn
                            x-small
                            fab
                            outlined
                            color="red"
                        >
                            <v-icon
                                small
                                @click="deleteItem(item)"
                            >
                                mdi-close-circle
                            </v-icon>
                        </v-btn>
                    </template>

                    <template v-slot:item.calories="{ item }">
                    <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
                    </template>
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
    data_mitra: [],
    keteranganmitra: '',
    idmitra:'',
    aksesmitra:'',
    isinamitra: '',
    componentsmitra: [],
    keterangancs: '',
    idcs:'',
    aksescs:'',
    components: [],
    isi:[],
    isina:'',
    showLoading: false,
    loading: true,
    edit: false,
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: '',
    data:[],
    searchcs:'',
    headers: [
        { text: 'Nama CS', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Point', value: 'point', sortable: false, },
        { text: 'NOA', value: 'noa', sortable: false, },
        { text: 'Nominal', value: 'nominal', sortable: false, },
        { text: 'Keterangan', value: 'keterangan', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    searchmitra:'',
    headersmitra: [
        { text: 'Nama Mitra', sortable: true, value: 'nama_mitra', },
        { text: 'Nama CS', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Point', value: 'point', sortable: false, },
        { text: 'NOA', value: 'noa', sortable: false, },
        { text: 'Nominal', value: 'nominal', sortable: false, },
        { text: 'Keterangan', value: 'keterangan', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    searchreedem:'',
    headersreedem: [
        { text: 'Nama', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Produk Reedem', value: 'produk_reedem', sortable: false, },
        { text: 'Qty', value: 'qty', sortable: false, },
        { text: 'Point Reedem', value: 'reedem', sortable: false, },
        { text: 'Status Reedem', value: 'status_pengajuan', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    data_cs: [],
    data_reedeminternal: [],
    searchreedeminternal: '',
    searchreedemexternal:'',
    headersreedemexternal: [
        { text: 'Nama Mitra', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Produk Reedem', value: 'produk_reedem', sortable: false, },
        { text: 'Qty', value: 'qty', sortable: false, },
        { text: 'Point Reedem', value: 'reedem', sortable: false, },
        { text: 'Status Reedem', value: 'status_pengajuan', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    data_reedemexternal: [],
    data_ao: [],
    searchao:'',
    headersao: [
        { text: 'Nama CS', sortable: true, value: 'name', },
        { text: 'Produk', value: 'produk', sortable: true, },
        { text: 'Point', value: 'point', sortable: false, },
        { text: 'NOA', value: 'noa', sortable: false, },
        { text: 'Nominal', value: 'nominal', sortable: false, },
        { text: 'Keterangan', value: 'keterangan', sortable: false, },
        { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
  }),
  methods:{
    bukacs(){
        // this.getreedemexternal()
        // this.getreedeminternal()
        this.getcs()
        this.getao()
        this.getmitra()
        // this.getdata_cs()
        // this.getdata_mitra()
    },
    getcs() {
        var idofficer = [localStorage.id]
        axios
        .post(url.api+'historycs', idofficer)
        .then((res)=>{
            this.data_cs = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    getao() {
        var idofficer = [localStorage.id]
        axios
        .post(url.api+'historyao', idofficer)
        .then((res)=>{
            this.data_ao = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    getmitra() {
        var idofficer = [localStorage.id]
        axios
        .post(url.api+'historymitra', idofficer)
        .then((res)=>{
            this.data_mitra = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    getreedeminternal() {
        var idofficer = [localStorage.unit]
        axios
        .post(url.api+'historyreedem', idofficer)
        .then((res)=>{
            this.data_reedeminternal = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    getreedemexternal() {
        var idofficer = [localStorage.unit]
        axios
        .post(url.api+'historyreedemexternal', idofficer)
        .then((res)=>{
            this.data_reedemexternal = res.data
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