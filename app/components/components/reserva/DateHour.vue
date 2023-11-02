<template>
    <StackLayout>

        <DatePickerField hint="select date"></DatePickerField>
        <TimePickerField hint="select time"></TimePickerField>
        <DateTimePickerFields
        hintDate="select date"
        hintTime="select time"
        ></DateTimePickerFields>
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
  