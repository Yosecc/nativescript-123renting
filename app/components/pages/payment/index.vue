<template>
    <Page name="payment" ref="payment" id="payment" actionBarHidden="true" >
      <GridLayout rows="auto,*,auto" class="coverImage">
        <GridLayout row="0" padding="0" marginBottom="10">
            <LottieView height="300" src="creditcards.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
        </GridLayout>
        <StackLayout row="1" padding="20">
            <Label class="text" text="Paga tu reserva" fontSize="20" fontWeight="600" textWrap textAlignment="center" marginBottom="20"/>
            <Label class="text" text="Total a pagar" fontWeight="400" textWrap textAlignment="center"/>
            <Label class="text" :text="moneda(total)" fontSize="70" fontWeight="900" textWrap textAlignment="center" color="#E74117" marginBottom="40"/>
            <Label class="text" textWrap="true" fontWeight="400"  marginBottom="16">
                <FormattedString>
                    <Span text="Disfruta de nuestro " />
                    <Span text="DESCUENTO del 5% " fontWeight="600" fontSize="16" style="color: #E74117"/>
                    <Span text="en tu reserva pagando Ahora mismo."  />
                </FormattedString>
            </Label>
            <Label class="text" textWrap="true" fontWeight="400" >
                <FormattedString>
                    <Span text="Si pagas en nuestras oficinas te descontamos " />
                    <Span text="1€" fontWeight="600" fontSize="16" style="color: #E74117"/>
                    <Span text="en tu reserva."  />
                </FormattedString>
            </Label>
        </StackLayout>
        <StackLayout row="2" padding="10 10 20 10" >
            <GridLayout @tap="onAction('card')" columns="*, auto" class="card" padding="15 20" marginBottom="10" background="#E74117" >
              <label 
                col="0"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'Pagar ahora'" 
                class="text"
              />
              <label 
                col="1"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="moneda(totalPasarela)" 
                class="text"
              />
            </GridLayout>
            <GridLayout @tap="onAction('oficina')" columns="*, auto" class="card" padding="15 20" background="#292929" >
              <label 
                col="0"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'Pagar en la oficina'"
                class="text"
              />
              <label 
                col="1"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="moneda(totalOficina)"
                class="text"
              />
            </GridLayout>
          </StackLayout>
      </GridLayout>
    </Page>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { reserva, Reservas } from "~/data/reserva";
    // import { home } from '~/data/home'
    export default Vue.extend({
      data(){
        return{
          _lottieView: null,
        }
      },
      computed: {
        message() {
          return "Blank {N}-Vue app";
        },
        isDark(){
          return Application.systemAppearance() === 'dark'
        },
        total(){
          return reserva.invoice.total
        },
        totalPasarela(){
          return reserva.invoice.total - ( ( reserva.invoice.total * 5 ) / 100 )
        },
        totalOficina(){
          return reserva.invoice.total - 1
        },
      },
      created(){
        
      },
      mounted(){
        // console.log(this.homeView)
  
      },
      methods: {
        lottieViewLoaded(args:any) {
          this._lottieView = args.object;
          this._lottieView.progress = 0.2
          this._lottieView.speed = 1.2
        },
        idRand(){
          const min = 1;
          const max = 100000;
          const randomNumberInRange = Math.floor(Math.random() * (max - min + 1)) + min;
          return randomNumberInRange
        },
        onAction(type) {
          
          reserva.invoice.payment_type = type
          
          switch (type) {
            case 'card':
              reserva.status = 'active'
              break;
            case 'oficina':
              reserva.status = 'pending'
              break;
            default:
              break;
          }

          if(reserva.id != 0){
            
            let index = Reservas.data.findIndex( (e) => e.id == reserva.id )

            if(index != -1){
              Reservas.data.splice(index,1)
            }

          }else if(reserva.id == 0){
            reserva.id = this.idRand()
          }

          Reservas.addReserva(reserva)

          this.$navigator.navigate('/payment/success')

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
  