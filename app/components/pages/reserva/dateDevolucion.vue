<template>
    <layoutPage 
      :title="'Elige fecha y hora de devolución '"
      :buttonname="'CONTINUAR'"
      @buttonAction="onButtonAction"
    >

      <Label class="text" row="0" marginLeft="10" marginBottom="10" text="Selecciona fecha y hora donde deseas recoger tu coche." textWrap />  
      <DateHour row="1" v-model="fechas"  />

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
            fechas: reserva.devolucion.fecha
          }
        },
        watch:{
          date(to){
            reserva.devolucion.fecha.date = to
          },
          time(to){
            reserva.devolucion.fecha.time = to
          }
        },
        components:{
            DateHour,
            layoutPage
        },
        computed: {
          date(){
            return this.fechas.date
          },
          time(){
            return this.fechas.time
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
            const fechaDevolucionSelect = moment(`${reserva.devolucion.fecha.date} ${reserva.devolucion.fecha.time}`)
            const ahora = moment()

            const fechaRecogidaSelect = moment(`${reserva.recogida.fecha.date} ${reserva.recogida.fecha.time}`)
          

            if (fechaDevolucionSelect.isAfter(ahora)) {

              if (fechaDevolucionSelect.isAfter(fechaRecogidaSelect)) {
                this.$navigator.navigate('/reserva/select_coche')
              } else if (fechaDevolucionSelect.isSame(fechaRecogidaSelect)) {
                alert('Debe seleccionar una fecha/hora en el mayor a la fecha de recogida')
                return
              } else {
                alert('Debe seleccionar una fecha/hora en el mayor a la fecha de recogida')
                return
              }
              
            } else if (fechaDevolucionSelect.isSame(ahora)) {
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
    