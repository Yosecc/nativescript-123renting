<template>
    <StackLayout padding="10">

        <DatePickerField hint="Seleccionar fecha"></DatePickerField>
        <TimePickerField hint="Seleccionar hora"></TimePickerField>
       
    </StackLayout>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { home } from '~/data/home'
    import { oficinas } from '~/data/oficinas'
   
    export default Vue.extend({
        // model: {
        //     prop: '',
        //     event: 'change'
        // },
        props:{
           
        },
      data(){
        return{
          
        }
      },
      computed: {

      },
      methods: {
        
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  