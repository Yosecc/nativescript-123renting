<template>
    <layoutPage 
      :title="`${$t('flotaPage.title')}`"
      :buttonname="'CONTINUAR'"
      :view_button="false"
      @buttonAction="onButtonAction"
    >

      <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('flotaPage.subtitle')" textWrap />  
      <listCoches v-if="list_coches.length" row="1" :data="list_coches" v-model="coche" @onChange="onChangeCoche" />
      <StackLayout row="1" v-if="!list_coches.length">
        <StackLayout class="skeleton card" width="100%" height="300" marginBottom="16"></StackLayout>
        <StackLayout class="skeleton card" width="100%" height="300" marginBottom="16"></StackLayout>
        <StackLayout class="skeleton card" width="100%" height="300" marginBottom="16"></StackLayout>
      </StackLayout>
    </layoutPage>
  </template>
    
<script lang="ts">
  import Vue from "nativescript-vue";
  // import { reserva } from '~/data/reserva'
  import type { cocheInfo } from '~/data/reserva'
  import type { Coche, flotaResponse } from '~/data/coches'
  
  // import { coches } from '~/data/coches'
  import listCoches from '~/components/components/reserva/listCoches.vue'
  import layoutPage from "~/components/pages/reserva/layoutPage.vue";
  // import moment from 'moment'
  import Api from '~/services/Api'
  import { ObservableArray } from '@nativescript/core/data/observable-array';

  

  export default Vue.extend({
    data(){
      return{
        list_coches: [] as Coche[],
        coche: {
            plan_id: 0,
            coche_id: 0
        } as cocheInfo,
        // prueba:'ssss'
      }
    },
    watch:{
        // plan_id(to){
        //     reserva.coche.plan_id = to
        // },
        // coche_id(to){
        //     reserva.coche.coche_id = to
        // },
    },
    components:{
        listCoches,
        layoutPage
    },
    computed: {
        // plan_id(){
        //     return this.coche.plan_id
        // },
        // coche_id(){
        //     return this.coche.coche_id
        // }
    },
    created(){
      Api.get('/flota',{ idregion: 1, total: 5 }).then((response:flotaResponse)=>{
        this.list_coches = response.data.flota
      })
    },
    mounted(){
      
      // console.log(this.homeView)
      
    },
    methods: {
      // onBack() {
      //   this.$navigator.back()
      // },
      onChangeCoche(){
        // this.$navigator.navigate('/reserva/confirmacion', {props: { data: this.coche}})
      },
      onButtonAction(){
        // this.$navigator.navigate('/reserva/oficina_devolucion' )
      }
    }
  }
  )
  ;
</script>

<style>
  /* .info {
    font-size: 20;
  } */
</style>
    