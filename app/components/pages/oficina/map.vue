<template>
    <Label text="likuhiuiu" />
    <!-- <MapView
        @ready="onReady"
        @mapTap="onTap"
        @mapLongPress="onLongPress"
        @markerTap="onMarkerTap"
        lat="-34.506305"
        lng="-58.55253"
        zoom="15"
      /> -->
</template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { Application, Color, Utils } from '@nativescript/core'
      import { oficinas } from '~/data/oficinas'
      import { reserva } from '~/data/reserva'
  
      import Oficinas from '~/components/components/reserva/Oficinas.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
  
      export default Vue.extend({
        props:{
            oficina:{
                type: Object,
                default: {}
            }
        },
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
  
          },
          onReady({map}){
          console.log('onReady',map)
          map.addMarker({position: {lat: -34.506305 , lng: -58.55253}})
        },
        onTap(args){
          console.log('onTap',args)
        },
        onLongPress(){
          console.log('onLongPress')
        },
        onMarkerTap(){
          console.log('onMarkerTap')
        },
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    