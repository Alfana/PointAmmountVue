import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
          light: {
            iconAtas: colors.white,
            iconHome: colors.blue.darken1,
            homeAtas: '#f84100',
            homeBawah: '#f9d213',
            inputLogin: '#F4473B',
            btnedit: '#EF8E38',
            // icontext: '#2171A1',
            icontext: '#7F7F7F',
            iconbawah: '#2171A1',
          },
          dark: {
            iconAtas: colors.grey.darken3,
            iconHome: colors.white,
            homeAtas: '#f84100',
            homeBawah: '#f9d213',
            inputLogin: '#F4473B',
            
          },
        },
      },
});
