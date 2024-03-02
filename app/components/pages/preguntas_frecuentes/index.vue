<template>
    <layoutPage 
      :title="$t('preguntaPage.title')"
      :buttonname="$t('continuar')"
      :view_button="false"
      @buttonAction="onButtonAction"
    >
        <Label row="0" class="text" marginLeft="10" marginBottom="10" text=""  textWrap />  
        <GridLayout row="1" rows="auto,auto">
            <RadListView
                :items="preguntas_frecuentes"
                @itemTap="onItemTap"
                ref="preguntaslist"
            >
                <v-template>
                    <StackLayout padding="10" marginBottom="">
                        <StackLayout class="card" padding="20" >
                            <GridLayout columns="*,auto">
                                <Label class="text" col="0" :text="item.pregunta" textWrap />
                                <Image col="1" src="~/assets/arrow_back.png" height="40" :rotate="item.status ?  -90:180" />
                            </GridLayout>
                            <Label class="text" :text="item.respuesta" textWrap marginLeft="10" marginTop="10" v-if="item.status" />
                        </StackLayout>
                    </StackLayout>
                </v-template>
            </RadListView>
        </GridLayout>
    </layoutPage>
  </template>
    
    <script lang="ts">
      import Vue from "nativescript-vue";
      import { Application } from '@nativescript/core'
      import layoutPage from "~/components/pages/reserva/layoutPage.vue";
      import { preguntasFrecuentes } from "~/data/preguntas_frecuentes";
      export default Vue.extend({
        data(){
          return{
            preguntas_frecuentes: preguntasFrecuentes.data
          }
        },
        watch:{   
        },
        components:{
          layoutPage
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
        },
        methods: {
            onItemTap(args:any){
                this.preguntas_frecuentes.find((e)=> e.id == args.item.id ).status = !this.preguntas_frecuentes.find((e)=> e.id == args.item.id ).status
                // this.preguntas_frecuentes.find((e)=> e.id == args.item.id ).status = !this.preguntas_frecuentes.find((e)=> e.id == args.item.status ).status
                args.object.refresh()
                // this.oficina_id = args.item.id
            },
            onBack() {
                this.$navigator.back()
            },
            onButtonAction(){
                // this.$navigator.navigate('/reserva/date_recogida' )
            }
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    