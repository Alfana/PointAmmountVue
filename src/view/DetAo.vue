<template>
    <v-container>
        <!-- PROFILE -->
        <v-btn small class="ma-2 kembali" tile color="primary" to="/pointao">
            <v-icon left>mdi-keyboard-backspace</v-icon> Kembali
        </v-btn>
        <v-card
        class="profile"
        elevation="7"
        >
            <v-card-title v-text="'Detail Point : '+namaao">
            <v-spacer></v-spacer>
            </v-card-title>
            <!-- <v-devider></v-devider> -->
            <v-simple-table 
            fixed-header 
            height="250px"
            >
                <template v-slot:default>
                <tbody>
                    <tr v-for="item in detpoint" :key="item.name">
                        <td colspan="2">Loan </td>
                        <td>{{ item.point }} Point</td>
                        <td>
                            <v-btn x-small class="ma-2" tile color="indigo" dark @click="detailgift(item.point)">
                                Tukar Point
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card>
        
    </v-container>
</template>


<script>
import axios from 'axios'; //eslint-disable-line
import url from '@/config'
  export default {
    data: () => ({
      namaao: localStorage.namaao,
      idao: localStorage.id_ao,
      detpoint:[],
      search: '',
    }),
    methods:{
        detailgift(maxpoint){
            localStorage.produk = "Loan"
            localStorage.maxpoint = maxpoint
            localStorage.kembali = "detao"
            this.$router.push('/reedemmit')
        },
        detao() {
            var data = [localStorage.id_ao, localStorage.id]
        //   var idofficer = [localStorage.id]
            axios
            .post(url.api+'detao', data)
            .then((res)=>{
                this.detpoint = res.data
                // console.log(this.detpoint)//eslint-disable-line
            })
            
        },
    },
    created(){
        this.detao()
    }
  }
</script>

<style>
.profile{
    margin-bottom: 15px;
}
</style>