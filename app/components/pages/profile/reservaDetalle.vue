<template>
    <layoutPage 
      :title="'Reserva'"
      :buttonname="'CONTINUAR'"
      :view_button="false"
      @buttonAction="onButtonAction"
    >
        <!-- <Label row="0" class="text" marginLeft="10" marginBottom="0" text="" height="0"  textWrap />   -->
        <ScrollView row="1">
            <GridLayout rows="*">
                <StackLayout padding="0">
                    <StackLayout padding="10">
                        <GridLayout class="card" columns="*,auto" padding="20">
                            <StackLayout col="0" padding="0">
                                <Label textWrap="true">
                                    <FormattedString>
                                        <Span text="Reserva " />
                                        <Span :text="`#${reserva.id}`" fontWeight="bold" />
                                    </FormattedString>
                                </Label>
                                <Label textWrap="true">
                                    <FormattedString>
                                        <Span text="Método de pago " />
                                        <Span :text="paymentType" fontWeight="bold" />
                                    </FormattedString>
                                </Label>
                            </StackLayout>
                            <Label 
                                class="text" 
                                fontSize="12" 
                                padding="5" 
                                borderWidth="0.5" 
                                borderRadius="5"
                                :borderColor="status.color" 
                                :text="status.text" 
                                textTranform="uppercase" 
                                :color="status.color" 
                                fontWeight="900" 
                                col="1" 
                            />
                        </GridLayout>
                    </StackLayout>
                    
                    <CardCocheSelect row="0" :plan="plan" :coche="coche"/>
                    <!-- <Label :text="JSON.stringify(oficinas.recogida)" textWrap /> -->
                    <CardOficinaSelect row="1" 
                        :recogida="{ oficina: { text: oficinas.recogida.text }, fecha: reserva.recogida.fecha }" 
                        :devolucion="{ oficina: { text: oficinas.devolucion.text }, fecha: reserva.devolucion.fecha}" background="" 
                    />
                    
                    <CardDetalleTable :plan="plan" :items="reserva.invoice.list" row="0" />
                    <StackLayout padding="10">
                        <GridLayout class="" columns="*,*" padding="20">
                            <Button text="Factura"
                                    borderRadius="5"
                                    padding="5 20"
                                    :backgroundColor="plan.backgroundColor"
                                    color="white"
                                    fontWeight="600"
                                    fontSize="16"
                                    horizontalAlignment="center" col="0" />
                            <Button text="Contrato"
                                    borderRadius="5"
                                    padding="5 20"
                                    :backgroundColor="plan.backgroundColor"
                                    color="white"
                                    fontWeight="600"
                                    fontSize="16"
                                    horizontalAlignment="center" col="1" />
                        </GridLayout>
                    </StackLayout>
                </StackLayout>
            </GridLayout>
        </ScrollView>
    </layoutPage>
  </template>
    
    <script lang="ts">
        import Vue from "nativescript-vue";
        import { Application } from '@nativescript/core'
        import layoutPage from "~/components/pages/reserva/layoutPage.vue";
        import CardCocheSelect from "~/components/components/reserva/CardCocheSelect.vue";
        import CardOficinaSelect from "~/components/components/reserva/CardOficinaSelect.vue";
        import CardDetalleTable from "~/components/components/reserva/CardDetalleTable.vue";
        import reservaMixin from '~/components/mixins/reservaMixin'
        

    export default Vue.extend({
        mixins: [reservaMixin],
        props:{
            reserva: {}
        },
        data(){
          return{
            
          }
        },
        watch:{   
        },
        components:{
            layoutPage,
            CardCocheSelect,
            CardOficinaSelect,
            CardDetalleTable
        },
        computed: {
            message() {
                return "Blank {N}-Vue app";
            },
            isDark(){
                return Application.systemAppearance() === 'dark'
            },
        },
        created(){
        },
        mounted(){
        },
        methods: {
            onItemTap(args){
                args.object.refresh()
            },
            onBack() {
                this.$navigator.back()
            },
            onButtonAction(){
                // this.$navigator.navigate('/reserva/date_recogida' )
            }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    