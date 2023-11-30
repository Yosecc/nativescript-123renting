<template>
    <layoutPage 
      :title="$t('infoPage.title')"
      :buttonname="meta.button"
      :view_button="true"
      :loading="loading"
      @buttonAction="onButtonAction"
      name="info_personal"
    >
        <Label row="0" class="text" marginLeft="10" marginBottom="10" :text="$t('infoPage.subtitle')"  textWrap />  
        <GridLayout  row="1">
        <ScrollView >
          <Inputs v-model="inputs"  v-if="reload" />
        </ScrollView>
        </GridLayout>
    </layoutPage>

  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { infoPersonal } from '~/data/profile'
    
    import CheckBox from '~/components/components/modules/checkbox.vue'
    import layoutPage from "~/components/pages/reserva/layoutPage.vue";
    import { isAuthenticated, Authenticated } from '~/data/auth'
    import { Dialogs } from '@nativescript/core'
    import Inputs from '~/components/components/modules/inputs.vue'

    export default Vue.extend({
      props:{
        meta:{
          type: Object,
          default() {
            return {
              button: 'Continuar',
              inputsCustom: {}
            }
          }
        },
        prox_ruta:{
          type: String,
          default: ''
        }
      },
      data(){
        return{
            inputs: infoPersonal.inputs,
            loading: false,
            reload: true
        }
      },
      components:{
        CheckBox, layoutPage, Inputs
      },
      watch:{
        errors(to){
          console.log('errrs', to)
        }
      },
      computed: {
        message() {
          return "Blank {N}-Vue app";
        },
        isDark(){
          return Application.systemAppearance() === 'dark'
        },
        errors(){
          return infoPersonal.errors
        }
      },
      created(){
        
      },
      mounted(){
        console.log('this.meta', this.meta)
        if(Object.keys(this.meta.inputsCustom).length > 0){
          for (const key in this.meta.inputsCustom) {
              const element = this.meta.inputsCustom[key];
              this.inputs.find((e)=> e.name == key).isView = element
          }
        }
        this.onreload()
        this.loading = true
        infoPersonal.onGetInfoPersonal().then((response)=>{
          this.loading = false
          // console.log('onGetInfoPersonal response', response)
          infoPersonal.setInputs(response.data.info_personal)
        })
        
        // this.$navigator.navigate('/auth/login' )
      },
      methods: {
        onAction() {
          // this.$navigator.navigate('/payment')
          // this.$navigator.navigate('/auth/create_password')
          // console.log(this.homeView)
          // this.$navigateTo('reserva');
        },
        onreload(){
          this.reload = false
            setTimeout(() => {
              this.reload =true
            }, 1);
        },
        onButtonAction(){

          if(this.meta.onActionRoute!= undefined){
              this.loading = true
            infoPersonal.onSaveInfoPersonal().then((response)=>{
              this.loading = false
              alert(JSON.stringify(response.data.info_personal))
            }).catch((error)=>{

            })
            return
          }
          if(!infoPersonal.validate()){
            this.reload = false
            setTimeout(() => {
              this.reload =true
            }, 1);
            return 
          }

          if(isAuthenticated()){
            this.$navigator.navigate('/payment' )
          }else{
            this.$navigator.navigate('/auth/create_password', { props: { prox_ruta: '/payment' }} )

            // if(infoPersonal.validate()){
            //   Authenticated()
            // }else{
            //   Dialogs.alert({
            //     title: 'Alert!',
            //     message: 'Hay datos de su informacion personal que son requeridos',
            //     okButtonText: 'OK',
            //     cancelable: true,
            //   }) 
            // }
          }
          
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  