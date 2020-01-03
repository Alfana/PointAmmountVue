<template>
  <v-app class="app">
        <v-system-bar
          v-if="$route.name !== 'auth' && $route.name !== 'awal' "
          class="sisbar white--text"
          height="25"
          :lights-out="lightsOut"
          :window="window"
          fixed
        >
          <!-- <v-icon color="white">mdi-apps</v-icon> -->
          <span>BJB Point Reward</span>
          <v-spacer></v-spacer>
          <!-- <span id="jam"></span> -->
          <v-spacer></v-spacer>
          <span>{{unit}}</span>
        </v-system-bar>
        
        <v-card-text class="topNav mt-6">
           
           <v-bottom-sheet v-if="$route.name !== 'auth'">
            <template v-slot:activator="{ on }">
              <v-row style="margin-top:-10px">
                <v-col class="text-left white--text">
                  <h3 class="kananAtas"><small>{{waktu}}</small></h3>
                  <h2 class="kananAtas">{{user}}</h2>
                </v-col>
                <v-col class="text-right">
                  <v-avatar color="" style="cursor:pointer" v-on="on" size="40">
                    <v-icon large dark>mdi-account-circle</v-icon>
                    <!-- <v-img src="/gambar/78.jpg"></v-img> -->
                  </v-avatar>
                </v-col>
              </v-row>
            </template> 
          <v-sheet  height="auto">
                <v-list-item
                  v-for="item in menu"
                  :key="item.title"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
              
                  <v-list-item-content>
                    <v-list-item-title @click="logout()">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
          </v-sheet>
        </v-bottom-sheet>
        </v-card-text>


          <router-view class="mb-12 bgUtama"/>
      
      <!-- menu bawah   -->
      <!-- MENU OFFICER -->
      <v-bottom-navigation
        v-if="$route.name !== 'auth' && akses == 1"
        style="position: fixed; bottom: 0px;"
        class="menuBawah"
        harizontal
        elevation="0"
        color="iconbawah"
      >
        <v-btn to="/">
          <span>Beranda</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="">
          <span>Pringkat KCP</span>
          <v-icon>mdi-crown</v-icon>
        </v-btn>

        <!-- <v-btn to="/mitra">
          <span>Reedem</span>
          <v-icon>mdi-coin</v-icon>
        </v-btn> -->

        <!-- <v-btn to="/gift">
          <span>Hadiah</span>
          <v-icon>mdi-gift</v-icon>
        </v-btn> -->

        <v-btn to="/account">
          <span>Akun</span>
          <v-icon>mdi-file-document</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <!-- MENU CS -->
      <v-bottom-navigation
        v-if="$route.name !== 'auth' && akses == 2"
        style="position: fixed; bottom: 0px;"
        class="menuBawah"
        harizontal
        elevation="0"
        color="iconbawah"
      >
        <v-btn to="/">
          <span>Beranda</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn to="">
          <span>Pringkat KCP</span>
          <v-icon>mdi-crown</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <!-- MENU AO -->
      <v-bottom-navigation
        v-if="$route.name !== 'auth' && akses == 4"
        style="position: fixed; bottom: 0px;"
        class="menuBawah"
        harizontal
        elevation="0"
        color="iconbawah"
      >
        <v-btn to="/">
          <span>Beranda</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn to="">
          <span>Pringkat KCP</span>
          <v-icon>mdi-crown</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <!-- MENU ADMIN -->
      <v-bottom-navigation
        v-if="$route.name !== 'auth' && akses == 0"
        style="position: fixed; bottom: 0px;"
        class="menuBawah"
        harizontal
        elevation="0"
        color="iconbawah"
      >
        <v-btn to="/">
          <span>Beranda</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn to="">
          <span>Pringkat KCP</span>
          <v-icon>mdi-crown</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <!-- menu bawah -->
      
  </v-app>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    lightsOut: false,
    window: false,
    akses: localStorage.akses,
    waktu:'',
    user: localStorage.name,
    unit: localStorage.unit,
    sheet: false,
    inset: false,
    hideOverlay: false,
    menu: [
      { title: 'Logout', icon: 'mdi-logout' },
    ],
  }),
  methods:{
    logout(){
      this.$session.destroy();
      localStorage.clear();
      this.$router.push('Auth');
    },
  },
  created() {
    // var myVar = setInterval(myTimer, 1000);//eslint-disable-line
  
    // function myTimer() {//eslint-disable-line
    //   var d = new Date();
    //   document.getElementById("jam").innerHTML = d.toLocaleTimeString('en-GB');
    // }
    
    var today = new Date()
    var curHr = today.getHours()
    if (curHr >= 4 && curHr < 10) {
      this.waktu = 'Selamat Pagi'
    } else if (curHr >= 10 && curHr < 14) {
      this.waktu = 'Selamat Siang'
    } else if (curHr >= 14 && curHr < 18) {
      this.waktu = 'Selamat Sore'
    } else {
      this.waktu = 'Selamat Malam'
    }
    
    // setting timeout login 2 jam
    var self = this
    var waktu = 2 * 60 * 60 * 1000
    setTimeout(function()
    {
      self.$session.destroy()
      localStorage.clear();
      location.reload()
    },waktu)
    // setting timeout login 2 jam
  }
};
</script>
<style>
.user{
  margin-right: 15px!important;
}
.kananAtas{
  margin-left: 15px!important;
}
.menuBawah{
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 90%!important; 
  margin-left: 5%;
}
.topNav{
  background-image: linear-gradient(to right,#2171A1,#CCB223);
  height: 90px;
  margin-top: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.topNav2{
  background-image: linear-gradient(to right,#2171A1,#CCB223);
  height: 7%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.sisbar{
  background-image: linear-gradient(to right,#2171A1,#CCB223);
}
.bgUtama{
  background-color: #f9f9f9;
}
</style>