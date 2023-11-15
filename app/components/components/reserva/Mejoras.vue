<template>
    <StackLayout padding="10">
        <Label text="Mejora tu reserva" color="#E74117" fontSize="16" fontWeight="800" textAlignment="center" marginBottom="20" />

        <StackLayout class="card" padding="10" >
            <WrapLayout height="100">
                <GridLayout  width="30%">
                    <Label text="Precio por dia" fontSize="12" margin="12 0" textWrap padding="0" verticalAlignment="bottom" />
                </GridLayout>
                <GridLayout  width="23.33%" rows="*,*" v-for="(i, k) in planes" :key="`itsm-${k}`">
                    <Button 
                        row="0" 
                        :text="`${i.nombre}`" 
                        :color="i.id == plan.id ? 'white':i.backgroundColor" 
                        fontSize="10" 
                        fontWeight="bold" 
                        :backgroundColor="i.id == plan.id ? i.backgroundColor:''" 
                        
                        margin="4" 
                        borderRadius="5" 
                    />
                    <Label row="1" :text="`${i.amount}`" fontSize="14" textAlignment="center"  margin="4" />
                </GridLayout>
            </WrapLayout>
            <WrapLayout height="50" v-for="(item, key) in items" :key="`item-${key}`">
                <GridLayout width="30%">
                    <Label :text="item.text" fontSize="12" margin="0" textWrap padding="0" />
                </GridLayout>
                <GridLayout width="23.33%" v-for="(i, k) in item.planes" :key="`itm-${k}`">
                    <Button v-if="!i.incluido" :text="`${i.amount}£`" borderColor="gray" borderWidth="1" margin="4" borderRadius="5" />
                    <Image v-else src="res://check" height="25" />
                </GridLayout>
            </WrapLayout>
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
                default: [{
                    text: 'Combustible',
                    planes:[
                        {
                            plan: 'basic',
                            amount: '100',
                            incluido: false,
                        },
                        {
                            plan: 'Medium',
                            amount: '100',
                            incluido: false,
                        },
                        {
                            plan: 'Premium',
                            amount: '100',
                            incluido: true,
                        },
                    ]   
                },{
                    text: 'Kilometraje ilimitado',
                    planes:[
                        {
                            plan: 'basic',
                            amount: '100',
                            incluido: true,
                        },
                        {
                            plan: 'Medium',
                            amount: '100',
                            incluido: true,
                        },
                        {
                            plan: 'Premium',
                            amount: '100',
                            incluido: true,
                        },
                    ]   
                },{
                    text: 'Coberturas de ruedas y lunas',
                    planes:[
                        {
                            plan: 'basic',
                            amount: '67',
                            incluido: false,
                        },
                        {
                            plan: 'Medium',
                            amount: '100',
                            incluido: true,
                        },
                        {
                            plan: 'Premium',
                            amount: '100',
                            incluido: true,
                        },
                    ]   
                },]
            }
            // coche: {
            //     type: Object,
            //     default: {}
            // }
        },
      data(){
        return{
            planes: planes.data
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
  