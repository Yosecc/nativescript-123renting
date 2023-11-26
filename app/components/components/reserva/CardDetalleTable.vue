<template>
    <StackLayout padding="10">
        <StackLayout class="card" padding="0">
          <GridLayout :backgroundColor="plan.backgroundColor" width="100%" height="30" borderTopLeftRadius="20" borderTopRightRadius="20">
            <Label class="text" color="white" :text="`${plan.nombre} ${moneda(plan.amount)}`" textAlignment="center" fontWeight="800" fontSize="10" margin="0"  />
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
                class="text"
              />
              <Label col="1" 
                :borderBottomWidth="key == (items.length-1) ? 0:1" 
                padding="10" 
                class="text"
                borderColor="#868686" 
                :text="moneda(item.amount)" 
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
        moneda(value) {
            value += '';
            var x = value.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
            }
            return  x1 + x2 + '€' 
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      border-top-left-radius: ;
    } */
  </style>
  