<template>
    <v-container class="text-center">
        <v-responsive class="text-center boxTop">
            <v-container class=" text-left">
                <v-card-text class="bRad py-0 px-3 bg">
                    <v-row>
                        <v-col> 
                            <h5 class="target">Target</h5>
                        </v-col>
                        <v-col> 
                            <h5 class="target">IDR 100.000.000,-</h5>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col> 
                            <h5 class="target">Capaian</h5>
                        </v-col>
                        <v-col> 
                            <h5 class="target">IDR 100.000.000,-</h5>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col> 
                            <h5 class="target">Prospek</h5>
                        </v-col>
                        <v-col> 
                            <h5 class="target">IDR 100.000.000,-</h5>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col> 
                            <h5 class="target">Realisasi</h5>
                        </v-col>
                        <v-col> 
                            <h5 class="target">IDR 100.000.000,-</h5>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-container>
        </v-responsive>
        <v-container>
            <v-card elevation="0">
                <v-container>
                <h3>Tambah User</h3>
                    <v-form v-model="valid">
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        >
                        <v-text-field
                            label="Nama"
                            required
                            placeholder="Nama"
                            v-model="form.name"
                        ></v-text-field>
                        <v-text-field
                            label="E-mail"
                            v-model="form.email"
                            required
                            placeholder="E-mail"
                        ></v-text-field>
                        <v-text-field
                            label="Password"
                            v-model="form.password"
                            required
                            placeholder="Password"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn @click="store()" class="success">Simpan</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </v-container>  
</template>
<script>
import axios from 'axios';
export default {
  name: 'Index',
  data: () => ({
    valid: false,
    sheet: false,
    inset: false,
    hideOverlay: false,
    form:{
        email:'',
        password:'',
        name:''
    },
  }),
  methods:{
      store() {
    axios.post('http://localhost:8000/api/store', this.form, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res)=>{
      if (res.status==201) {
          alert("berhasil")
      }else{
          alert("Gagal");
      }
    })
  }
  }
};
</script>

<style>
.bg{
    background: #ffffff;
    /* background-image: linear-gradient(#f84100, #f9d213); */
}
.bRad{
    border-radius: 6px
}
.target{
    font-size: 1rem!important;
    font-weight: 500;
    letter-spacing: .0125em!important;
    font-family: Roboto,sans-serif!important
}
</style>
