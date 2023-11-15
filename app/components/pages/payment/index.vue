<template>
    <Page name="payment" ref="payment" id="payment" actionBarHidden="true" >
      <GridLayout rows="auto,*,auto" class="coverImage">
        <GridLayout row="0" padding="0" marginBottom="10">
            <LottieView height="300" src="creditcards.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
        </GridLayout>
        <StackLayout row="1" padding="20">
            <Label text="Paga tu reserva" fontSize="20" fontWeight="600" textWrap textAlignment="center" marginBottom="20"/>
            <Label text="Total a pagar" fontWeight="400" textWrap textAlignment="center"/>
            <Label text="834€" fontSize="70" fontWeight="900" textWrap textAlignment="center" color="#E74117" marginBottom="40"/>
            <Label textWrap="true" fontWeight="400"  marginBottom="16">
                <FormattedString>
                    <Span text="Disfruta de nuestro " />
                    <Span text="DESCUENTO del 5% " fontWeight="600" fontSize="16" style="color: #E74117"/>
                    <Span text="en tu reserva pagando Ahora mismo."  />
                </FormattedString>
            </Label>
            <Label textWrap="true" fontWeight="400" >
                <FormattedString>
                    <Span text="Si pagas en nuestras oficinas te descontamos " />
                    <Span text="1€ " fontWeight="600" fontSize="16" style="color: #E74117"/>
                    <Span text="en tu reserva."  />
                </FormattedString>
            </Label>
        </StackLayout>
        <StackLayout row="2" padding="10 10 20 10" >
            <GridLayout @tap="onAction" columns="*, auto" class="card" padding="15 20" marginBottom="10" background="#E74117" >
              <label 
                col="0"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'Pagar ahora'" 
              />
              <label 
                col="1"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'100€'" 
              />
            </GridLayout>
            <GridLayout @tap="onAction" columns="*, auto" class="card" padding="15 20" background="#292929" >
              <label 
                col="0"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'Pagar en la oficina'" 
              />
              <label 
                col="1"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'100€'" 
              />
            </GridLayout>
          </StackLayout>
      </GridLayout>
    </Page>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
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
        }
      },
      created(){
        
      },
      mounted(){
        // console.log(this.homeView)
  
      },
      methods: {
        lottieViewLoaded(args:any) {
                this._lottieView = args.object;
        },
        onAction() {
          this.$navigator.navigate('/payment/success')
          // console.log(this.homeView)
          // this.$navigateTo('reserva');
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  