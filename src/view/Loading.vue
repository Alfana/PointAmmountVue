<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
    >
      <v-img style="width: 100%; height:100%" src="/gambar/splash.png"></v-img>
    </v-dialog>

    <v-snackbar
      v-model="lgOk"
      color="success"
      :top="y === 'top'"
      :timeout="timeout"
    >
      {{ textOk }}
      
    </v-snackbar>
  </div>
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
        lgOk: false,
        textOk: 'Login Berhasil',
        timeout: 2000,
        x: null,
        y: 'top',
      }
    },
    created(){
      if (localStorage.popUp == 'belum') {
        this.dialog = true
        this.lgOk = true
        localStorage.popUp = 'sudah'
      }
    }
    
  }
</script>