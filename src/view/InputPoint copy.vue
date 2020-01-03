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
        >
            <v-tabs-slider></v-tabs-slider>
            <v-tab @click="cs=true, mitra=false, inputcs=false, inputmitra=false, tabcs=true">
                Point CS
                <v-icon>mdi-face-agent</v-icon>
            </v-tab>
            <v-tab @click="cs=false, mitra=true, inputcs=false, inputmitra=false, tabcs=false">
                Point Mitra
                <v-icon>mdi-account-group</v-icon>
            </v-tab>

            <v-tab v-show="tabcs" @click="inputcs=true, inputmitra=false, cs=false, mitra=false">
                Tambah Point
                <v-icon>mdi-plus</v-icon>
            </v-tab>
            <v-tab v-show="!tabcs" @click="inputcs=false, inputmitra=true, cs=false, mitra=false">
                Tambah Point
                <v-icon>mdi-plus</v-icon>
            </v-tab>
        </v-tabs>
        </v-card>
        
        <!-- CS -->
        <v-card elevation="3" v-show="inputcs">
            <v-container>
            <h3>Input Point CS</h3>
                <v-form>
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >                    
                    <v-autocomplete
                    label="Nama CS"
                    :items="components"
                    @change="ambilcs()"
                    v-model="isina"
                    ></v-autocomplete>
                    <v-autocomplete
                        v-model="model"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="secondary"
                        hide-no-data
                        hide-selected
                        item-text="Nama"
                        item-value="API"
                        label="Data Nasabah"
                        placeholder="Ketik untuk cari"
                    ></v-autocomplete>
                    <v-select
                        v-model="produk"                        
                        :items="pointcs"
                        label="Produk"
                    ></v-select>
                    <v-text-field
                    label="Keterangan"
                    v-model="keterangancs"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn class="success" @click="simpancs()">Simpan</v-btn>
                </v-form>
            </v-container>
        </v-card>
        <!-- TABEL CS  -->
        <v-card v-show="cs">
            <v-card-title>
            <v-row>
                <v-col cols="6">
                    Riwayat Point  
                    <h5>CS</h5>               
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


        <!-- MITRA -->
        <v-card elevation="3" v-show="inputmitra">
            <v-container>
            <h3>Input Point Mitra</h3>
                <v-form >
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                    <v-autocomplete
                        label="Nama Mitra"
                        :items="componentsmitra"
                        @change="ambilmitra()"
                        v-model="isinamitra"
                    ></v-autocomplete>
                    <!-- <v-select
                        label="Nama Mitra"
                        :items="dmitra"
                        required
                    ></v-select> -->
                    <v-autocomplete
                        label="Nama CS"
                        :items="components"
                        @change="ambilcs()"
                        v-model="isina"
                    ></v-autocomplete>
                    <v-autocomplete
                        v-model="model"
                        :items="items"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="secondary"
                        hide-no-data
                        hide-selected
                        item-text="Nama"
                        item-value="API"
                        label="Data Nasabah"
                        placeholder="Ketik untuk cari"
                        return-object
                    ></v-autocomplete>
                    <v-select
                        v-model="produk"                        
                        :items="pointcs"
                        label="Produk"
                    ></v-select>
                    <v-text-field
                        label="Keterangan"
                        v-model="keteranganmitra"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn @click="simpanmitra()" class="success">Simpan</v-btn>
                </v-form>
            </v-container>
        </v-card>
        <!-- TABEL MITRA  -->
        <v-card v-show="mitra">
            <v-card-title>
            <v-row>
                <v-col cols="6">
                    Riwayat Point
                    <h5>Mitra</h5>                
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


    </v-container>

    

    


</template>


