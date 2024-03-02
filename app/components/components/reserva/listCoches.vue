<template>
    <GridLayout>
        <RadListView
            :items="cochesListComputed"
        >
            <v-template>
                <!-- <Label :text="item ? JSON.stringify(item.id) : 'No item'" /> -->
                <StackLayout padding="10">
                    <StackLayout class="card" padding="0">
                        <StackLayout padding="20">
                            <GridLayout columns="*,auto">
                                <Label col="0" :text="item.marca" fontSize="16" fontWeight="900" />
                                <Image src="res://check" width="30" col="1" v-if="item.disponible" />
                                <Image src="res://no_disponible" width="30" col="1" v-else />
                            </GridLayout>
                            <Label :text="item.detalle" fontSize="12" fontWeight="200" />
                            
                            <ImageCache 
                                :src="item.imagen"
                                width="320"
                                height="180"
                                stretch="aspectFill"
                            >
                            </ImageCache>
                            
                        </StackLayout>

                        <!-- <GridLayout columns="*,*,*">
                            <label  class="text" col="0" textAlignment="center" :text="item.config.amount" />
                            <label class="text"  col="1" textAlignment="center" :text="item.config.pasajeros" />
                            <label  class="text" col="2" textAlignment="center" :text="item.config.puertas" />
                        </GridLayout> -->
                        <GridLayout columns="*,*,*" :opacity="item.status ? '1':'.3'">
                            <StackLayout 
                                v-for="(plan, key) in item.planes"
                                :key="`plan-${key}`"
                                :col="key"
                                @tap="item.status ? itemTap(plan, item) : null"
                            >
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
                                        <Label class="text" :text="`${plan.nombre} ${plan.amount}€`" textAlignment="center" color="white" fontWeight="600" fontSize="14" />
                                    </StackLayout>
                                </StackLayout>
                            </StackLayout>
                            
                        </GridLayout>
                    </StackLayout>
                </StackLayout>
            </v-template>
        </RadListView>
    </GridLayout>
  </template>
  
  <script lang="ts">
//   import { ImageCache } from '@nativescript/core'
    import { ObservableArray } from '@nativescript/core/data/observable-array';
    import Vue from "nativescript-vue";
    import { planes } from '~/data/planes'
    import type { Plan } from '~/data/planes'
    import type { cocheInfo } from '~/data/reserva'
    import type { Coche } from '~/data/coches'

    export default Vue.extend({
        model: {
            prop: 'coche',
            event: 'change'
        },
        props:{
            data: {
                type: Array,
                default(){
                    return [] as Coche[]
                }
            },
            coche: {
                type: Object,
                default(){
                    return {
                        plan_id: 0,
                        coche_id: 0
                    } as cocheInfo
                }
            }
        },
      data(){
        return{
            planes: [] as Plan[],
            cochesList:  this.$props.data as Coche[],
            item: {} as Coche,
            cocheSelect: this.coche as cocheInfo,
        }
      },
      created(){
        // console.log('dddd',this.cochesList)
        this.planes = planes.data 
      },
      mounted(){
        // console.log('dd',this.cochesListComputed)
      },
      computed: {
        // cocheSeleccionado(){
        //     return this.data.find((e)=> e.id == this.cocheSelect.coche_id)
        // },
        cochesListComputed(): Coche[]{
            if (!this.cochesList) {
                return [];
            }
            return this.cochesList.map((element)=>{
                const planes = JSON.parse(JSON.stringify(this.planes))
                planes.find((e: Plan)=>e.id == 1).amount = element.config?.basic
                planes.find((e: Plan)=>e.id == 2).amount = element.config?.medio
                planes.find((e: Plan)=>e.id == 3).amount = element.config?.premium
                element.planes = planes
                return element
            })
        }
      },
      methods: {
        calcularPadding(key:number){
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
        itemTap(plan:Plan, item:Coche){
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
  