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
          <v-img class="" src="/gambar/icon.png"></v-img>
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
              />

              <v-text-field
                label="Password"
                v-model="form.password"
                required
                :rules="passwordRules"
                outlined
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                :type="show ? 'text' : 'password'"
              />      
            <v-btn 
              type="submit" 
              class="btnLogin" 
              dark 
              form="check-login-form"
              elevation="0"
            >
              Masuk
            </v-btn>
          </v-card-text>
     
      </v-col>
    </v-row>
    </v-form>

    <v-snackbar
      v-model="lgOk"
      :color="color"
      :top="y === 'top'"
    >
      {{ textOk }}
      <v-btn
        dark
        text
        @click="lgOk = false"
      >
        Ok
      </v-btn>
    </v-snackbar>

    <v-snackbar
      v-model="lgFail"
      color="red"
      :top="y === 'top'"
    >
      {{ textFail }}
      <v-btn
        dark
        text
        @click="lgFail = false"
      >
        Ok
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      show: false,
      color: 'success',
      lgOk: '',
      lgFail: '',
      textOk: 'Login Berhasil',
      textFail: 'Username atau Password salah',
      timeout: 3000,
      x: null,
      y: 'top',
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail harus diisi',
        v => /.+@.+./.test(v) || 'E-mail tidak valid',
      ],
      lastname: '',
      passwordRules: [
        v => !!v || 'Password harus diisi',
        v => v.length >= 8 || 'Password harus lebih dari 8 karakter',
      ],
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
    axios.post('http://localhost:8000/api/login', this.form, {
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
          localStorage.popUp = 'belum'
          this.$router.push('home')
          
        }else{
          this.lgFail = true
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
  background-image: linear-gradient(to right,#F4473B,#EBB335)
}
.logoLogin{
  margin-top: 15%
}
</style>