<script>
import axios from 'axios'; //eslint-disable-line
import url from '@/config'
export default {
  name: 'Index',
  data: () => ({
    data_mitra: [],
    keteranganmitra: '',
    idmitra:'',
    aksesmitra:'',
    isinamitra: '',
    componentsmitra: [],
    keterangancs: '',
    idcs:'',
    aksescs:'',
    produk: '',
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
    cs: true,
    mitra: false,
    inputcs: false,
    inputmitra: false,
    tabcs:true,
    form:{
        id:'',
        email:'',
        password:'',
        name:''
    },
    datacs: ['CS 1', 'CS 2', 'CS 3'],
    dmitra: ['Mitra 1', 'Mitra 2', 'Mitra 3'],
    pointcs: ['Kredit', 'Penerbitan ATM', 'Aktivasi BJB DIGI', 'Western Union', 'Bancasurance', 'T Samsat', 'Kartu Kredit', 'Kerjasama Sekolah', 'Pembayaran Lainnya'],
    pointmitra: ['Kredit', 'Penerbitan ATM', 'Aktivasi BJB DIGI', 'Western Union', 'Bancasurance', 'T Samsat', 'Kartu Kredit', 'Kerjasama Sekolah', 'Pembayaran Lainnya'],
    searchcs:'',
    headers: [
          { text: 'Nama CS', sortable: true, value: 'name', },
          { text: 'Produk', value: 'produk', sortable: true, },
          { text: 'Point', value: 'point', sortable: false, },
          { text: 'Keterangan', value: 'des', sortable: false, },
          { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    searchmitra:'',
    headersmitra: [
          { text: 'Nama Mitra', sortable: true, value: 'nama_mitra', },
          { text: 'Nama CS', sortable: true, value: 'name', },
          { text: 'Produk', value: 'produk', sortable: true, },
          { text: 'Point', value: 'point', sortable: false, },
          { text: 'Keterangan', value: 'des', sortable: false, },
          { text: 'Tanggal', value: 'tanggal', sortable: true, },
        ],
    data_cs: [],
  }),
  methods:{
      bukacs(){
        this.getcs()
        this.getmitra()
        this.getdata_cs()
        this.getdata_mitra()
      },
      ambilcs(){
          var nama = [this.isina]
        //   alert(nama)
          axios
            .post(url.api+'ambilcs', nama)
            .then((res)=>{
                this.idcs = res.data[0].id
                this.aksescs = res.data[0].akses
                // console.log(this.idcs)//eslint-disable-line
            })
      },
      ambilmitra(){
        //   var nama = [this.isinamitra]
        //   alert(nama)
          axios
            .get(url.api+'ambilmitra')
            .then((res)=>{
                this.idmitra = res.data[0].id_mitra
                this.aksesmitra = res.data[0].akses
                // console.log(this.idcs)//eslint-disable-line
            })
      },
      simpancs (){
          var namacs = this.isina
          var namanasabah = this.model
          var produk = this.produk
          var idcs = this.idcs
          var jabatan = this.aksescs
          var ket = this.keterangancs
          var idofficer = localStorage.id
          const data = [
              namacs,
              namanasabah,
              produk,
              idcs,
              jabatan,
              ket,
              idofficer
          ] 
        //   alert(data);
          axios
            .post(url.api+'Ipointcs', data)
            .then((res)=>{
                if (res.status==200) {
                    // alert(res.data.Pesan)//eslint-disable-line
                    alert("Data Berhasil Disimpan")//eslint-disable-line
                    this.isina = ''
                    this.model = ''
                    this.produk = ''
                    this.keterangancs = ''
                }else{
                    alert("Data Gagal Disimpan")//eslint-disable-line
                }
            })

            this.bukacs()
      },
      simpanmitra (){
          var namamitra = this.isinamitra
          var namacs = this.isina
          var namanasabah = this.model
          var produk = this.produk
          var idmitra = this.idmitra
          var jabatan = this.aksesmitra
          var ket = this.keteranganmitra
          var idofficer = localStorage.id
          var idcs = this.idcs
          var jabatancs = this.aksescs
          const data = [
              namamitra,
              namacs,
              namanasabah,
              produk,
              ket,
              idmitra,
              jabatan,
              idofficer,
              idcs,
              jabatancs
          ] 
        //   alert(data);
          axios
            .post(url.api+'Ipointmitra', data)
            .then((res)=>{
                if (res.status==200) {
                    // alert(res.data.Pesan)//eslint-disable-line
                    alert("Data Berhasil Disimpan")//eslint-disable-line
                    this.isinamitra = ''
                    this.isina = ''
                    this.model = ''
                    this.produk = ''
                    this.keteranganmitra = ''
                }
            })
            
            this.bukacs()
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
      getmitra() {
          var idofficer = [localStorage.id]
            axios
            .post(url.api+'historymitra', idofficer)
            .then((res)=>{
                this.data_mitra = res.data
                // console.log(res)//eslint-disable-line
            })
        },
      external(){
          
      },
        getdata_cs(){
            var id = [localStorage.id]
            axios
                .post(url.api+'data_cs', id)
                .then((res)=>{
                    var data = []
                    for (let i = 0; i < res.data.length; i++) {
                        
                        data.push(res.data[i].name)
                        
                    }
                    this.components = data
                        // console.log(res.data)//eslint-disable-line


                })
        },
        getdata_mitra(){
            // var id = [localStorage.id]
            axios
                .get(url.api+'data_mitra')
                .then((res)=>{
                    var data = []
                    for (let i = 0; i < res.data.datamitra.length; i++) {
                        
                        data.push(res.data.datamitra[i].nama_mitra)
                        
                    }
                    this.componentsmitra = data
                        // console.log(res.data.datamitra[0])//eslint-disable-line


                })
        },
      
  },
  mounted () {
    
  },
  computed:{
      fields () {
        if (!this.model) return [];
        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || '-',
          }
        })
      },
      items () {
          return this.entries.map(entry => {
          const Nama = entry.Nama.length > this.descriptionLimit
            ? entry.Nama.slice(0, this.descriptionLimit) + '...'
            : entry.Nama;

            // +" - "+entry.Tanggal_lahir

          // const Isi = [entry.CIF, entry.Nama, entry.Alamat, entry.Tanggal_lahir]; //jika ingin dipilih per item
          
          return Object.assign({}, entry, { Nama })
        })
      },
  },
watch: {
    search () {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true
        this.tombol = true       

        // Lazily load input items
        fetch('http://localhost:8000/api/data_nasabah')
          .then(res => res.json())
          .then(res => {
              const { data_nasabah } = res
            this.entries = data_nasabah
            
          })
          .catch(err => {
            console.log(err);// eslint-disable-line
          })
          .finally(() => (this.isLoading = false))
        },
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