import Vue from 'vue';
import axios from 'axios';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { API_ROOT, MOBILE_APP } from './constants';

if (MOBILE_APP) {
  require('@mdi/font/scss/materialdesignicons.scss');
  require('roboto-fontface/css/roboto/sass/roboto-fontface.scss');
}

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

axios.defaults.baseURL = API_ROOT;

new Vue({ router, vuetify, render: h => h(App) }).$mount('#app');
