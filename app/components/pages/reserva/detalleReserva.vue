<template>
    <layoutPage 
      :title="$t('reserva.paso7.titulo')"
      :buttonname="$t('continuar')"
      :view_button="true"
      @buttonAction="onButtonAction"
    >
      <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('reserva.paso7.subtitulo')" textWrap />    
      <GridLayout row="1" >
          <ScrollView>
            <StackLayout padding="0" >
              <!-- <CardDetalleTable :plan="plan" :items="items" row="0" /> -->
              <!-- <Mejoras :plan="plan_id" v-model="mejoraGrupo" row="1" /> -->
            </StackLayout>
          </ScrollView>
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
  import Api from '~/services/Api'
  
  export default Vue.extend({
    props:{
        data: {
            type: Object,
            default: {
                plan_id: 0,
                coche_id: 0
            }
        },
    },
    data(){
      return{
        reservaMejoras: reserva.mejoras,
        mejoraGrupo:{
          plan_id: reserva.coche.plan_id,
          mejoras: []
        },
        reload: true,
        items: reserva.invoice.list,
        loading: false
      }
    },
    watch:{
      plan_id(to){
        reserva.coche.plan_id = to
        this.onUpdateCalculo()
        // this.items = reserva.updateInvoice()
        
      },
      mejoras(to){
        console.log('to',to)
        reserva.mejoras = to
        // this.items = reserva.updateInvoice()
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
        // plan_id(){
        //   return this.mejoraGrupo.plan_id
        // },
        // mejoras(){
        //   return this.mejoraGrupo.mejoras
        // },
        // plan(){
        //     const plan = planes.data.find((e)=> e.id == this.plan_id)
        //     if(plan){
        //       plan.amount = reserva.invoice.plan.amount
        //     }
        //     return plan
        // },
        // items(){
        //   return reserva.invoice.list
        // }
    },
    created(){
      // console.log('items', this.items)
      //  reserva.updateInvoice()
    },
    mounted(){
      
      // this.Reload()
    },
    methods: {
      onUpdateCalculo(){
        // this.loading = true
        // Api.post('/calcular_costo',{ 
        //   coche_id: reserva.coche.coche_id ,
        //   plan: reserva.coche.plan_id,
        //   idoficina: reserva.recogida.oficina_id,
        //   iddevolucion: reserva.devolucion.oficina_id,
        //   start: String(reserva.getFechas().recogida.format('YYYY-MM-DD HH:mm')),
        //   end: String(reserva.getFechas().devolucion.format('YYYY-MM-DD HH:mm'))
        // })
        // .then((response)=>{
        //   this.loading = false 
        //   console.log('response', response)
        //   this.items = reserva.updateInvoice()
        //   reserva.createInvoice(response.data,{ cocheSeleccionado: reserva.cocheSeleccionado })
        // }).catch((error)=>{
        //   this.loading = false       
        // })
      },
      Reload(){
        // this.reload = false
        // setTimeout(() => {
        //   this.reload = true
        // }, 10);
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
    