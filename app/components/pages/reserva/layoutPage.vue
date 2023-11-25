<template>
    <Page 
        :name="name" 
        :ref="name" 
        :id="name" 
        actionBarHidden="true"  
    >
      <GridLayout rows="auto,*" class="coverImage">
  
        <GridLayout row="0" columns="auto, *, auto" padding="20" >
          <Image col="0" @tap="onBack" src="~/assets/arrow_back.png" width="40" marginRight="10" />
          <Label col="1" textAlignment="center" :text="title" class="text" fontWeight="600" fontSize="16" />
          <Label col="2" width="40" height="40" background="transparent" />
        </GridLayout>
  
        <GridLayout row="1" rows="auto,*,auto" padding="0 10">

            <slot />
          
          <StackLayout row="2" padding="10 10 20 10" v-if="view_button" >
            <StackLayout class="card" v-if="!loading" padding="15 20" @tap="onAction" background="#E74117" >
              <label 
                textAlignment="center"
                color="white"
                fontWeight="900"
                fontSize="20"
                :text="buttonname" 
              />
            </StackLayout>
            <ActivityIndicator v-else busy="true" color="#E74117" />

          </StackLayout>
         
        </GridLayout>
  
      </GridLayout>
    </Page>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    export default Vue.extend({
        props:{
            name:{
                type: String,
                default: ''
            },
            title:{
                type: String,
                default: ''
            },
            buttonname:{
                type: String,
                default: ''
            },
            view_button:{
              type: Boolean,
              default: true
            },
            loading:{
              type: Boolean,
              default: false
            }
        },
      data(){
        return{
        }
      },
      components:{
      },
      computed: {
      },
      created(){

      },
      mounted(){
      },
      methods: {
        onBack() {
          this.$navigator.back()
        },
        onAction(){
            this.$emit('buttonAction')
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  