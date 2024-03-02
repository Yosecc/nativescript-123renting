<template>
    <layoutPage 
      :title="$t('infoPage.title')"
      :buttonname="$t('continuar')"
      :view_button="false"
      @buttonAction="onButtonAction"
    >
        <Label row="0" class="text" marginLeft="10" marginBottom="0" text=""  textWrap />  
        <GridLayout row="1" rows="auto,auto">
            <RadListView
                :items="reservacionesData"
                @itemTap="onItemTap"
                ref="reservaciones"
            >
                <v-template>
                  <CardReservacionVue :reserva="item" />
                </v-template>
            </RadListView>
        </GridLayout>
    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { Application } from '@nativescript/core'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import { Reservas } from "~/data/reserva";
      import CardReservacionVue from "~/components/components/reserva/CardReservacion.vue";
      
      export default Vue.extend({
        data(){
          return{
            reservacionesData: Reservas.data
          }
        },
        watch:{   
        },
        components:{
          layoutPage,
          CardReservacionVue
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
            onItemTap(args:any){
                args.object.refresh()
            },
            onBack() {
                this.$navigator.back()
            },
            onButtonAction(){
                // this.$navigator.navigate('/reserva/date_recogida' )
            }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    