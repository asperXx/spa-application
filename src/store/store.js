import Vue from 'vue';
import Vuex from 'vuex';
import ads from './ads';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store ({
    modules: {
        ads,auth
    }
});