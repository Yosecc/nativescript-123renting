<template>
    <RadListView
        :items="data"
    >
        <v-template>
            <StackLayout padding="10">
                <StackLayout class="card" padding="0">
                    <StackLayout padding="20">
                        <GridLayout columns="*,auto">
                            <Label col="0" :text="item.marca" fontSize="16" fontWeight="900" />
                            <Image src="res://check" width="30" col="1" v-if="item.status" />
                            <Image src="res://no_disponible" width="30" col="1" v-else />
                        </GridLayout>
                        <Label :text="item.detalle" fontSize="12" fontWeight="200" />
                        <Image  class="text" :src="item.imagen" width="70%" stretch="aspectFill" marginBottom="20" />
                    </StackLayout>

                    <GridLayout columns="*,*,*">
                        <label  class="text" col="0" textAlignment="center" :text="item.config.amount" />
                        <label class="text"  col="1" textAlignment="center" :text="item.config.pasajeros" />
                        <label  class="text" col="2" textAlignment="center" :text="item.config.puertas" />
                    </GridLayout>
                    <GridLayout columns="*,*,*" :opacity="item.status ? '1':'.3'">
                        <StackLayout 
                            v-for="(plan, key) in planes"
                            :key="`plan-${key}`"
                            :col="key"
                            @tap="item.status ? itemTap(plan, item) : null"
                        >
                            <!--  -->
                            <StackLayout marginTop="10" 
                                :padding="calcularPadding(key)"
                            >
                                <StackLayout
                                    padding="10" 
                                    :backgroundColor="plan.backgroundColor" 
                                    :borderTopLeftRadius="plan.borderTopLeftRadius"
                                    :borderTopRightRadius="plan.borderTopRightRadius"
                                    :borderBottomLeftRadius="plan.borderBottomLeftRadius"
                                    :borderBottomRightRadius="plan.borderBottomRightRadius"
                                >
                                    <Label class="text" :text="`${plan.nombre} ${plan.amount}`" textAlignment="center" color="white" fontWeight="600" fontSize="14" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        
                    </GridLayout>
                </StackLayout>
            </StackLayout>
        </v-template>
    </RadListView>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { planes } from '~/data/planes'
    export default Vue.extend({
        model: {
            prop: 'coche',
            event: 'change'
        },
        props:{
            data: {
                type: Array|Object,
                default: []
            },
            coche: {
                type: Object,
                default: {
                    plan_id: 0,
                    coche_id: 0
                }
            }
        },
      data(){
        return{
            planes: [],
            cocheSelect: this.coche
        }
      },
      created(){
        this.planes = planes.data
      },
      computed: {

      },
      methods: {
        calcularPadding(key){
            if(key == 0){
                return '0 5 0 0'
            }
            if(key == 1){
                return '0 5 0 5'
            }
            if(key == 2){
                return '0 0 0 5'
            }
        },  
        itemTap(plan, item){
            this.cocheSelect.plan_id = plan.id
            this.cocheSelect.coche_id = item.id

            this.$emit('change', this.cocheSelect) 
            this.$emit('onChange')
        }
        
      }
    });
  </script>
  
  <style>
    /* .info {
      border-top-left-radius: ;
    } */
  </style>
  