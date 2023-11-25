<template>
    <RadListView
        :items="data"
        @itemTap="onItemSelected"
    >
        <v-template>
            <StackLayout padding="10">
                <GridLayout width="100%" columns="*, auto"  padding="20 30" class="card">
                    <Label class="text" col="0" :text="item.text" fontSize="16" textWrap />
                    <AbsoluteLayout v-if="mode == 'radio'" col="1" marginLeft="10">
                        <StackLayout top="0" left="0" borderColor="#E74117" borderWidth="3" width="25" borderRadius="100%" height="25" />
                        <StackLayout v-if="oficina_id == item.id" top="5" left="5" background="#E74117" width="15" height="15" borderRadius="100%"/>
                    </AbsoluteLayout>
                </GridLayout>
            </StackLayout>
        </v-template>
    </RadListView>
   
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { home } from '~/data/home'
    import { oficinas } from '~/data/oficinas'
    import { GoogleMap, MarkerOptions, Marker } from '@nativescript/google-maps';
    export default Vue.extend({
        model: {
            prop: 'oficina',
            event: 'change'
        },
        props:{
            data: {
                type: Array|Object,
                default: []
            },
            oficina: {
                type: Number,
                default: 0
            },
            mode:{
              type: String,
              default: 'radio'
            }
        },
      data(){
        return{
            oficina_id:  this.oficina
        }
      },
      computed: {

      },
      methods: {

        onItemSelected(args){
            if(this.mode == 'radio'){
              args.object.refresh()
              this.oficina_id = args.item.id
              this.$emit('change', this.oficina_id) 
            }
            if(this.mode == 'list'){
              // console.log(args.item)
              this.$navigator.navigate('/oficina/map', { props:  { oficina: args.item } })
            }
        },
       
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  