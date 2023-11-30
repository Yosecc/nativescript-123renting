import Vue from 'nativescript-vue'
import Home from './components/pages/Home.vue'
import Reserva from './components/pages/reserva/Reserva.vue'

import App from './components/App.vue'

import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'

Vue.use(Navigator, { routes })

import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);

import DateTimePicker from '@nativescript/datetimepicker/vue'
Vue.use(DateTimePicker);

import LottieView from '@nativescript-community/ui-lottie/vue';
Vue.use(LottieView);

import GoogleMaps from '@nativescript/google-maps/vue'
Vue.use(GoogleMaps)

import Pager from '@nativescript-community/ui-pager/vue';
Vue.use(Pager);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import { ja } from './i18n/ja'
import { en } from './i18n/en'
import { es } from './i18n/es'
import { ca } from './i18n/ca'

const messages = {
  en: en,
  ja: ja,
  es: es,
  ca: ca,
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})


declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false

new Vue({
  i18n,
  // render: (h) => h('frame', [h(Home),h(Reserva)]),
  render: h => h(App),
}).$start()
