<template>
    <layoutPage 
      :title="$t('reserva.paso5.titulo')"
      :buttonname="$t('continuar')"
      :view_button="false"
      @buttonAction="onButtonAction"
    >

      <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('reserva.paso5.subtitulo')" textWrap />  
      <listCoches row="1" v-if="list_coches.length" :data="list_coches" v-model="coche" @onChange="onChangeCoche" />
      <StackLayout row="1" v-if="!list_coches.length">
        <StackLayout class="skeleton card" width="100%" height="300" marginBottom="16"></StackLayout>
        <StackLayout class="skeleton card" width="100%" height="300" marginBottom="16"></StackLayout>
        <StackLayout class="skeleton card" width="100%" height="300" marginBottom="16"></StackLayout>
      </StackLayout>
    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { reserva } from '~/data/reserva'
      import { coches } from '~/data/coches'
      import type { Coche } from '~/data/coches'
      import { mejoras } from '~/data/mejoras'
      import listCoches from '~/components/components/reserva/listCoches.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import moment from 'moment'
      import Api from '~/services/Api'

      export default Vue.extend({
        data(){
          return{
            list_coches: [] as Coche[],
            coche: reserva.coche
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
            },
            cocheSeleccionado(){
              return this.list_coches.find((e)=> e.id == this.coche.coche_id)
            }
        },
        created(){
            Api.get('/buscar_coche', { 
              idregion: 1 ,
              idoficina: reserva.recogida.oficina_id,
              start: String(reserva.getFechas().recogida.format('YYYY-MM-DD HH:mm')),
              end: String(reserva.getFechas().devolucion.format('YYYY-MM-DD HH:mm'))
            }).then((response)=>{
              // console.log('sssss',response.data.flota)
              this.list_coches = response.data.flota as Coche[]
              // mejoras.addMejora(response.data.beneficios)
              // console.log('mejoras',mejoras.data)
            })
        },
        mounted(){
        },
        methods: {
          onBack() {
            this.$navigator.back()
          },
          onChangeCoche(){
            this.$navigator.navigate('/reserva/confirmacion', {props: { data: this.coche, coche:  this.cocheSeleccionado}})
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
    