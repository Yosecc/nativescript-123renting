<template>
    <layoutPage 
      :title="'Contacto'"
      :buttonname="'CONTINUAR'"
      :view_button="false"
      @buttonAction="onButtonAction"
    >
        <Label class="text" row="0" marginLeft="10" marginBottom="10" text=""  textWrap />  
        <GridLayout row="1" rows="auto,auto">
            <MapView
                @ready="onReady"
                myLocationButtonEnabled="true"
                :lat="lat"
                :lng="lng"
                zoom="15"
                top="0"
                left="0"
                width="90%"
                height="400"
                ref="mapa"
                row="0"
            />
            <GridLayout columns="*,*,*" row="1" marginTop="20">
                <FlexboxLayout justifyContent="flex-start" padding="10 5 0 5" alignItems="center" flexDirection="column" col="0">
                    <Image src="res://clock" width="30" />
                    <Label class="text" textAlignment="center" :text="'Lun. a Dom. 9:00 a 19:00'" fontWeight="200" fontSize="12" textWrap />
                </FlexboxLayout >
                <FlexboxLayout justifyContent="flex-start" padding="10 5 0 5" alignItems="center" flexDirection="column" col="1">
                    <Image src="res://email" width="30" />
                    <Label class="text" textAlignment="center" :text="'info@123renting.ad'" fontWeight="200" fontSize="12" textWrap />
                </FlexboxLayout >
                <FlexboxLayout justifyContent="flex-start" padding="10 5 0 5" alignItems="center" flexDirection="column" col="2">
                    <Image src="res://phone" width="30" />
                    <Label class="text" textAlignment="center" :text="'+376 812330'" fontWeight="200" fontSize="12" textWrap />
                </FlexboxLayout >
            </GridLayout>
        </GridLayout>
     
    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { Application, Color, Utils } from '@nativescript/core'
      import { oficinas } from '~/data/oficinas'
      import { reserva } from '~/data/reserva'
      import { MapView, Marker, GoogleMap, MarkerOptions, CircleOptions, Circle, Polyline ,CameraUpdate } from '@nativescript/google-maps';
  
      import Oficinas from '~/components/components/reserva/Oficinas.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
  
      export default Vue.extend({
        data(){
          return{
            oficinasData:  [],
            oficina_id: 0,
            map: null,
            lat: -34.6613414 ,
            lng: -58.3880266
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
            addMarker(map: GoogleMap, markerOptions: MarkerOptions): Marker {
                return this.map.addMarker(markerOptions);
            },
            onReady({map}){
                this.map = map
                this.addMarker(this.map,{position: {lat: this.lat, lng: this.lng}})
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
    