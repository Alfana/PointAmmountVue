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
                <v-tab href="#pmitra">
                    Point Mitra
                    <v-icon>mdi-account-group</v-icon>
                </v-tab>
                <v-tab href="#mitra">
                    Input Point Mitra
                    <v-icon>mdi-file-document-box-plus</v-icon>
                </v-tab>
                <v-tab href="#tmitra">
                    Tambah Mitra
                    <v-icon>mdi-account-multiple-plus</v-icon>
                </v-tab>            
            </v-tabs>
        </v-card>

        <v-tabs-items v-model="point_mitra">
            <!-- POINT MITRA -->
            <v-tab-item :value="'pmitra'">
                <div
                v-for="(item, i) in datamitra"
                :key="i"
                >
                    <v-card 
                    elevation="3" 
                    class="mitracard" 
                    shaped
                    height="70"
                    @click="detailmitra(item.id_user, item.nama_mitra)"
                    >
                    <v-list-item >
                    <v-list-item-avatar color="iconbawah">
                        <v-icon dark>mdi-account-circle</v-icon>
                        <!-- <v-img v-if="point >= 30" :src="url.gambar+'rank/'+gambarRank[i]"></v-img> -->
                    </v-list-item-avatar>
                    
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-black">{{item.nama_mitra}}</v-list-item-title>
                        <v-list-item-subtitle class="font-weight-medium">{{item.point}} Point</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>        
                    </v-card>
                </div>
            </v-tab-item>

            <!-- MITRA -->
            <v-tab-item :value="'mitra'">
                <v-card elevation="3">
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
                                label="NOA"
                                v-model="noa"
                            ></v-text-field>
                            <v-text-field
                                label="Nominal"
                                v-model="nominal"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-btn @click="simpanmitra()" class="success">Simpan</v-btn>
                        </v-form>
                    </v-container>
                </v-card>
            </v-tab-item>

            <!-- TAMBAH MITRA -->
            <v-tab-item :value="'tmitra'">
                <v-card elevation="3">
                    <v-container>
                    <h3>Tambah Mitra</h3>
                        <v-form >
                        <v-row>
                            <v-col
                            cols="12"
                            md="12"
                            >
                                <v-text-field
                                v-model="form.nik"
                                label="NIK"
                                required
                                ></v-text-field>
                                <v-text-field
                                v-model="form.nama"
                                label="Nama"
                                required
                                ></v-text-field>
                                <p>Jenis Kelamin</p>
                                <v-radio-group 
                                v-model="form.jk" 
                                row
                                >
                                <v-radio label="Laki-Laki" value="Laki-Laki"></v-radio>
                                <v-radio label="Perempuan" value="Perempuan"></v-radio>
                                </v-radio-group>
                                <v-textarea
                                v-model="form.alamat"
                                color="cyan"
                                label="Alamat"
                                ></v-textarea>
                                <v-select
                                v-model="form.agama"
                                label="Agama"
                                :items="agama"
                                required
                                ></v-select>
                                <v-text-field
                                v-model="form.pekerjaan"
                                label="Pekerjaan"
                                required
                                ></v-text-field>                        
                            </v-col>
                        </v-row>
                        <v-btn @click="tambahmitra()" class="success">Simpan</v-btn>
                        <!-- <v-btn @click="mitra=false" class="error btl">Batal</v-btn> -->
                        </v-form>
                    </v-container>
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
    gambarRank:[
        "kuda.png",
        "kelinci.png",
    ],
    reedem: null,
    datamitra:[],
    idnasabah: '',
    noa: '',
    nominal: '',
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
    datacs: ['CS 1', 'CS 2', 'CS 3'],
    dmitra: ['Mitra 1', 'Mitra 2', 'Mitra 3'],
    agama: ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Budha'],
    pointcs: ['Penerbitan ATM', 'Aktivasi BJB Digi', 'Deposito', 'Giro', 'Tabungan', 'Bancassurance', 'DPLK', 'Simpel', 'Credit Card', 'Reksadana', 'T-Samsat', 'Western Union', 'Kerjasama Sekolah', 'Pembayaran Lainnya'],
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
    form:{
        nik:'',
        nama:'',
        jk:'',
        alamat:'',
        agama:'',
        pekerjaan:''
    },
  }),
  methods:{
    detailmitra(idmitra, namamitra){
        localStorage.id_mitra = idmitra
        localStorage.namamitra = namamitra
        // localStorage.tabledetail = "mitra"
        this.$router.push('/detmitra')
    },
    getpointmitra() {
        var idofficer = [localStorage.id]
        axios
        .post(url.api+'allpointmitra', idofficer)
        .then((res)=>{
            this.datamitra = res.data
            // console.log(res)//eslint-disable-line
        })
    },
    bukacs(){
        // this.getcs()
        // this.getmitra()
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
          var namamit = [this.isinamitra]
        //   alert(namamit)
        axios
        .post(url.api+'ambilmitra', namamit)
        .then((res)=>{
            this.idmitra = res.data[0].id_mitra
            this.aksesmitra = res.data[0].akses
        })
    },
    ambilnasabah(){
          var nama = [this.model]
        //   alert(nama)
        axios
        .post(url.api+'ambilnasabah', nama)
        .then((res)=>{
            this.idnasabah = res.data[0].id
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

        var namanasabah = this.model.id
        var namamitra = this.isinamitra
        var namacs = this.isina
        var produk = this.produk
        var idmitra = this.idmitra
        var jabatan = this.aksesmitra
        var idofficer = localStorage.id
        var idcs = this.idcs
        var jabatancs = this.aksescs
        var noa = this.noa
        var nominal = this.nominal
        // var ket = this.keteranganmitra
        // var idnasabah = this.idnasabah
        const data = [
            namamitra,
            namacs,
            namanasabah,
            produk,
            idmitra,
            jabatan,
            idofficer,
            idcs,
            noa,
            nominal,
            jabatancs
        ] 
        //   console.log(data);//eslint-disable-line
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
                this.noa = ''
                this.nominal = ''
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
    tambahmitra (){
        var id_officer = localStorage.id
        const data = [
            this.form.nik,
            this.form.nama,
            this.form.jk,
            this.form.alamat,
            this.form.agama,
            this.form.pekerjaan,
            id_officer
        ]
        // alert(data);
        axios
        .post(url.api+'Imitra', data)
        .then((res)=>{
            if (res.status==200) {
                // alert(res.data.Pesan)//eslint-disable-line
                alert("Data Berhasil Disimpan")//eslint-disable-line
                this.form.nik = ''
                this.form.nama = ''
                this.form.jk = ''
                this.form.alamat = ''
                this.form.agama = ''
                this.form.pekerjaan = ''
            }
            this.bukacs()
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
            const Nama = entry.nama
        //   const Nama = entry.Nama.length > this.descriptionLimit
        //     ? entry.Nama.slice(0, this.descriptionLimit) + '...'
        //     : entry.Nama;

            // +" - "+entry.Tanggal_lahir

        //   const Isi = [entry.id]; //jika ingin dipilih per item
          
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
        fetch(url.api+'data_nasabah')
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
        this.getpointmitra()
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