<template>
    <Page name="success_payment" ref="success_payment" id="success_payment" actionBarHidden="true" >
      <GridLayout rows="*,*" class="coverImage">
       
        <GridLayout background="" row="0" padding="20">
            <FlexboxLayout flexDirection="column" justifyContent="center" alignItems="center" background="">
                <Label class="text" text="¡EN HORA BUENA!" fontSize="40" fontWeight="600" textWrap textAlignment="center" marginBottom="0"/>
                <Label class="text" text="Ahora disfruta de tu" fontSize="30" fontWeight="300" textWrap textAlignment="center" marginBottom="0"/>
                <Label class="text" text="MEJOR VIAJE" fontSize="40" fontWeight="600" textWrap textAlignment="center" marginBottom="0"/>
            </FlexboxLayout >
        </GridLayout>

        <GridLayout background="" row="1" padding="0" marginBottom="10">
            <LottieView height="400" src="car.json" :loop="true" :autoPlay="true"  @loaded="lottieViewLoaded"></LottieView>
        </GridLayout>

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
        setTimeout(()=>{
            this.$navigator.navigate('/home')
        }, 5000)
        // console.log(this.homeView)
  
      },
      methods: {
        lottieViewLoaded(args:any) {
                this._lottieView = args.object;
        },
        onAction() {
        //   this.$navigator.navigate('/profile/info_personal')
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
  