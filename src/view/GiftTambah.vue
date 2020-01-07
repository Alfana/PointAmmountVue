<template>
    <v-container fluid>
      <v-card 
        elevation="7" 
        class="header" 
        height="50"
        >
            <v-list-item >
            <v-list-item-content>
            <v-list-item-title class="font-weight-black"><center v-text="'Tambah Hadiah '+judul"></center></v-list-item-title>
            </v-list-item-content>
            </v-list-item>        
      </v-card>
      <v-btn small class="ma-2" tile color="indigo" dark to="/giftdet">
        <v-icon left>mdi-keyboard-backspace</v-icon> Kembali
      </v-btn>

        <v-card elevation="3">
            <v-container>
            <!-- <h3>Tambah Mitra</h3> -->
                <v-form >
                <v-row>
                    <v-col
                    cols="12"
                    md="12"
                    >
                        <v-text-field
                        v-model="form.nama"
                        label="Nama Hadiah"
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="form.point"
                        label="Jumlah Point"
                        required
                        ></v-text-field> 
                        <v-file-input 
                            small-chips
                            show-size
                            counter
                            type="file"
                            dense
                            append-icon="mdi-image-plus"
                            accept="image/x-png,image/jpeg"
                            hint=".jpg atau .png" 
                            label="Gambar Produk"
                            clearable
                            prepend-icon=""
                            v-on:change="createImg"
                        ></v-file-input>
                        <v-card v-if="tampilFoto" elevation="0" class="text-center mt-5">
                            <img :src="tampilFoto" style="width:60%;">
                        </v-card>      
                    </v-col>
                </v-row>
                <v-btn @click="tambah()" class="success">Simpan</v-btn>
                <!-- <v-btn @click="mitra=false" class="error btl">Batal</v-btn> -->
                </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>


<script>
  import axios from 'axios'; //eslint-disable-line
  import url from '@/config'//eslint-disable-line
  export default {
    data: () => ({
    tampilFoto: null,
    form:{
        nama:'',
        point:'',
        gambar:'',
        produk: localStorage.produk,
    },
    link: url.gambar+'produk/',
    user: localStorage.akses,
    produk: localStorage.produk,
    judul: localStorage.produk,
    gift: [],
    reward: null,
    }),
    methods:{
        tambah(){
            axios
            .post(url.api+'thadiah', this.form)
            .then((res)=>{//eslint-disable-line
                // console.log(res)//eslint-disable-line
                this.$router.push('giftdet')
            })
        },
        createImg(e){
            var reader = new FileReader
            
            reader.onload = (e) => {
                this.form.gambar = e.target.result
            }
            
            if (e) {
                var foto = URL.createObjectURL(e)
                this.tampilFoto = foto
                reader.readAsDataURL(e)
                console.log("Foto Ditambahkan")//eslint-disable-line
            }else{
                this.tampilFoto = null
                console.log("Tidak ada foto yang dipilih")//eslint-disable-line
            }
        },
    },      
    created(){
        
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