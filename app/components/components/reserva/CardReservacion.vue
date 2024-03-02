<template>
    <StackLayout padding="10">
        <StackLayout class="card" v-if="coche" padding="20">
            <StackLayout background="" >
                <GridLayout columns="*, auto">
                    <Label class="text" :text="coche.marca" fontSize="16" fontWeight="900" col="0" />
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
                <Label class="text" :text="coche.detalle" fontSize="12" fontWeight="200" />
                <Label textWrap="true" fontSize="12" fontWeight="200">
                    <FormattedString>
                        <Span text="Desde " />
                        <Span :text="fechas.recogida.format('YYYY-MM-DD HH:mm')"  />
                        <Span text=" hasta " />
                        <Span :text="fechas.devolucion.format('YYYY-MM-DD HH:mm')"  />
                    </FormattedString>
                </Label>
            </StackLayout>
            <GridLayout background="" columns="auto,*">
                <Image :src="coche.imagen" width="180" stretch="aspectFit" row="0" />
                <StackLayout col="1" padding="10">
                    <StackLayout orientation="horizontal" marginBottom="10">
                        <Image src="res://edificio" width="15" marginRight="5"  stretch="aspectFill" />
                        <Label class="text" :text="`Oficinas`" fontSize="10" fontWeight="600" />
                    </StackLayout>
                    <StackLayout orientation="horizontal">
                        <Image src="~/assets/arrow.png" width="15" marginRight="5" rotate="180" stretch="aspectFill" />
                        <Label class="text" :text="oficinas.recogida.text" fontSize="10" fontWeight="100" />
                    </StackLayout>
                    <StackLayout orientation="horizontal">
                        <Image src="~/assets/arrow.png" width="15" marginRight="5" stretch="aspectFill" />
                        <Label class="text" :text="oficinas.devolucion.text" fontSize="10" fontWeight="100" />
                    </StackLayout>

                    <FlexboxLayout v-if="reserva.status!='init'" @tap="verreserva" justifyContent="space-around" columns="auto,auto" marginTop="15" borderWidth="1" borderColor="#E74117" padding="5" borderRadius="5" orientation="horizontal">
                        <Label class="text" :text="`Ver reserva`" fontSize="14" fontWeight="600" col="0" />
                        <Image src="~/assets/arrow.png" textAlignment="right" horizontalAlignment="right" width="20" rotate="180" stretch="aspectFill" col="1" />
                    </FlexboxLayout >

                    <FlexboxLayout v-if="reserva.status=='init'" @tap="concretarReserva" justifyContent="space-around" columns="auto,auto" marginTop="15" borderWidth="1" borderColor="#DD2C00" padding="5" borderRadius="5" orientation="horizontal">
                        <Label class="text" :text="`Concretar reserva`" fontSize="13" fontWeight="600" col="0" />
                        <!-- <Image src="~/assets/arrow.png" textAlignment="right" horizontalAlignment="right" width="20" rotate="180" stretch="aspectFill" col="1" /> -->
                    </FlexboxLayout >
                    

                </StackLayout>
            </GridLayout>
        </StackLayout>
    </StackLayout>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    // import reservaMixin from '~/components/mixins/reservaMixin'
    import { reserva } from "~/data/reserva";
    import type { Reserva } from "~/data/reserva";
    
    export default Vue.extend({
        mixins: [],
        props:{
            reserva: { }
        },
      data(){
        return{
            reservaData: this.reserva as Reserva
        }
      },
      created(){
      },
      computed: {
        
      },
      methods: {
        verreserva(){
            this.$navigator.navigate('/profile/reservaDetalle', { props: { reserva: this.reserva } } )
        },
        concretarReserva(){
            reserva.procesarReserva(this.reservaData)
            this.$navigator.navigate('/payment')

        }
      }
    });
  </script>
  
  <style>
    /* .info {
      border-top-left-radius: ;
    } */
  </style>
  