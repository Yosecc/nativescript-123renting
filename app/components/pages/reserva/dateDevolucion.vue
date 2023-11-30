<template>
    <layoutPage 
      :title="$t('reserva.paso4.titulo')"
      :buttonname="$t('continuar')"

      @buttonAction="onButtonAction"
    >

      <Label class="text" row="0" marginLeft="10" marginBottom="10" :text="$t('reserva.paso4.subtitulo')" textWrap />  
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
                alert(this.$t('alert.message.fecharecogidamayor'))
                return
              } else {
                alert(this.$t('alert.message.fecharecogidamayor'))
                return
              }
              
            } else if (fechaDevolucionSelect.isSame(ahora)) {
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
    