<template>
    <Navigator :defaultRoute="'/home'"/>
</template>

<script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { home } from '~/data/home'
  
    export default Vue.extend({
      data(){
        return{
          homeView: {},
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
        this.homeView = home
      },
      mounted(){
        // console.log(this.homeView)
  
      },
      methods: {
        logMessage() {
        //   console.log(this.homeView)
        //   this.$navigateTo('reserva');
        }
      }
    });
  </script>