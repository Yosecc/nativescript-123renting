<template>
  <Page name="code_validation" ref="code_validation" id="code_validation" actionBarHidden="true">
    <GridLayout rows="auto,auto,auto,*,auto" class="coverImage">
      <GridLayout row="0" columns="auto, *, auto" padding="20">
        <Image col="0" @tap="onBack" src="~/assets/arrow_back.png" width="40" marginRight="10" />
        <Label col="1" textAlignment="center" :text="$t('codevalidation.introduce_tu_codigo_de_verificacion')" class="text" fontWeight="600" fontSize="16" />
        <Label col="2" width="40" height="40" background="transparent" />
      </GridLayout>

      <GridLayout row="1" padding="" marginBottom="10">
        <!-- <LottieView row="0" height="200" src="candado.json" :loop="true" :autoPlay="true" @loaded="lottieViewLoaded"></LottieView> -->
      </GridLayout>

      <StackLayout row="2" padding="20">
        <Label class="text" :text="$t('codevalidation.introduce_tu_codigo_de_verificacion')" fontSize="20" fontWeight="400" textWrap textAlignment="center" marginBottom="20"/>
        <Label class="text" textWrap="true" fontWeight="400" textAlignment="center">
          <FormattedString>
            <Span :text="$t('codevalidation.te_hemos_enviado_tu_codigo_de_verificacion_al_correo_electronico')" />
            <Span :text="`${email} `" style="color: #E74117" />
          </FormattedString>
        </Label>
      </StackLayout>

      <StackLayout row="3" padding="30 20">
        <Inputs v-model="inputs" />
        <!-- <TextField hint="" v-model="code" keyboardType="number" maxLength="4" class="input code" /> -->
      </StackLayout>

      <StackLayout row="4" padding="10 10 20 10">
        <Label class="text" textAlignment="center" v-if="conteo > 0" fontWeight="300" marginBottom="20" textWrap="true">
          <FormattedString>
            <Span :text="$t('codevalidation.enviar_el_codigo_de_nuevo_en')" />
            <Span :text="conteo" style="color: #E74117" />
          </FormattedString>
        </Label>

        <Label class="text" v-else textAlignment="center" fontWeight="800" marginBottom="20" textWrap="true" textDecoration="underline" @tap="reenviarCode">
          <FormattedString>
            <Span :text="$t('codevalidation.reeviar_codigo')" />
          </FormattedString>
        </Label>

        <StackLayout @tap="onAction" v-if="!loading" class="card" padding="15 20" background="#E74117">
          <label
            textAlignment="center"
            color="white"
            fontWeight="900"
            fontSize="20"
            :text="$t('codevalidation.continuar')"
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
    import { codeValidation, login } from "~/data/auth";
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
          inputs: codeValidation.inputs,
          _lottieView: null,
          conteo: 60,
          loading: false
        }
      },
      computed: {
        message() {
          return "Blank {N}-Vue app";
        },
        isDark(){
          return Application.systemAppearance() === 'dark'
        },
        code(){
          return codeValidation.getCode
        },
        email(){
          return login.getEmail()
        }
      },
      components:{
        Inputs
      },
      created(){
        
      },
      mounted(){
        // console.log(this.homeView)
        this.contador()
      },
      methods: {
        reenviarCode(){
          this.loading = true
          codeValidation.onResendCode().then((response)=>{
            this.loading = false
            if(response.status=='success'){
              this.conteo = 60
              this.contador()
              alert('Codigo enviado')
            }
          })
        },
        contador(){
          const intervalo = setInterval(() => {
            if (this.conteo > 0) {
              this.conteo = this.conteo - 1;
            } else {
              clearInterval(intervalo);
            }
          }, 1000);
        },
        onBack() {
          this.$navigator.back()
        },
        lottieViewLoaded(args:any) {
          // this._lottieView = args.object;
          // this._lottieView.progress = 0.2
          // this._lottieView.speed = 1.2
        },
        onAction() {
          this.loading = true
          codeValidation.onValidateCode().then((response)=>{
            this.loading = false
            switch (response.status) {
              case 'success':
                this.$navigator.navigate(this.prox_ruta, { props: { prox_ruta: this.prox_ruta } })
                break;
              case 'error':
                alert(response.message)
                return
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
  