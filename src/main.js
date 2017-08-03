import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue';
import Products from './components/Products.vue';

const routes = [
  {
        name: 'Products',
        path: '/',
        component: Products
  }
];

var router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
