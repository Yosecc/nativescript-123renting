
<template>
    <layoutPage 
      :title="'Contraseña'"
      :buttonname="'CONTINUAR'"
      :view_button="true"
      @buttonAction="onButtonAction"
      name="info_personal"
    >
        <GridLayout row="0" rows="auto,auto" padding="0" marginBottom="10">
            <LottieView row="0" height="300" src="candado.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView>
            <Label class="text" row="1" text="Crea tu contraseña" fontSize="20" fontWeight="600" textWrap textAlignment="center" marginBottom="20"/>
        </GridLayout>
        <ScrollView  row="1">
          <GridLayout >
            <Inputs v-model="inputs" v-if="reload" />
          </GridLayout>
        </ScrollView>
    </layoutPage>

  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    // import { infoPersonal } from '~/data/profile'
    import { createPassword  } from '~/data/auth'
    import layoutPage from "~/components/pages/reserva/layoutPage.vue";
    import { isAuthenticated, Authenticated } from '~/data/auth'
    import { Dialogs } from '@nativescript/core'
    import Inputs from '~/components/components/modules/inputs.vue'

    export default Vue.extend({
        props:{
            prox_ruta:{
                type: String,
                default: ''
            }
        },
      data(){
        return{
            inputs: createPassword.inputs,
            _lottieView: null,
            reload: true

        }
      },
      components:{
        layoutPage, Inputs
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
        // this.$navigator.navigate('/auth/login' )
      },
      methods: {
        lottieViewLoaded(args:any) {
            this._lottieView = args.object;
        },
        onAction() {
          
          // this.$navigator.navigate('/payment')
          // this.$navigator.navigate('/auth/create_password')
          // console.log(this.homeView)
          // this.$navigateTo('reserva');
        },
        onButtonAction(){
          // console.log(infoPersonal)
          if(!createPassword.validateIgualdad()){
            alert('las contrasenas no coinciden')
            return
          }
            if(!createPassword.validate()){
              this.reload = false
              setTimeout(() => {
                this.reload =true
              }, 1);
            }else{
              Authenticated()
              this.$navigator.navigate(this.prox_ruta )
            }
        }
      }
    });
  </script>
  
  <style scoped >
    Label{
        color: black !important;
    }
    Button{
        background : red !important;
    }
    /* .info {
      font-size: 20;
    } */
  </style>