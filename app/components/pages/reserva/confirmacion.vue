<template>
    <layoutPage 
      :title="$t('reserva.paso6.titulo')"
      :buttonname="$t('continuar')"
      :view_button="true"
      @buttonAction="onButtonAction"
    >

      <Label class="text" row="0" marginLeft="10" marginBottom="10" :text="$t('reserva.paso6.subtitulo')" textWrap />  
    
      <!-- <GridLayout rows="auto,*,auto" row="1">
          <CardCocheSelect row="0" :plan="plan" :coche="coche"/>
          <CardOficinaSelect row="1" :recogida="recogida" :devolucion="devolucion" background=""/>
            
            <GridLayout row="2" columns="*,auto" padding="10" background="">
                <StackLayout orientation="horizontal" col="0" >
                  <Image src="res://card" width="30" stretch="aspectFit" marginRight="5" />
                  <Label class="text" :text="`Total a pagar Plan ${plan.nombre} por ${dias} dìa${dias>1?'s':''} `"  fontWeight="200" fontSize="16" textWrap />
                </StackLayout>
                <Label :text="`${moneda(reservaInvoice.subtotal)}`" v-if="!loading" fontWeight="900" fontSize="20" col="1" class="text" />
                <ActivityIndicator busy="true" color="#E74117" v-if="loading" width="20" marginTop="8" col="1"/>
            </GridLayout>

      </GridLayout> -->

    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { reserva } from '~/data/reserva'
      import { coches } from '~/data/coches'
      import { planes } from '~/data/planes'
      import { oficinas } from '~/data/oficinas'
      import CardCocheSelect from '~/components/components/reserva/CardCocheSelect.vue'
      import CardOficinaSelect from '~/components/components/reserva/CardOficinaSelect.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import moment from 'moment'
      import Api from '~/services/Api'
      import { Dialogs, HttpResponse, Http } from "@nativescript/core";
      import type { cocheInfo, ReservaData} from '~/data/reserva'


      export default Vue.extend({
        props:{
            data: {
                type: Object,
                default(){
                  return {
                    plan_id: 0,
                    coche_id: 0
                  } as cocheInfo
                }
            },
            coche: {}
        },
        data(){
          return {
            calculoApi: {} as ReservaData,
            reservaInvoice: reserva.invoice,
            loading: false
          }
        },
        watch:{
        },
        components:{
            CardCocheSelect,
            CardOficinaSelect,
            layoutPage
        },
        computed: {
            // plan(){
            //     return planes.data.find((e)=> e.id == this.data.plan_id)
            // },
            // // coche(){
            // //     return coches.data.find((e)=> e.id == this.data.coche_id)
            // // },
            // dias(){
            //   return reserva.getDifFechas().dias
            // },
            // recogida(){
            //     let obj = {
            //         oficina: oficinas.data.find((e)=> e.id == reserva.recogida.oficina_id),
            //         fecha: reserva.recogida.fecha
            //     }
            //     return obj
            // },
            // devolucion(){
            //     return {
            //         oficina: oficinas.data.find((e)=> e.id == reserva.devolucion.oficina_id),
            //         fecha: reserva.devolucion.fecha
            //     }
            // },
        },
        created(){
          this.loading = true
          Api.post('/confirmar',{ 
            coche_id: reserva.coche.coche_id ,
            plan: reserva.coche.plan_id,
            idoficina: reserva.recogida.oficina_id,
            iddevolucion: reserva.devolucion.oficina_id,
            start: String(reserva.getFechas().recogida.format('YYYY-MM-DD HH:mm')),
            end: String(reserva.getFechas().devolucion.format('YYYY-MM-DD HH:mm')),
            beneficios: reserva.mejoras.map(e => e.id )
          })
          .then((response:any)=>{
            this.loading = false 
            console.log('response', response)
            this.calculoApi = response.data as ReservaData
            // reserva.createInvoice(this.calculoApi,{ cocheSeleccionado: this.coche })
          }).catch((error)=>{
            this.loading = false       
          })
          // this.list_coches = coches.data
        },
        mounted(){
          console.log('mounted Confirmacion')
          // console.log(this.homeView)
        },
        methods: {
          // onBack() {
          //   this.$navigator.back()
          // },
          onButtonAction(){
            this.$navigator.navigate('/reserva/detalle_reserva', { props: { data: this.data, cocheSeleccionado: this.coche } } )
          },
          // moneda(value) {
          //   value += '';
          //   var x = value.split('.');
          //   var x1 = x[0];
          //   var x2 = x.length > 1 ? '.' + x[1] : '';
          //   var rgx = /(\d+)(\d{3})/;
          //   while (rgx.test(x1)) {
          //       x1 = x1.replace(rgx, '$1' + '.' + '$2');
          //   }
          //   return  x1 + x2 + '€' 
          // }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    