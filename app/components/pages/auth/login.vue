<template>
    <Page name="login" ref="login" id="login" actionBarHidden="true" >
      <GridLayout rows="auto,auto,auto,auto,*,auto" class="coverImage">
        <GridLayout row="0" columns="auto, *, auto" padding="20" >
          <Image col="0" @tap="onBack" src="~/assets/arrow_back.png" width="40" marginRight="10" />
          <Label col="1" textAlignment="center" :text="''" class="text" fontWeight="600" fontSize="16" />
          <Label col="2" width="40" height="40" background="transparent" />
        </GridLayout>
        <GridLayout row="1" padding="30 10" marginBottom="10">
            <Image src="res://logo_white" v-if="isDark" width="250" paddingTop="10" />
            <Image src="res://logo_black" v-else width="250" paddingTop="10" />
        </GridLayout>
        <StackLayout row="2">
            <Label class="text" text="Bienvenido a bordo." fontSize="30" fontWeight="900" textAlignment="center"/>
        </StackLayout>
        <StackLayout row="3" padding="30 20">
            <Label class="text" text="Ingresa con tu email" fontWeight="600" textAlignment="center" marginBottom="20"/>
            <Inputs v-model="inputs" />
        </StackLayout>
        <StackLayout row="4" padding="40 0">
            <Label class="text"  textAlignment="center" fontSize="25" fontWeight="900" textWrap="true">
                <FormattedString>
                    <Span text="Y alquila una " />
                    <Span text="FURGONETA " fontSize="35" style="color: #E74117" />
                </FormattedString>
            </Label>
            <Label class="text" textAlignment="center" fontSize="25" fontWeight="900" textWrap="true">
                <FormattedString>
                    <Span text="para tu próximo " />
                    <Span text="VIAJE " fontSize="35" style="color: #E74117" />
                </FormattedString>
            </Label>
        </StackLayout>
        <StackLayout row="5" padding="10 10 20 10" >
          <StackLayout @tap="onAction" v-if="!loading" class="card" padding="15 20" background="#E74117" >
            <label 
              textAlignment="center"
              color="white"
              fontWeight="900"
              fontSize="20"
              :text="'CONTINUAR'"
              class="text"
            />
          </StackLayout>
          <ActivityIndicator v-else busy="true" color="#E74117" />
        </StackLayout>
      </GridLayout>
    </Page>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { login } from "~/data/auth";
    import Inputs from '~/components/components/modules/inputs.vue'
    import { infoPersonal } from "~/data/profile";

    // import { home } from '~/data/home'
    export default Vue.extend({
      props:{
            prox_ruta:{
                type: String,
                default: ''
            }
        },
        components:{
          Inputs
        },
      data(){
        return{
          inputs: login.inputs,
          loading: false,
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
        onBack() {
          this.$navigator.back()
        },
        onAction() {
          /**
           * TODO 
           * consultar al api.
           * validar el email. si el email fala validar redirecciona a codigo de validacion
           * si el mail esta validado continua
           */
          
          this.loading = true
          login.onValidaEmail().then((response)=>{
            this.loading = false

            console.log('response',response)

            switch (response.status) {
              case 'error':
                alert(response.message)
                return
                break;
              
              case "require_code":
                this.$navigator.navigate('/auth/code_validation', { props: { prox_ruta: this.prox_ruta } })
                break;
              
              case 'success':

                infoPersonal.setInputs(response.data.info_personal)
                this.$navigator.navigate(this.prox_ruta)
                
                break;
            
              default:
                break;
            }
          })
          

          
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  