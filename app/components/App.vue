<template>
    <Navigator :defaultRoute="'/home'"/>
</template>

<script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { home } from '~/data/home'
    import type { ResponseObject, Traduccion } from '~/data/home'
    import Api from '~/services/Api'
    import cache from "~/plugins/cache";
    import { es  } from '~/i18n/es'
    import { en  } from '~/i18n/en'
    import { ca  } from '~/i18n/ca'
    import { de  } from '~/i18n/de'
    import { mejoras } from '~/data/mejoras'
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

        // if(cache.get('homeData')!=undefined){
        //   const homeData = JSON.parse(cache.get('homeData'))
        //   this.setTraducciones(homeData.elementos)
        //   home.parametros = homeData.parametros
        //   return
        // }
        /**
         * TODO calcular region
         * TODO modificar parametro
         */

        Api.get('/home_frontend?idioma=1&idregion=1&cantidad=4').then( (response:ResponseObject) => {
          this.setTraducciones(response.data.elementos)
          home.parametros = response.data.parametros
          mejoras.addMejora(response.data.beneficios)
          cache.set('homeData',JSON.stringify({
            elementos: response.data.elementos,
            parametros: response.data.parametros
          }))
        })

      },
      mounted(){
        // console.log(this.homeView)
  
      },
      methods: {
        setTraducciones(traducciones: Traduccion[]){
          traducciones.forEach( (traduccion : Traduccion) => {
            
            const claveCompleta = traduccion.nombre;

            // Dividir la clave completa en partes
            const partesClave = claveCompleta.split('.');
            
            let objetoActual: any = null
            // Inicializar el objeto actual con el objeto original
            switch (this.$i18n.locale) {
              case 'en':
                objetoActual = en;
                
                break;
              case 'es':
                objetoActual = es;
                break;
              case 'ca':
                objetoActual = ca;
                break;
              case 'de':
                objetoActual = de;
                 break;
              default:
                break;
            }
            
            // Iterar sobre las partes de la clave, excepto la última que es la propiedad a modificar
            for (let i = 0; i < partesClave.length - 1; i++) {
              const parte = partesClave[i];
              // Actualizar el objeto actual con la parte actual
              objetoActual = objetoActual[parte];
            }

            // La última parte de la clave es la propiedad a modificar
            const propiedadAActualizar = partesClave[partesClave.length - 1];

            // Modificar el valor de la propiedad
            if(objetoActual[propiedadAActualizar]!=undefined){
              objetoActual[propiedadAActualizar] = traduccion.titulo
            }

          })
        },
        logMessage() {
        //   console.log(this.homeView)
        //   this.$navigateTo('reserva');
        }
      }
    });
  </script>