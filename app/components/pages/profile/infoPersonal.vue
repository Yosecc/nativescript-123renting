<template>
    <Page name="info_personal" ref="info_personal" id="info_personal" actionBarHidden="true" >
      <GridLayout rows="auto,*,auto" class="coverImage">
        <GridLayout row="0" columns="auto, *, auto" padding="20" >
          <Image col="0" src="~/assets/arrow_back.png" width="40" marginRight="10" />
          <Label col="1" textAlignment="center" text="Información personal" fontWeight="600" fontSize="16" />
          <Label col="2" width="40" height="40" background="transparent" />
        </GridLayout>

        <StackLayout background="" row="1" padding="0 20">
            <Label text="Completa tus datos personales." marginBottom="20" />

            <StackLayout
                v-for="(item, key) in inputs"
                :key="`input-${key}`"
            >    
                <StackLayout v-if="item.type == 'text'" marginBottom="20">
                    <Label :text="item.placeholder" fontSize="12" color="#E74117" fontWeight="100" />
                    <TextField :hint="item.placeholder" v-model="item.model" :keyboardType="item.keyboard" class="input" />
                </StackLayout>

                <StackLayout v-if="item.type == 'date'">
                    <Label :text="item.placeholder" fontSize="12" color="#E74117" fontWeight="100" />
                    <DatePickerField :date="item.model" :hint="item.placeholder" class="input"></DatePickerField>
                </StackLayout>

                <StackLayout orientation="horizontal" paddingTop="10" v-if="item.type == 'checkbox'">
                    <CheckBox
                    :borderColor="'#E74117'"
                    v-model="item.model"
                    ></CheckBox>
                   
                    <Label :text="item.placeholder" fontSize="14" textDecoration="underline"  />
                </StackLayout>
            </StackLayout>
        </StackLayout>
        
        <StackLayout row="2" padding="10 10 20 10" >           
          <StackLayout class="card" padding="15 20" @tap="onAction" background="#E74117" >
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
    import { infoPersonal } from '~/data/profile'
  import CheckBox from '~/components/components/modules/checkbox.vue'
    export default Vue.extend({
      data(){
        return{
            inputs: infoPersonal.inputs
        }
      },
      components:{
        CheckBox
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
          this.$navigator.navigate('/payment' )
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
  