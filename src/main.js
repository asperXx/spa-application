import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Vuetify from 'vuetify/lib';
import store from './store/store.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


Vue.use(Vuetify);

Vue.config.productionTip = false;

firebase.initializeApp({
      apiKey: "AIzaSyCdvVjxVJdnbvc0oXyPZJ1jj_ccFEN5d5k",
      authDomain: "app-spa-asper.firebaseapp.com",
      databaseURL: "https://app-spa-asper.firebaseio.com",
      projectId: "app-spa-asper",
      storageBucket: "app-spa-asper.appspot.com",
      messagingSenderId: "238225514303",
      appId: "1:238225514303:web:4e4047712cd952b548fd8a",
      measurementId: "G-H03KH9KTWE"
    });

let app;

firebase.auth().onAuthStateChanged(() => {
if (!app) {
app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
}
});