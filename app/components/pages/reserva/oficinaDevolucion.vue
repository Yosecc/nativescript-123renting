<template>
    <layoutPage 
      :title="$t('reserva.paso3.titulo')"
      :buttonname="$t('continuar')"
      @buttonAction="onButtonAction"
    >
      <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('reserva.paso3.subtitulo')"  textWrap />  
      <Oficinas row="1" :name="'oficina_devolucion'" :data="oficinasData" v-model="oficina_id" />
    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { Application, Color, Utils } from '@nativescript/core'
      import { oficinas } from '~/data/oficinas'
      import { reserva } from '~/data/reserva'
  
      import Oficinas from '~/components/components/reserva/Oficinas.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
  
      export default Vue.extend({
        data(){
          return{
            oficinasData:  oficinas.data,
            oficina_id: reserva.devolucion.oficina_id,
          }
        },
        watch:{
          oficina_id(to){
            reserva.devolucion.oficina_id = to
          }
        },
        components:{
          Oficinas,
          layoutPage
        },
        computed: {
          message() {
            return "Blank {N}-Vue app";
          },
          isDark(){
            return Application.systemAppearance() === 'dark'
          }
        },
        created(){
        },
        mounted(){
        },
        methods: {
          onBack() {
            this.$navigator.back()
          },
          onButtonAction(){
            if(reserva.devolucion.oficina_id == 0){
              alert(this.$t('alert.message.selectTo',{ msg: this.$t('oficina') }))

              return
            }
            this.$navigator.navigate('/reserva/date_devolucion' )
  
          }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    