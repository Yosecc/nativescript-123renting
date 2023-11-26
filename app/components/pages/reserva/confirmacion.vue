<template>
    <layoutPage 
      :title="'Confirma tu reserva'"
      :buttonname="'CONFIRMAR'"
      :view_button="true"
      @buttonAction="onButtonAction"
    >

      <Label class="text" row="0" marginLeft="10" marginBottom="10" text="Confirma tu reserva y vive la mejor de tus aventuras con nosotros." textWrap />  
    
      <GridLayout rows="auto,*,auto" row="1">
          <CardCocheSelect row="0" :plan="plan" :coche="coche"/>
          <CardOficinaSelect row="1" :recogida="recogida" :devolucion="devolucion" background=""/>
            
            <GridLayout row="2" columns="*,auto" padding="10" background="">
                <StackLayout orientation="horizontal" col="0" >
                  <Image src="res://card" width="30" stretch="aspectFit" marginRight="5" />
                  <Label class="text" :text="`Total a pagar Plan Basic por ${dias} dìas `"  fontWeight="200" fontSize="16" textWrap />
                </StackLayout>
                <Label :text="`${moneda((plan.amount * dias))}`" fontWeight="900" fontSize="20" col="1" class="text" />
            </GridLayout>

      </GridLayout>

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
            CardCocheSelect,
            CardOficinaSelect,
            layoutPage
        },
        computed: {
            plan(){
                return planes.data.find((e)=> e.id == this.data.plan_id)
            },
            coche(){
                return coches.data.find((e)=> e.id == this.data.coche_id)
            },
            dias(){
              return reserva.getDifFechas().dias
            },
            recogida(){
                let obj = {
                    oficina: oficinas.data.find((e)=> e.id == reserva.recogida.oficina_id),
                    fecha: reserva.recogida.fecha
                }
                console.log('obj', obj, reserva)
                return obj
            },
            devolucion(){
                return {
                    oficina: oficinas.data.find((e)=> e.id == reserva.devolucion.oficina_id),
                    fecha: reserva.devolucion.fecha
                }
            },
        },
        created(){
            // this.list_coches = coches.data
        },
        mounted(){
          // console.log(this.homeView)
        },
        methods: {
          onBack() {
            this.$navigator.back()
          },
          onButtonAction(){
            this.$navigator.navigate('/reserva/detalle_reserva', { props: { data: this.data } } )
          },
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
        font-size: 20;
      } */
    </style>
    