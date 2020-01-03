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
        <v-container v-show="!edit">
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

        <v-container v-show="edit">
            <v-card elevation="0">
                <v-container>
                <h3 >Edit User</h3>
                    <v-form v-model="valid">
                    <v-row>
                        <v-col
                        cols="12"
                        md="12"
                        >
                        <v-text-field 
                            v-model="form.id"
                            readonly
                        >
                        </v-text-field>
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
                        <!-- <v-text-field
                            label="Password"
                            v-model="form.password"
                            required
                            placeholder="Password"
                        ></v-text-field> -->
                        </v-col>
                    </v-row>
                    <v-btn @click="edit=false" class="red">Batal</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="update()" class="success">Simpan</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>

        <v-container>
            <v-simple-table fixed-header height="300px">
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">Nama</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Terakhir Update</th>
                    <th class="text-left">Aksi</th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data,i) in data_user" :key="i">
                        <td>{{ data.name }}</td>
                        <td>{{ data.email }}</td>
                        <td>{{ data.updated_at }}</td>
                        <td>
                            <v-icon medium @click="edit=true, ubah(data)" color="btnedit">mdi-pencil</v-icon>
                            <v-icon medium @click="hapus(data)" color="btnedit">mdi-pencil</v-icon>
                        </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
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
    edit: false,
    hideOverlay: false,
    form:{
        id:'',
        email:'',
        password:'',
        name:''
    },
    data_user:[],
      
  }),
  methods:{
      hapus(data){
        axios.post('http://localhost:8000/api/hapus', data.id, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(
           
        )
      },
      ubah(data){ //eslint-disable-line
        this.form.name = data.name
        this.form.email = data.email
        this.form.id = data.id     
      },
      update(){
        axios.post('http://localhost:8000/api/update', this.form, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        })
      },
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
  },
  mounted () {
    axios.get('http://localhost:8000/api/data_user')
      .then((res)=>{
          this.data_user = res.data.user
          
    })
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
