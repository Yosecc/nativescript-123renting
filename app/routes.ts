import Home from './components/pages/Home.vue'
import oficinaRecogida from './components/pages/reserva/oficinaRecogida.vue'
import oficinaDevolucion from './components/pages/reserva/oficinaDevolucion.vue'
import dateRecogida from './components/pages/reserva/dateRecogida.vue'
import dateDevolucion from './components/pages/reserva/dateDevolucion.vue'
import selectCoche from './components/pages/reserva/selectCoche.vue'
import confirmacion from './components/pages/reserva/confirmacion.vue'
import detalleReserva from './components/pages/reserva/detalleReserva.vue'

export const routes = {
  '/home': {
    component: Home,
  },
  '/reserva/oficina_recogida': {
    component: oficinaRecogida,
  },
  '/reserva/date_recogida': {
    component: dateRecogida,
  },
  '/reserva/date_devolucion': {
    component: dateDevolucion,
  },
  '/reserva/oficina_devolucion': {
    component: oficinaDevolucion,
  },
  '/reserva/select_coche': {
    component: selectCoche,
  },
  '/reserva/confirmacion': {
    component: confirmacion,
  },
  '/reserva/detalle_reserva':{
    component: detalleReserva
  }
}