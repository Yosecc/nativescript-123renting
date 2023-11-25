<template>
    <layoutPage 
      :title="'Detalle de tu reserva'"
      :buttonname="'CONFIRMAR'"
      :view_button="true"
      @buttonAction="onButtonAction"
    >

      <Label row="0" class="text" marginLeft="10" marginBottom="10" text="Revisa los detalles de tu reserva." textWrap />  
    
        <GridLayout row="1" rows="auto, *">
            <CardDetalleTable :plan="plan" :items="items" row="0" v-if="reload" />
            <Mejoras :plan="plan_id" v-model="mejoraGrupo" row="1" />
            <!-- <StackLayout row="2">
              <label :text="JSON.stringify(plan_id)"  />
              <label :text="JSON.stringify(mejoraGrupo)" row="2" />
              <label :text="JSON.stringify(items)" row="2" />
            </StackLayout> -->
        </GridLayout>

    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      // import { infoPersonal } from '~/data/profile'
      import { reserva } from '~/data/reserva'
      import { coches } from '~/data/coches'
      import { planes } from '~/data/planes'
      import CardDetalleTable from '~/components/components/reserva/CardDetalleTable.vue'
      import Mejoras from '~/components/components/reserva/Mejoras.vue'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import { isAuthenticated } from "~/data/auth";
      
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
            reservaMejoras: reserva.mejoras,
            mejoraGrupo:{
              plan_id: reserva.coche.plan_id,
              mejoras: reserva.mejoras
            },
            reload: true,
            items: reserva.updateInvoice()
          }
        },
        watch:{
          plan_id(to){
            reserva.coche.plan_id = to
            this.items = reserva.updateInvoice()
            // this.Reload()
          },
          mejoras(to){
            reserva.mejoras = to
            this.items = reserva.updateInvoice()
            // this.Reload()
          },
          
            // plan(to){
            //     reserva.coche.plan_id = to
            // },
            // coche(to){
            //     reserva.coche.coche_id = to
            // },
        },
        components:{
            CardDetalleTable,
            layoutPage,
            Mejoras
        },
        computed: {
            plan_id(){
              return this.mejoraGrupo.plan_id
            },
            mejoras(){
              return this.mejoraGrupo.mejoras
            },
            plan(){
                return planes.data.find((e)=> e.id == this.plan_id)
            },
            // items(){
            //   return reserva.invoice.list
            // }
        },
        created(){
          //  reserva.updateInvoice()
        },
        mounted(){
         
          // this.Reload()
        },
        methods: {
          Reload(){
            this.reload = false
            setTimeout(() => {
              this.reload = true
            }, 2000);
          },
          onBack() {
            this.$navigator.back()
          },
          onButtonAction(){
            if(!isAuthenticated()){
              this.$navigator.navigate('/auth/login')
            }else{
              this.$navigator.navigate('/payment')
            } 
          }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    