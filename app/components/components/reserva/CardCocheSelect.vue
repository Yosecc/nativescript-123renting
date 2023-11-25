<template>
    <StackLayout padding="10">
        <StackLayout class="card" padding="0">
            <StackLayout padding="20">
                <Label class="text" :text="coche.marca" fontSize="16" fontWeight="900" />
                <Label class="text" :text="coche.detalle" fontSize="12" fontWeight="200" />
                <Image :src="coche.imagen" width="70%" stretch="aspectFill" marginBottom="20" />
            </StackLayout>
            <StackLayout padding="0" >
                <StackLayout
                    padding="15" 
                    :backgroundColor="plan.backgroundColor" 
                    borderTopLeftRadius="10"
                    borderTopRightRadius="10"
                    borderBottomLeftRadius="20"
                    borderBottomRightRadius="20"
                >
                    <Label class="text" :text="`${plan.nombre} ${moneda(plan.amount)}`" textAlignment="center" color="white" fontWeight="600" fontSize="16" />
                </StackLayout>
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
            coche: {
                type: Object,
                default: {}
            }
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
  