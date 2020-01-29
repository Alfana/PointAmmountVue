<template>
    <v-container>
        <!-- PROFILE -->
        <v-btn small class="ma-2 kembali" tile color="primary" to="/pointcs">
            <v-icon left>mdi-keyboard-backspace</v-icon> Kembali
        </v-btn>
        <v-card
        class="profile"
        elevation="7"
        >
            <v-card-title v-text="'Detail Point : '+namacs">
            <v-spacer></v-spacer>
            </v-card-title>
            <!-- <v-devider></v-devider> -->
            <v-simple-table 
            fixed-header 
            height="350px"
            >
                <template v-slot:default>
                <tbody>
                    <tr v-for="item in detpoint" :key="item.name">
                        <td colspan="2">{{ item.produk }}</td>
                        <td>{{ item.point }} Point</td>
                        <td>
                            <v-btn x-small class="ma-2" tile color="indigo" dark @click="detailgift(item.produk, item.point)">
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
      namacs: localStorage.namacs,
      idcs: localStorage.id_cs,
      detpoint:[],
      search: '',
    }),
    methods:{
        detailgift(produk, maxpoint){
            localStorage.produk = produk
            localStorage.maxpoint = maxpoint
            localStorage.kembali = "detcs"
            this.$router.push('/reedemmit')
        },
        detcs() {
            var data = [localStorage.id_cs, localStorage.unit]
        //   var idofficer = [localStorage.id]
            axios
            .post(url.api+'detcs', data)
            .then((res)=>{
                this.detpoint = res.data
                // console.log(this.detpoint)//eslint-disable-line
            })
            
        },
    },
    created(){
        this.detcs()
    }
  }
</script>

<style>
.profile{
    margin-bottom: 15px;
}
</style>