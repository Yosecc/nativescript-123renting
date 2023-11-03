<template>
    <StackLayout padding="10">
        <StackLayout class="card" padding="0">
           <StackLayout :backgroundColor="plan.backgroundColor" width="100%" height="30" borderTopLeftRadius="20" borderTopRightRadius="20" />
           <GridLayout v-for="(item, key) in items" :key="`itemtable-${key}`" columns="*,auto" padding="5">
                <Label col="0" borderBottomWidth="1" padding="10" borderColor="#868686" :text="item.text" />
                <Label col="1" borderBottomWidth="1" padding="10" borderColor="#868686" :text="item.amount" />
           </GridLayout>
        </StackLayout>
    </StackLayout>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { planes } from '~/data/planes'
    export default Vue.extend({
        props:{
            plan: {
                type: Object,
                default: {}
            },
            items: {
                type: Array|Object,
                default: []
            }
            // coche: {
            //     type: Object,
            //     default: {}
            // }
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
  