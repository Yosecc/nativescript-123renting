<template>
    <layoutPage 
      :title="'Elige fecha y hora de recogida '"
      :buttonname="'CONTINUAR'"
      @buttonAction="onButtonAction"
    >

      <Label class="text" row="0" marginLeft="10" marginBottom="10" text="Selecciona fecha y hora donde deseas recoger tu coche." textWrap />  
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
            reserva.recogida.fecha.date = to
          },
          time(to){
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

            const fecha = moment(`${reserva.recogida.fecha.date} ${reserva.recogida.fecha.time}`,'YYYY-MM-DD HH:mm')
            const ahora = moment()

            if (fecha.isAfter(ahora)) {
              this.$navigator.navigate('/reserva/oficina_devolucion' )
            } else if (fecha.isSame(ahora)) {
              alert('Debe seleccionar una fecha en el futuro')
              return
            } else {
              alert('Debe seleccionar una fecha en el futuro')
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
    