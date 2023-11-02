import Home from './components/pages/Home.vue'
import Oficinas from './components/pages/reserva/Oficinas.vue'
import DateHour from './components/pages/reserva/DateHour.vue'

export const routes = {
  '/home': {
    component: Home,
  },
  '/reserva/oficinas': {
    component: Oficinas,
  },
  '/reserva/datehour': {
    component: DateHour,
  },
}