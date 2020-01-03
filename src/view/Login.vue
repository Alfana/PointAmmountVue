<template>
  <v-container
    class="lgForm"
    fluid
  >
    <v-form v-model="valid" @submit.prevent="login()" id="check-login-form">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <v-card-text class="logoLogin">
          <v-container>
            <v-container>
              <v-img class="" src="/gambar/reward.png"></v-img>
            </v-container>
          </v-container>
        </v-card-text>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="4"
      >
        <v-card-text>
            <v-text-field
              label="E-mail"
              :rules="emailRules"
              v-model="form.email"
              type="email"
              required
              outlined
              :clearable="true"
              rounded
            />

            <v-text-field
              label="Password"
              v-model="form.password"
              required
              rounded
              :rules="passwordRules"
              outlined
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              :type="show ? 'text' : 'password'"
            />      
          <v-btn 
            :disabled="!valid"
            type="submit" 
            class="btnLogin" 
            dark 
            form="check-login-form"
            elevation="0"
            :loading="load"
            rounded
          >
            Masuk
          </v-btn>
        </v-card-text>
     
      </v-col>
    </v-row>
    </v-form>

    <v-snackbar
      v-model="lgFail"
      color="red"
      :top="y === 'top'"
    >
      {{ textFail }}
      <v-btn
        dark
        text
        @click="lgFail = false;load = false"
      >
        Ok
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  import axios from 'axios'; //eslint-disable-line
  import url from '@/config'//eslint-disable-line
export default {
  name:'Login',
  data() {
    return {
      load:false,
      show: false,
      color: 'success',
      lgFail: '',
      textFail: 'Username atau Password salah',
      timeout: 3000,
      x: null,
      y: 'top',
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail harus diisi',
        v => /.+@.+/.test(v) || 'E-mail tidak valid',
      ],
      lastname: '',
      // passwordRules: [
      //   v => !!v || 'Password harus diisi',
      //   v => v.length >= 8 || 'Password harus lebih dari 8 karakter',
      // ],
      form:{
        email:'',
        password:''
      },
      postBody: '',
      errors: []
    }
  },
  methods:{
  login() {
    this.load = true
    axios.post(url.api+'login', this.form, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res)=>{
      if (res.status==200) {
        if (res.data.status==1) {

          let user = res.data.data;//eslint-disable-line
          this.$session.start()
          this.$session.set('api_token', user.api_token)
          localStorage.sess = this.$session.get('session-id')
          localStorage.token = user.api_token
          localStorage.id = user.id
          localStorage.akses = user.akses
          localStorage.name = user.name
          localStorage.unit = user.unit
          localStorage.id_officer = user.id_officer
          localStorage.popUp = 'belum'
          location.reload();
          // window.open('http://www.google.com')
          // this.$router.push('home')
          
        }else{
          this.lgFail = true
          this.load = false
        }
      }else{
          alert("Login Gagal");
      }
    })
  }
  }
}
</script>

<style>
.lgForm{
  position: fixed;
  max-width: 100vw;
  height: 100%;
  background-color: #ffffff;
}
.btnLogin{
  width: 100%;
  height: 50px!important;
  background-image: linear-gradient(to right,#00418A,#FFD400);
}
.logoLogin{
  margin-top: 15%;
}
</style>