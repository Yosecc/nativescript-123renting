<template>
    <StackLayout padding="10">
        <StackLayout class="card" padding="0">
          <GridLayout :backgroundColor="plan.backgroundColor" width="100%" height="30" borderTopLeftRadius="20" borderTopRightRadius="20">
            <Label :text="`${plan.nombre} ${plan.amount}`" textAlignment="center" fontWeight="800" fontSize="10" margin="0"  />
          </GridLayout>
           <StackLayout padding="10">
             <GridLayout 
              v-for="(item, key) in items" 
              :key="`itemtable-${key}`" 
              columns="*,auto" 
              padding=""
              >
              <Label col="0" 
                :borderBottomWidth="key == (items.length-1) ? 0:1" 
                padding="10" 
                borderColor="#868686" 
                :text="item.text" 
                :fontSize="12" 
              />
              <Label col="1" 
                :borderBottomWidth="key == (items.length-1) ? 0:1" 
                padding="10" 
                borderColor="#868686" 
                :text="item.amount" 
                :fontSize="key == (items.length-1) ? 16:12"
                :fontWeight="key == (items.length-1) ? 600:400" 
              />
            </GridLayout>
          </StackLayout>
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
  