import Vue from 'nativescript-vue'
import Home from './components/pages/Home.vue'
import Reserva from './components/pages/reserva/Reserva.vue'

import App from './components/App'

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

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false

new Vue({
  // render: (h) => h('frame', [h(Home),h(Reserva)]),
  render: h => h(App),
}).$start()
