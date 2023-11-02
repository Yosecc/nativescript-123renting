<template>
    <layoutPage 
      :title="'Elige fecha y hora de recogida '"
      :buttonname="'CONTINUAR'"
      @buttonAction="onButtonAction"
    >
      <Label row="0" marginLeft="10" marginBottom="10" text="Selecciona fecha y hora donde deseas recoger tu coche." />  
      <DateHour row="1"  />
    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { Application, Color, Utils } from '@nativescript/core'
      import { oficinas } from '~/data/oficinas'
      import { reserva } from '~/data/reserva'
  
      import DateHour from '~/components/components/reserva/DateHour.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
  
      export default Vue.extend({
        data(){
          return{
            oficinasData:  [],
            oficina_id: 0,
          }
        },
        watch:{
          oficina_id(to){
            reserva.oficina_id = to
          }
        },
        components:{
            DateHour,
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
          this.oficinasData = oficinas.data
        },
        mounted(){
          // console.log(this.homeView)
          
        },
        methods: {
          onBack() {
            this.$navigator.back()
          },
          onButtonAction(){
            alert('continuar')
          }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    