<template>
    <v-container>
        <v-btn small class="ma-2" tile color="indigo" dark to="/detmitra">
            <v-icon left>mdi-keyboard-backspace</v-icon> Kembali
        </v-btn>
        <v-row dense>
        <v-col
          v-for="key in gift"
          :key="key.title"
          :cols="key.flex"
        >
          <v-card
          to="/detmitra"
          >
            <v-img
              :src="key.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"              
            >
            </v-img>
            <v-card-subtitle class="pb-0" v-text="key.title"></v-card-subtitle>
            <v-card-text class="text--primary" v-text="key.des"></v-card-text>            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
    gift: [
        { title: 'Beras 2KG', des:'10 Point', link:'/reedemmit' , src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
        { title: 'IPhone X', des:'10 Point', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Gantungan Kunci', des:'10 Point', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
    }),
  }
</script>

<style>
.header{
    margin-bottom: 10px;
}
</style>