/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Currency field mask
import { VTextField } from 'vuetify/lib';  // Globally import VTextField (needed for v-currency-field)
import VCurrencyField from 'v-currency-field'; // https://github.com/phiny1/v-currency-field
Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, {
    locale: 'pt-BR',
    decimalLength: 2,
    autoDecimalMode: true,
    min: null,
    max: null,
    defaultValue: null,
    valueAsInteger: false,
    allowNegative: false
});

// vue-the-mask for masked inputs
import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

// Notifications, an component is also located in App.vue
import Snotify, { SnotifyPosition } from 'vue-snotify';
import 'vue-snotify/styles/material.css';
Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.centerBottom
    }
});

import mixin from "@/mixin";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from '@/store';
import App from '@/views/App';
const app = new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
