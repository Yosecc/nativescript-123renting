<template>
    <Page name="login" ref="login" id="login" actionBarHidden="true" >
      <GridLayout rows="auto,auto,auto,*,auto" class="coverImage">
        <GridLayout row="0" padding="30 10" marginBottom="10">
            <Image src="res://logo_white" v-if="isDark" width="250" paddingTop="10" />
            <Image src="res://logo_black" v-else width="250" paddingTop="10" />
        </GridLayout>
        <StackLayout row="1">
            <Label text="Bienvenido a bordo." fontSize="30" fontWeight="900" textAlignment="center"/>
        </StackLayout>
        <StackLayout row="2" padding="30 20">
            <Label text="Ingresa con tu email" fontWeight="600" textAlignment="center" marginBottom="20"/>
            <TextField hint="Email" class="input" />
        </StackLayout>
        <StackLayout row="3" padding="40 0">
            <Label textAlignment="center" fontSize="25" fontWeight="900" textWrap="true">
                <FormattedString>
                    <Span text="Y alquila una " />
                    <Span text="FURGONETA " fontSize="35" style="color: #E74117" />
                </FormattedString>
            </Label>
            <Label textAlignment="center" fontSize="25" fontWeight="900" textWrap="true">
                <FormattedString>
                    <Span text="para tu próximo " />
                    <Span text="VIAJE " fontSize="35" style="color: #E74117" />
                </FormattedString>
            </Label>
        </StackLayout>

        <StackLayout row="4" padding="10 10 20 10" >
            <StackLayout @tap="onAction" class="card" padding="15 20" background="#E74117" >
              <label 
                textAlignment="center"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="'CONTINUAR'" 
              />
            </StackLayout>
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
        onAction() {
            // console.log('this.$navigateTo',this.$navigateTo)
          this.$navigator.navigate('/auth/code_validation')
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  