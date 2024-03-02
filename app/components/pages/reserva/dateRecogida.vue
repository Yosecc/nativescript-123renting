<template>
    <layoutPage 
      :title="$t('reserva.paso2.titulo')"
      :buttonname="$t('continuar')"
      @buttonAction="onButtonAction"
    >

      <Label class="text" row="0" marginLeft="10" marginBottom="10" :text="$t('reserva.paso2.subtitulo')" textWrap />  
      <DateHour row="1" v-model="fechasRecogida" />

    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { reserva } from '~/data/reserva'
      import DateHour from '~/components/components/reserva/DateHour.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import moment from 'moment'

      export default Vue.extend({
        data(){
          return{
            fechasRecogida: reserva.recogida.fecha
          }
        },
        watch:{
          date(to){
            console.log('date',to)
            reserva.recogida.fecha.date = to
          },
          time(to){
            console.log('time',to)
            reserva.recogida.fecha.time = to
          }
        },
        components:{
            DateHour,
            layoutPage
        },
        computed: {
          date(){
            return this.fechasRecogida.date
          },
          time(){
            return this.fechasRecogida.time
          },
        },
        created(){
        },
        mounted(){
          // console.log(this.homeView)
        },
        methods: {
          onBack() {
            this.$navigator.back()
          },
          onButtonAction(){
            console.log('ss',`${reserva.recogida.fecha.date} ${reserva.recogida.fecha.time}`)
            const fecha = moment(`${reserva.recogida.fecha.date} ${reserva.recogida.fecha.time}`,'YYYY-MM-DD HH:mm')
            // const fecha = moment(`${reserva.recogida.fecha.date} 22:00`,'YYYY-MM-DD HH:mm')
            const ahora = moment()
            console.log('fe',fecha,ahora)
            // if (fecha.isAfter(moment().endOf('day'))) {
            // if (fecha.hour() > ahora.hour() || (fecha.hour() === ahora.hour() && fecha.minute() > ahora.minute())) {
            if (fecha.isAfter(ahora)) {
              this.$navigator.navigate('/reserva/oficina_devolucion' )
            } else if (fecha.isSame(ahora)) {
              alert(this.$t('alert.message.seleteFechaFuturo'))
              return
            } else {
              alert(this.$t('alert.message.seleteFechaFuturo'))
              return
            }
            
          }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    