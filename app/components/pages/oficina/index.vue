<template>
    <layoutPage 
      :title="'Nuestras oficinas'"
      :buttonname="'CONTINUAR'"
      :view_button="false"
      @buttonAction="onButtonAction"
    >
      <Label row="0" marginLeft="10" marginBottom="10" text="Estamos esperando tu visita a nuestras oficinas."  textWrap es./>  
      <Oficinas row="1" :name="'oficina_recogida'" :data="oficinasData" v-model="oficina_id" mode="list" />
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
            oficinasData:  [],
            oficina_id: 0,
          }
        },
        watch:{
          oficina_id(to){
            reserva.recogida.oficina_id = to
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
            this.$navigator.navigate('/reserva/date_recogida' )
  
          }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    