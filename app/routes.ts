import Home from './components/pages/Home.vue'
import Flota from './components/pages/flota/index.vue'
import Oficina from './components/pages/oficina/index.vue'
import Mapp from './components/pages/oficina/map.vue'
import Contacto from './components/pages/contacto/index.vue'
import PreguntasFrecuentes from './components/pages/preguntas_frecuentes/index.vue'

// RESERVA
import oficinaRecogida from './components/pages/reserva/oficinaRecogida.vue'
import oficinaDevolucion from './components/pages/reserva/oficinaDevolucion.vue'
import dateRecogida from './components/pages/reserva/dateRecogida.vue'
import dateDevolucion from './components/pages/reserva/dateDevolucion.vue'
import selectCoche from './components/pages/reserva/selectCoche.vue'
import confirmacion from './components/pages/reserva/confirmacion.vue'
import detalleReserva from './components/pages/reserva/detalleReserva.vue'


//AUTH
import login from './components/pages/auth/login.vue'
import codeValidation from './components/pages/auth/codeValidation.vue'
import createPassword from './components/pages/auth/createPassword.vue'

//PROFILE
import infoPersonal from './components/pages/profile/infoPersonal.vue'
import reservaciones from './components/pages/profile/reservaciones.vue'
import reservaDetalle from './components/pages/profile/reservaDetalle.vue'

//PAYMENT
import payment from './components/pages/payment/index.vue'
import successPayment from './components/pages/payment/successPayment.vue'


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
  },
  '/auth/login':{
    component: login
  },
  '/auth/code_validation':{
    component: codeValidation
  },
  '/auth/create_password':{
    component: createPassword
  },
  '/profile/info_personal':{
    component: infoPersonal,
    meta: { needsAuth: true }
  },
  '/profile/reservaciones':{
    component: reservaciones
  },
  '/profile/reservaDetalle':{
    component: reservaDetalle
  },
  '/payment':{
    component: payment
  },
  '/payment/success':{
    component: successPayment
  },
  '/flota':{
    component: Flota
  },
  '/oficina':{
    component: Oficina
  },
  '/oficina/map':{
    component: Mapp
  },
  '/contacto':{
    component: Contacto
  },
  '/preguntas_frecuentes':{
    component: PreguntasFrecuentes
  },
}