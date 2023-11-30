<template>
   
   <StackLayout background="" row="1" padding="0">
        <StackLayout
            v-for="(item, key) in inputsData"
            :key="`input-${key}`"
        >     
            <StackLayout v-if="item.type == 'text' && (item.isView != undefined ? item.isView : true)" padding="0 10" marginBottom="20">
                <Label 
                  v-show="item.isPlaceholder!=undefined ? item.isPlaceholder : true" 
                  textWrap="true"
                  fontSize="12" 
                  color="#E74117" 
                  fontWeight="100" 
                >
                  <FormattedString>
                    <Span :text="item.placeholder"  />
                    <Span v-if="item.error != undefined ? item.error : false" text=" El campo es requerido" style="color: red" />
                  </FormattedString>
                </Label>
                <TextField 
                  :hint="item.placeholder" 
                  v-model="item.model" 
                  class="input"
                  borderColor="red"
                  :borderWidth="item.error ? 1:0"
                  :class="item.xClass != undefined ? item.xClass: ''"
                  :keyboardType="item.keyboard!=''? item.keyboard : undefined" 
                  :secure="item.secure==undefined?false:item.secure"
                  :maxLength="item.maxLength != undefined ? item.maxLength : 99"
                />
            </StackLayout> 

            <StackLayout v-if="item.type == 'date' && (item.isView != undefined ? item.isView : true)" padding="0 10" paddingBottom="10">
                <Label 
                  v-show="item.isPlaceholder!=undefined ? item.isPlaceholder : true" 
                  textWrap="true"
                  fontSize="12" 
                  color="#E74117" 
                  fontWeight="100" 
                >
                  <FormattedString>
                    <Span :text="item.placeholder"  />
                    <Span v-if="item.error" text=" El campo es requerido" style="color: red" />
                  </FormattedString>
                </Label>

                <DatePickerField  
                  borderColor="red"
                  :borderWidth="item.error ? 1:0" 
                  :date="item.model" 
                  @dateChange="onDateChange" 
                  :id="`date-${key}`" 
                  :hint="item.placeholder" 
                  class="input" ></DatePickerField>
            </StackLayout>

            <StackLayout v-if="item.type == 'checkbox' && (item.isView != undefined ? item.isView : true)" padding="0 10" paddingTop="10" >
              <Label 
                  v-if="item.error" 
                  textWrap="true"
                  fontSize="12" 
                  color="#E74117" 
                  fontWeight="100" 
                >
                  <FormattedString>
                    <Span text=" El campo es requerido" style="color: red" />
                  </FormattedString>
                </Label>

              <StackLayout orientation="horizontal" padding="0" >
                <CheckBox
                :borderColor="'#E74117'"
                v-model="item.model"
                ></CheckBox>
                
                <Label class="text" :text="item.placeholder" fontSize="14" textDecoration="underline"  />
              </StackLayout>
            </StackLayout>
        </StackLayout>
    </StackLayout>

  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import CheckBox from '~/components/components/modules/checkbox.vue'

    export default Vue.extend({
        model: {
            prop: 'inputs',
            event: 'change'
        },
        props:{
            inputs:{
                // type: ,
                default: []
            },
        },
      data(){
        return{
            inputsData: this.inputs,
        }
      },
      watch:{
        inputsData(to){
            
            this.$emit('change', to)  
        },
      },
      components:{
        CheckBox, 
      },
      computed: {
        isDark(){
          return Application.systemAppearance() === 'dark'
        }
      },
      created(){
      },
      mounted(){
      },
      methods: {
        onDateChange(args:any ){
          let id = args.object.id
          if(id!=undefined){
            id = id.split('-');
            id = id[1];
            this.inputsData._array[id].model = args.value
            this.$emit('change',this.inputsData )
          }
        },
        onChange(){
          this.$emit('change', this.inputsData)            
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  