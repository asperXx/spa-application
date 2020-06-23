import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    router: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home.vue')
        },
        {
            path: '/ad/:id',
            name: 'ad',
            component: () => import('../components/Ads/Ad.vue')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('../components/Ads/AdList.vue')
        },
        {
            path: '/new',
            name: 'new',
            component: () => import('../components/Ads/NewAd.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Auth/Login.vue')
        },
        {
            path: '/registration',
            name: 'reg',
            component: () => import('../components/Auth/Registration.vue')
        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('../components/User/Orders.vue')
        },
    ],
    mode: 'history'
});