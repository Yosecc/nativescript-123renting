<template>
  <layoutPage 
    :title="$t('reserva.paso1.titulo')"
    :buttonname="$t('continuar')"
    @buttonAction="onButtonAction"
  >
    <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('reserva.paso1.subtitulo')"  textWrap />  
    <Oficinas row="1" v-if="oficinasData.length" :name="'oficina_recogida'" :data="oficinasData" v-model="oficina_id" />
    <StackLayout row="1" v-if="!oficinasData.length">
        <StackLayout class="skeleton card" width="100%" height="100" marginBottom="16"></StackLayout>
        <StackLayout class="skeleton card" width="100%" height="100" marginBottom="16"></StackLayout>
        <StackLayout class="skeleton card" width="100%" height="100" marginBottom="16"></StackLayout>
      </StackLayout>
  </layoutPage>
</template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { oficinas } from '~/data/oficinas'
    import { reserva } from '~/data/reserva'

    import Oficinas from '~/components/components/reserva/Oficinas.vue'
    import layoutPage from "~/components/pages/reserva/layoutPage.vue";
    import Api from '~/services/Api'

    export default Vue.extend({
      data(){
        return{
          oficinasData: oficinas.data,
          oficina_id: reserva.recogida.oficina_id,
        }
      },
      watch:{
        oficina_id(to){
          reserva.recogida.oficina_id = to
        }
      },
      components:{
        Oficinas,
        layoutPage
      },
      computed: {
        message() {
          return "Blank {N}-Vue app";
        },
        isDark(){
          return Application.systemAppearance() === 'dark'
        }
      },
      created(){
        if(oficinas.data.length == 0){
          Api.get('/oficinas',{ idregion: 1 }).then((response)=>{
            this.oficinasData = response.data.oficinas
            oficinas.data = response.data.oficinas
          })
        }
      },
      mounted(){
      },
      methods: {
        onBack() {
          this.$navigator.back()
        },
        onButtonAction(){
          if(reserva.recogida.oficina_id == 0){
            alert(this.$t('alert.message.selectTo',{ msg: this.$t('oficina') }))
            return
          }
          this.$navigator.navigate('/reserva/date_recogida' )

        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  