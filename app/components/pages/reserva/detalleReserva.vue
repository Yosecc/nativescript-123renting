<template>
    <layoutPage 
      :title="'Detalle de tu reserva'"
      :buttonname="'CONFIRMAR'"
      :view_button="true"
      @buttonAction="onButtonAction"
    >

      <Label row="0" marginLeft="10" marginBottom="10" text="Revisa los detalles de tu reserva." textWrap />  
    
        <GridLayout row="1" rows="auto, *">
            <CardDetalleTable :plan="plan" :items="items" />
        </GridLayout>

    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { reserva } from '~/data/reserva'
      import { coches } from '~/data/coches'
      import { planes } from '~/data/planes'
      import { oficinas } from '~/data/oficinas'
      import CardDetalleTable from '~/components/components/reserva/CardDetalleTable.vue'
      import CardOficinaSelect from '~/components/components/reserva/CardOficinaSelect.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import moment from 'moment'

      export default Vue.extend({
        props:{
            data: {
                type: Object,
                default: {
                    plan_id: 0,
                    coche_id: 0
                }
            }
        },
        data(){
          return{
            // list_coches: [],
            // coche: {
                // plan_id: 0,
                // coche_id: 0
            // }
          }
        },
        watch:{
            // plan(to){
            //     reserva.coche.plan_id = to
            // },
            // coche(to){
            //     reserva.coche.coche_id = to
            // },
        },
        components:{
            CardDetalleTable,
            layoutPage
        },
        computed: {
            plan(){
                return planes.data.find((e)=> e.id == this.data.plan_id)
            },
            coche(){
                return coches.data.find((e)=> e.id == this.data.coche_id)
            },
            items(){
                return [
                    {
                        text: 'Precio tarifa Plan Basic por 6 días',
                        amount: '600€'
                    },
                    {
                        text: 'Sub-total',
                        amount: '624€'
                    },
                    {
                        text: 'Total a pagar x 6 días',
                        amount: '624€'
                    },
                ]
            }
        },
        created(){
            // this.list_coches = coches.data
        },
        mounted(){
          // console.log(this.homeView)
        },
        methods: {
        //   onBack() {
        //     this.$navigator.back()
        //   },
        //   onButtonAction(){
        //     this.$navigator.navigate('/reserva/detalle_reserva' )
        //   }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    