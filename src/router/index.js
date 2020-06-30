import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/Home')
        },
        {
            path: '/ad/:id',
            props: true,
            name: 'ad',
            component: () => import('@/components/Ads/Ad')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('@/components/Ads/AdList')
        },
        {
            path: '/new',
            name: 'new',
            component: () => import('@/components/Ads/NewAd')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/components/Auth/Login')
        },
        {
            path: '/registration',
            name: 'reg',
            component: () => import('@/components/Auth/Registration')
        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('@/components/User/Orders')
        },
    ],

});