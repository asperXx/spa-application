import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

// const opts = {}

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
      iconfont1: 'mdiSvg',
      iconfont2: 'fa',
    },
  });