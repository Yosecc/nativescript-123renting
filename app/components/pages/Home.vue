<template>
  <Page name="home" ref="home" id="home" actionBarHidden="true" >
    <GridLayout rows="auto,*" v-if="Object.entries(homeView).length" class="coverImage">

      <GridLayout row="0" padding="10">
        <Image src="res://logo_white" v-if="isDark" width="100" paddingTop="10" />
        <Image src="res://logo_black" v-else width="100" paddingTop="10" />
      </GridLayout>

      <GridLayout row="1" rows="auto,auto,*,auto,auto" padding="0 10">
        <!-- https://picsum.photos/200/300 -->
        <StackLayout row="0" paddingBottom="10">
          <Label textAlignment="center" class="title" padding="0" margin="0" lineHeight="0" textWrap="true">
            <FormattedString  >
              <Span 
                v-for="(item, key) in homeView.header.title"
                :key="`title-${key}`"
                :text="item.text"
                :fontSize="item.fontSize"
                :fontWeight="item.fontWeight"
                :color="item.color"
                style="line-height: 0px;" 
              />
            </FormattedString>
          </Label>
          <Label 
            :text="homeView.header.sub.text" 
            :textAlignment="homeView.header.sub.textAlignment"
            :fontSize="homeView.header.sub.fontSize"
            :fontWeight="homeView.header.sub.fontWeight"
            :color="homeView.header.sub.color"
            class="title" 
            margin="0" 
            padding="0" 
          />
        </StackLayout>
        <!--  -->
        <StackLayout row="1" padding="10 5 5 5">
          <StackLayout class="card" padding="20" :background="homeView.body.button.background" >
            <label 
              :textAlignment="homeView.body.button.textAlignment"
              :color="homeView.body.button.color"
              :fontWeight="homeView.body.button.fontWeight"
              :fontSize="homeView.body.button.fontSize"
              :text="homeView.body.button.text" 
              @tap="logMessage" 
            />
          </StackLayout>
        </StackLayout>
        <!--  -->
        <WrapLayout row="2" >
          <StackLayout 
            v-for="(item, key) in homeView.body.gridButtons"
            :key="`card-${key}`"
            :width="item.box.width" 
            :height="item.box.height" 
            padding="5"
            @tap="item.redirect != undefined ? onRedirect(item.redirect) : null "
          >
            <FlexboxLayout class="card"  background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image 
                marginBottom="10" 
                :src="item.src" 
                :height="item.height" 
                :width="item.width" 
              />
              <label 
                :textAlignment="item.textAlignment" 
                :text="item.text" 
                :fontSize="item.fontSize" 
                :fontWeight="item.fontWeight" 
                textWrap 
              />
            </FlexboxLayout>
          </StackLayout>
        </WrapLayout>
        <!--  -->
        <StackLayout row="3" padding="5 5 5 5" background="">
          <GridLayout row="3" columns="*" class="card" background="" padding="0" height="100%" >
            <Image :src="homeView.body.banner.src" width="100%" row="0" borderRadius="20" stretch="aspectFit" />
          </GridLayout>
        </StackLayout>
        <!--  -->
        <FlexboxLayout width="100%" row="4" columns="*,*,*" padding="0 0 10 0">
          <FlexboxLayout
            v-for="(item, key) in homeView.body.gridButtonsBottom"
            :key="`cardbottom-${key}`"
            padding="5" 
            :width="item.box.width" 
          >
            <FlexboxLayout 
              padding="19" 
              width="100%" 
              class="card"
              height="100%" 
              flexDirection="column" 
              justifyContent="center" 
              alignItems="center" 
            >
              <Image 
                :src="item.src"
                :height="item.height" 
                :width="item.width" 
                marginBottom="10" 
              />
              <label 
                :textAlignment="item.textAlignment"
                :text="item.text"
                :fontSize="item.fontSize"
                :fontWeight="item.fontWeight"
                textWrap 
              />
            </FlexboxLayout>
          </FlexboxLayout> 
        </FlexboxLayout>
      </GridLayout>

    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { Application, Color, Utils } from '@nativescript/core'
  import { home } from '~/data/home'
  import codeValidation from '~/components/pages/auth/codeValidation.vue'
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
        this.$navigator.navigate('/reserva/oficina_recogida' )
        // console.log(this.homeView)
        // this.$navigateTo('reserva');
      },
      onRedirect(redirect: any){
        this.$navigator.navigate(redirect.route)
        // console.log('this.$navigateTo',this.$navigateTo(codeValidation))
        
      }
    }
  });
</script>

<style>
  /* .info {
    font-size: 20;
  } */
</style>
