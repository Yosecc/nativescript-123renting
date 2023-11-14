<template>
    <StackLayout padding="10">
        <StackLayout v-if="recogida.oficina" class="card" padding="0">
            <StackLayout padding="20">
                
                <Label text="Oficina de recogida" fontSize="12" fontWeight="900" marginBottom="10" />
                <StackLayout orientation="horizontal" marginBottom="10">
                    <Image src="res://ubicacion" width="20" stretch="aspectFit" marginRight="5" />
                    <Label :text="recogida.oficina.text" fontSize="14" fontWeight="200" textWrap />
                </StackLayout>

                <StackLayout orientation="horizontal">
                    <StackLayout orientation="horizontal"  marginRight="20" >
                        <Image src="res://calendar" width="20" stretch="aspectFit" marginRight="5" />
                        <Label :text="recogida.fecha.date"  fontWeight="200" textWrap />
                    </StackLayout>
                    <StackLayout orientation="horizontal">
                        <Image src="res://calendar" width="20" stretch="aspectFit" marginRight="5" />
                        <Label :text="`${recogida.fecha.time} Hrs.`"  fontWeight="200" textWrap />
                    </StackLayout>
                </StackLayout>

                <StackLayout width="100%" height="2" background="#868686" opacity=".5" margin="20 0" />

                <Label text="Oficina de devolución" fontSize="12" fontWeight="900" marginBottom="10" />
                <StackLayout orientation="horizontal" marginBottom="10">
                    <Image src="res://ubicacion" width="20" stretch="aspectFit" marginRight="5" />
                    <Label :text="devolucion.oficina.text" fontSize="14" fontWeight="200" textWrap />
                </StackLayout>

                <StackLayout orientation="horizontal">
                    <StackLayout orientation="horizontal"  marginRight="20" >
                        <Image src="res://calendar" width="20" stretch="aspectFit" marginRight="5" />
                        <Label :text="devolucion.fecha.date"  fontWeight="200" textWrap />
                    </StackLayout>
                    <StackLayout orientation="horizontal">
                        <Image src="res://calendar" width="20" stretch="aspectFit" marginRight="5" />
                        <Label :text="`${devolucion.fecha.time} Hrs.`"  fontWeight="200" textWrap />
                    </StackLayout>
                </StackLayout>
                
            </StackLayout>
            
        </StackLayout>
    </StackLayout>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { planes } from '~/data/planes'
    import moment from 'moment'
    
    export default Vue.extend({
        props:{
            recogida:{
                type: Object,
                default: {
                    oficina:{},
                    fecha: {},
                }
            },
            devolucion:{
                type: Object,
                default: {
                    oficina: {},
                    fecha: {}, 
                }
                
            },

        },
      data(){
        return{
        }
      },
      created(){
      },
      computed: {
        
      },
      methods: {

      }
    });
  </script>
  
  <style>
    /* .info {
      border-top-left-radius: ;
    } */
  </style>
  