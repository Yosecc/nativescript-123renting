<template>
    <Page name="code_validation" ref="code_validation" id="code_validation" actionBarHidden="true" >
      <GridLayout rows="auto,auto,*,auto" class="coverImage">
        <GridLayout row="0" padding="0" marginBottom="10">
            <LottieView height="300" src="creditcards.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
        </GridLayout>
         <!-- <StackLayout row="1" padding="20">
            <Label text="Introduce tu código de verificación" fontSize="20" fontWeight="400" textWrap textAlignment="center" marginBottom="20"/>
            <Label textWrap="true" fontWeight="400" textAlignment="center">
                <FormattedString>
                    <Span text="Te hemos enviado tu código de verificación al correo eléctronico " />
                    <Span text="martinez87@gmail.com " style="color: #E74117" />
                </FormattedString>
            </Label>
        </StackLayout> -->
        <!-- <StackLayout row="2" padding="30 20">
            <TextField hint="" v-model="code" keyboardType="number" maxLength="4" class="input code" />
        </StackLayout> -->
        <!-- -->
<!-- 
        <StackLayout row="4" padding="10 10 20 10" >
            
                <Label textAlignment="center" fontWeight="300" marginBottom="20" textWrap="true">
                    <FormattedString>
                        <Span text="Envíar el código de nuevo en " />
                        <Span text="00:20 " style="color: #E74117" />
                    </FormattedString>
                </Label>
                
           
            <StackLayout @tap="onAction" class="card" padding="15 20" background="#E74117" >
              <label 
                textAlignment="center"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'CONTINUAR'" 
              />
            </StackLayout>
          </StackLayout> -->
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
  