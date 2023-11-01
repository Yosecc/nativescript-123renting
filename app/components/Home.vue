<template>
  <Page actionBarHidden="true" >
    <GridLayout rows="auto,*" class="coverImage">

      <GridLayout row="0" padding="10">
        <!-- <Label :text="isDark" /> -->
        <Image src="res://logo_white" v-if="isDark" width="100" paddingTop="10" />
        <Image src="res://logo_black" v-else width="100" paddingTop="10" />
      </GridLayout>

      <GridLayout row="1" rows="auto,auto,*,auto,auto" padding="0 10">
        <!-- https://picsum.photos/200/300 -->
        <StackLayout row="0" paddingBottom="10">
          <Label textAlignment="center" class="title" padding="0" margin="0" lineHeight="0" textWrap="true">
            <FormattedString  >
              <Span text="VIAJA" fontSize="60"  fontWeight="800" style="line-height: 0px;" />
              <Span text=" sin " fontSize="36"  fontWeight="700" style="color: #E74117;line-height: 0px;" />
              <Span text="LIMITES" fontSize="60" fontWeight="800" :marginTop="-10" style="line-height: 0px;margin-top:-10" />
            </FormattedString>
          </Label>
          <Label text="Encuentra y alquila en sencillos pasos" class="title" textAlignment="center" margin="0" padding="0" fontSize="14" fontWeight="400" />
        </StackLayout>
        <!--  -->
        <StackLayout row="1" padding="10 5 5 5">
          <StackLayout class="card" padding="20" background="#E74117" >
            <label textAlignment="center" color="white" fontWeight="900" @tap="logMessage" fontSize="20" text="INICIA TU RESERVA" />
          </StackLayout>
        </StackLayout>
        <!--  -->
        <WrapLayout row="2" >
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout  class="card"  background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="res://car" marginBottom="10" height="40" width="40" row="0" />
              <label textAlignment="center" text="Flota" fontSize="20" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout class="card"  background=""  width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="res://edificio" marginBottom="10" height="40" width="40" row="0" />
              <label textAlignment="center" text="Oficina" fontSize="20" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout  class="card" background=""  width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="res://reserve" marginBottom="10" height="40" width="40" row="0" />
              <label textAlignment="center" text="Mis reservas" fontSize="20" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout class="card"  background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="res://person" marginBottom="10" height="40" width="40" row="0" />
              <label textAlignment="center" text="Perfil" fontSize="20" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
        </WrapLayout>
        <!--  -->
        <StackLayout row="3" padding="5 5 5 5" background="">
          <GridLayout row="3" columns="*" class="card" background="" padding="0" height="100%" >
            <Image src="~/assets/furgo.png" width="100%" row="0" borderRadius="20" stretch="aspectFit" />
          </GridLayout>
        </StackLayout>
        <!--  -->
        <FlexboxLayout width="100%" row="4" columns="*,*,*" padding="0 0 10 0">
          <FlexboxLayout padding="5" col="0">
            <FlexboxLayout 
              padding="19" 
              width="100%" 
              class="card"
              height="100%" 
              flexDirection="column" 
              justifyContent="center" 
              alignItems="center" 
            >
              <Image src="res://phone" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Contacto" fontSize="12" fontWeight="200" textWrap />
            </FlexboxLayout>
          </FlexboxLayout>
          <FlexboxLayout padding="5" col="1">
            <FlexboxLayout padding="19" class="card" background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="res://card" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Metodo de pago" fontSize="12" fontWeight="200" textWrap />
            </FlexboxLayout>
          </FlexboxLayout>
          <FlexboxLayout padding="5" col="2">
            <FlexboxLayout padding="19" class="card" background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="res://interrogative" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Preguntas Frecuentes" fontSize="12" fontWeight="200" textWrap />
            </FlexboxLayout>
          </FlexboxLayout>
        </FlexboxLayout>
      </GridLayout>
      
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  
  // import { android as androidApp, ios as iosApp } from "@nativescript/core/application";
  import { Application, Color, Utils } from '@nativescript/core'
  import { } from '@nativescript/core/ui/'
  import { device } from "@nativescript/core/platform";
  // import Theme from "@nativescript/theme";
  // import android from "@nativescript/android/framework/";
  
  export default Vue.extend({
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },
      isDark(){
        // console.log( Application.systemAppearance())
        return Application.systemAppearance() === 'dark'
      }
    },
    mounted(){

    },
    methods: {
      logMessage() {
        console.log()

      }
    }
  });
</script>

<style>
  /* .info {
    font-size: 20;
  } */
</style>
