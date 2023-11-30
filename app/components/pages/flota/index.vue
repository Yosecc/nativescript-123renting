<template>
    <layoutPage 
      :title="$t('flotaPage.title')"
      :buttonname="'CONTINUAR'"
      :view_button="false"
      @buttonAction="onButtonAction"
    >

      <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('flotaPage.subtitle')" textWrap />  
      <listCoches row="1" :data="list_coches" v-model="coche" @onChange="onChangeCoche" />

    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { reserva } from '~/data/reserva'
      import { coches } from '~/data/coches'
      import listCoches from '~/components/components/reserva/listCoches.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import moment from 'moment'

      export default Vue.extend({
        data(){
          return{
            list_coches: [],
            coche: {
                plan_id: 0,
                coche_id: 0
            }
          }
        },
        watch:{
            plan_id(to){
                reserva.coche.plan_id = to
            },
            coche_id(to){
                reserva.coche.coche_id = to
            },
        },
        components:{
            listCoches,
            layoutPage
        },
        computed: {
            plan_id(){
                return this.coche.plan_id
            },
            coche_id(){
                return this.coche.coche_id
            }
        },
        created(){
            this.list_coches = coches.data
        },
        mounted(){
          // console.log(this.homeView)
        },
        methods: {
          onBack() {
            this.$navigator.back()
          },
          onChangeCoche(){
            this.$navigator.navigate('/reserva/confirmacion', {props: { data: this.coche}})
          },
          onButtonAction(){
            // this.$navigator.navigate('/reserva/oficina_devolucion' )
          }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    