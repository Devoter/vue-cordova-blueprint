import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import { MOBILE_APP } from '@/constants';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = new VueRouter({ mode: MOBILE_APP ? 'hash' : 'history', routes });

export default router;
