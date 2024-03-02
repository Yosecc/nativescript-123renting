<template>
    <StackLayout padding="10">
        <!-- <Label text="Mejora tu reserva" color="#E74117" fontSize="16" fontWeight="800" textAlignment="center" marginBottom="20" />

        <StackLayout class="card" padding="10" >
            <WrapLayout background="" height="50" marginBottom="8">
                <GridLayout  width="30%" background="">
                </GridLayout>
                <GridLayout  background="" width="23.33%" rows="*" v-for="(i, k) in planes" :key="`itsm-${k}`">
                    <Button 
                        row="0" 
                        :text="`${i.nombre}`" 
                        :color="i.id == mejoraGroupReact.plan_id ? 'white':i.backgroundColor" 
                        fontSize="10" 
                        fontWeight="bold" 
                        :backgroundColor="i.id == mejoraGroupReact.plan_id ? i.backgroundColor:''"
                        class="buttonMejora"
                        margin="4" 
                        borderRadius="5"
                        @tap="cambioPlan(i.id)" 
                        :opacity="i.id == mejoraGroupReact.plan_id ? '1':'.3'"
                    />
                </GridLayout>
            </WrapLayout>
            <WrapLayout height="50" v-for="(item, key) in items" :key="`item-${key}`">
                <GridLayout width="30%">
                    <Label class="text" :text="item.name" fontSize="12" margin="0" textWrap padding="0" />
                </GridLayout>
                <GridLayout width="23.33%" v-for="(i, k) in item.planes" :key="`itm-${k}`">
                    <Button 
                        v-if="!i.incluido" 
                        :text="`+${i.amount}€`" 
                        @tap="onSelectMejora(item,i)" 
                        class="buttonMejora btnadd text"
                        borderWidth="1" 
                        margin="4" 
                        borderRadius="5"
                        :class="estadoMejora(item,i) ? 'active' : ''" 
                        :opacity="i.id == mejoraGroupReact.plan_id ? '1':'.3'"
                    />
                    <Image v-else src="res://check" height="25" :opacity="i.id == mejoraGroupReact.plan_id ? '1':'.3'" />
                </GridLayout>
            </WrapLayout>
        </StackLayout> -->

    
    </StackLayout>
  </template>
    <script lang="ts">
    import Vue from "nativescript-vue";
    import { mejoras } from "~/data/mejoras";
    import { planes } from '~/data/planes'
    
    export default Vue.extend({
        model: {
            prop: 'mejoraGroup',
            event: 'change'
        },
        props:{
            // plan: {
            //     type: Object,
            //     default: {}
            // },
            mejoraGroup:{
                type: Object,
                default: {
                    plan: 0,
                    mejoras: []
                }
            },
            
        },
      data(){
        return{
            // planes: planes.data,
            // mejoraGroupReact: this.mejoraGroup
        }
      },
      created(){
      },
      computed: {
        // items(){
        //     return mejoras.data
        // }
      },
      methods: {
        // cambioPlan(plan_id: number){
        //     this.mejoraGroupReact.plan_id = plan_id
        //     this.mejoraGroupReact.mejoras = []
        //     this.$emit('change', this.mejoraGroupReact )
        // },
        // estadoMejora(mejora: object, planSeletec: object){
        //     if(planSeletec.id == this.mejoraGroupReact.plan_id){
        //         if(!this.mejoraGroupReact.mejoras){
        //             return false
        //         }
        //         if(this.mejoraGroupReact.mejoras.find((e)=> e.id == mejora.id) != undefined){
        //             return true
        //         }
        //     }
        //     return false
        // },
        // onSelectMejora(mejora: object, planSeletec: object){


        //     let index = this.mejoraGroupReact.mejoras.findIndex((e)=> e.id == mejora.id)
        //     if(index != -1){
        //         this.mejoraGroupReact.mejoras.splice(index,1)
        //         this.$emit('change',this.mejoraGroupReact) 
        //         if(this.mejoraGroupReact.plan_id == planSeletec.id){
        //             return
        //         }
        //     }

        //     if(this.mejoraGroupReact.plan_id == planSeletec.id){

        //     }else{
        //         this.mejoraGroupReact.plan_id = planSeletec.id
            
        //         this.mejoraGroupReact.mejoras = []
                
        //         this.$emit('change', this.mejoraGroupReact )
        //     }

        //     this.mejoraGroupReact.mejoras.push({
        //         name: mejora.name ,
        //         id: mejora.id,
        //         amount: mejora.planes.find((e)=> e.id == planSeletec.id).amount,
        //     })

            

        //     this.$emit('change',this.mejoraGroupReact) 

        // }
      }
    });
  </script>
  
  <style lang="scss" scope>
    .btnadd{
        &.active{
            background: green;
            color: white;
        }
    }
  </style>
  