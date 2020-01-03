<template>
  <v-app class="app">
        <v-card-text class="topNav">
           
           <v-bottom-sheet v-if="$route.name !== 'auth' ">
            <template v-slot:activator="{ on }">
              <v-row >
                <v-col class="text-left white--text">
                  <h3 class="title kananAtas">Halo Officer!,</h3>
                  <h3 class="title kananAtas"><small>Selamat Datang </small></h3>
                  <h3 class="title kananAtas"><small>di Point Reward</small></h3>
                </v-col>
                <v-col class="text-right">
                  <v-list-item-avatar class="user" v-on="on">
                    <v-img src="/78.jpg"></v-img>
                  </v-list-item-avatar> 
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
      <v-bottom-navigation
        v-if="$route.name !== 'auth' "
        style="position: fixed; bottom: 0px;"
        class="menuBawah"
        shift
        elevation="0"
      >
        <v-btn to="/">
          <span>Beranda</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>



        <!-- OFFICER -->
        <v-btn to="/inputpoint">
          <span>Input Point</span>
          <v-icon>mdi-file-document</v-icon>
        </v-btn>

        <v-btn to="/mitra">
          <span>Mitra</span>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>

        <v-btn to="/gift">
          <span>Hadiah</span>
          <v-icon>mdi-gift</v-icon>
        </v-btn>
        <!-- END OFFICER -->

        <!-- <v-btn to="/account">
          <span>Akun</span>
          <v-icon>mdi-account</v-icon>
        </v-btn> -->
      </v-bottom-navigation>
      <!-- menu bawah -->
      
  </v-app>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
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
      this.$router.push('auth');
      localStorage.clear();
    },
  }
  // created() {
  //   var self = this
  //   setTimeout(function()
  //   {
  //     self.$session.destroy()
  //     localStorage.clear();
  //     // this.$router.push('auth');
  //   },2000)
  // }
};
</script>
<style>
.user{
  margin-right: 15px!important;
}
.kananAtas{
  margin-left: 15px!important;
  font-size: 2px;
}
.menuBawah{
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 90%!important; 
  margin-left: 5%;
  z-index: 100;
}
.topNav{
  background-image: linear-gradient(to right,#8F63DE,#DA20A9);
  height: 23%;
}
.bgUtama{
  background-color: #f9f9f9;
}
</style>