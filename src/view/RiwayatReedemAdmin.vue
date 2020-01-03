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
        centered
        v-model="point_mitra"
        >
            <v-tabs-slider></v-tabs-slider>
            <!-- <v-tab href="#mitra">
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
            </v-tab> -->
            <v-tab href="#treedem">
                Reedem Internal
                <v-icon>mdi-gift</v-icon>
            </v-tab>
            <v-tab href="#treedemexternal">
                Reedem External
                <v-icon>mdi-gift</v-icon>
            </v-tab>
        </v-tabs>
        </v-card>

        <v-tabs-items v-model="point_mitra">

        <!-- REEDEM INTERNAL-->
        <v-tab-item :value="'treedem'">
            <v-card>
                <v-card-title>
                <v-row>
                    <v-col cols="6">
                        Reedem
                        <h5>Internal</h5>                
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            outlined
                            rounded
                            v-model="searchreedeminternal"
                            label="Cari data"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                </v-card-title>

                <v-data-table
                :headers="headersreedem"
                :items="data_reedeminternal"
                :search="searchreedeminternal"
                :mobile-breakpoint="100"
                :items-per-page="5"
                :footer-props="{
                    'items-per-page-text': '',
                }"
                >
                <template v-slot:item.status_pengajuan="{ item }">
                    <v-chip v-if="item.status_pengajuan==0" color="primary" small dark>Pengajuan Reedem</v-chip>
                    <v-chip v-if="item.status_pengajuan==1" color="warning" small dark>Disetujui</v-chip>
                    <v-chip v-if="item.status_pengajuan==2" color="red" small dark>Ditolak</v-chip>
                    <v-chip v-if="item.status_pengajuan==3" color="success" small dark>Disampaikan</v-chip>
                </template>
                <template v-slot:item.aksi="{ item }">
                    <v-btn
                        x-small
                        fab
                        outlined
                        color="success"
                        v-if="item.status_pengajuan==0"
                        @click="setuju(item.id_point)"
                    >
                        <v-icon small>mdi-check-circle</v-icon>
                    </v-btn>
                    <v-btn
                        x-small
                        fab
                        outlined
                        color="red"
                        v-if="item.status_pengajuan==0"
                        @click="tolak(item.id_point, item.reedem)"
                    >
                        <v-icon small>mdi-close-circle</v-icon>
                    </v-btn>
                </template>
                </v-data-table>
            </v-card>
        </v-tab-item>

        <!-- REEDEM EXTERNAL-->
        <v-tab-item :value="'treedemexternal'">
            <v-card>
                <v-card-title>
                <v-row>
                    <v-col cols="6">
                        Reedem
                        <h5>External</h5>                
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            dense
                            outlined
                            rounded
                            v-model="searchreedemexternal"
                            label="Cari data"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                </v-card-title>

                <v-data-table
                :headers="headersreedemexternal"
                :items="data_reedemexternal"
                :search="searchreedemexternal"
                :mobile-breakpoint="100"
                :items-per-page="5"
                :footer-props="{
                    'items-per-page-text': '',
                }"
                >
                <template v-slot:item.status_pengajuan="{ item }">
                    <v-chip v-if="item.status_pengajuan==0" color="primary" small dark>Pengajuan Reedem</v-chip>
                    <v-chip v-if="item.status_pengajuan==1" color="warning" small dark>Disetujui</v-chip>
                    <v-chip v-if="item.status_pengajuan==2" color="red" small dark>Ditolak</v-chip>
                    <v-chip v-if="item.status_pengajuan==3" color="success" small dark>Disampaikan</v-chip>
                </template>
                <template v-slot:item.aksi="{ item }">
                    <v-btn
                        x-small
                        fab
                        outlined
                        color="success"
                        v-if="item.status_pengajuan==0"
                        @click="setuju(item.id_point)"
                    >
                        <v-icon small>mdi-check-circle</v-icon>
                    </v-btn>
                    <v-btn
                        x-small
                        fab
                        outlined
                        color="red"
                        v-if="item.status_pengajuan==0"
                        @click="tolak(item.id_point, item.reedem)"
                    >
                        <v-icon small>mdi-close-circle</v-icon>
                    </v-btn>
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
        { text: 'Aksi', value: 'aksi', sortable: true, },
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
        { text: 'Aksi', value: 'aksi', sortable: true, },
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
        this.getreedemexternal()
        this.getreedeminternal()
        // this.getcs()
        // this.getao()
        // this.getmitra()
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
        // var idofficer = [localStorage.id]
        axios
        .post(url.api+'historyreedem_admin')
        .then((res)=>{
            this.data_reedeminternal = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    getreedemexternal() {
        // var idofficer = [localStorage.id]
        axios
        .post(url.api+'historyreedemexternal_admin')
        .then((res)=>{
            this.data_reedemexternal = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    setuju(id){
        var id_point = [id]
        axios
        .post(url.api+'setuju', id_point)
        .then((res)=>{//eslint-disable-line
            this.bukacs()
        })
    },
    tolak(id, reedem){
        var ket = "Refund Point"
        var data = [id, reedem, ket]
        axios
        .post(url.api+'tolak', data)
        .then((res)=>{//eslint-disable-line
            this.bukacs()
        })
    }
      
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