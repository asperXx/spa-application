import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Vuetify from 'vuetify/lib';
import store from './store';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
