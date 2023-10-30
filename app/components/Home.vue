<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto,*">

      <GridLayout row="0" backgroundColor="#E74117" paddingBottom="10">
        <Image src="~/assets/logo.png" width="100" padding="10" />
      </GridLayout>

      <GridLayout row="1" rows="auto,auto, *,auto,auto" padding="0 10">
        <!-- https://picsum.photos/200/300 -->
        <StackLayout row="0" padding="20" background="">
          <Label textAlignment="center" color="#101010" padding="0" margin="0" height="50" background="" lineHeight="0" textWrap="true">
            <FormattedString  >
              <Span text="VIAJA" fontSize="60"  fontWeight="800" style="line-height: 0px;" />
              <Span text=" sin" fontSize="36"  fontWeight="700" style="color: #E74117" />
            </FormattedString>
          </Label>
          <Label textAlignment="center" color="#101010" padding="0" margin="0" height="50" background="" lineHeight="0" textWrap="true">
            <FormattedString  >
              <Span text="LIMITES" fontSize="60" fontWeight="800" style="line-height: 0px;" />
            </FormattedString>
          </Label>
          <Label text="Encuentra y alquila en sencillos pasos" textAlignment="center" marginTop="5" fontSize="14" fontWeight="400" />
        </StackLayout>
        <StackLayout row="1" padding="10 5 5 5">
          <StackLayout class="card" padding="20" background="#E74117" >
            <label textAlignment="center" color="white" fontWeight="900" text="INICIA TU RESERVA" />
          </StackLayout>
        </StackLayout>

        <WrapLayout row="2" >
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout  class="card"  background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/flota.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Flota" fontSize="16" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout class="card"  background=""  width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/officice.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Oficina" fontSize="16" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout  class="card" background=""  width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/order icon.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Mis reservas" fontSize="16" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
          <StackLayout width="50%" height="50%" padding="5">
            <FlexboxLayout class="card"  background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/iconamoon_profile-fill.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Perfil" fontSize="16" fontWeight="400" textWrap />
            </FlexboxLayout>
          </StackLayout>
        </WrapLayout>
        
        <StackLayout row="3" padding="5 5 0 5">
          <GridLayout row="3" columns="*,*" class="card" padding="10" background="">
            <FlexboxLayout col="0"  justifyContent="center" alignItems="center" width="100%" >
              <Image src="~/assets/ban.png" width="150" row="0"  />
            </FlexboxLayout>
            <FlexboxLayout col="1"  flexDirection="column" justifyContent="center" alignItems="center" width="100%"  >
                <Label text="Necesitas una" textAlignment="center" fontSize="18" fontWeight="900" padding="0" margin="5 0 0 0" width="100%" />
                <Label text="FURGO?" color="#E74117" textAlignment="center" fontSize="30" fontWeight="900" padding="0" margin="0" width="100%" />
            </FlexboxLayout>
          </GridLayout>
        </StackLayout>
        
        <GridLayout row="4" columns="*,*,*" padding="5 0 10 0">
          <FlexboxLayout padding="5" col="0">
            <FlexboxLayout padding="19" width="100%" class="card" minHeight="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/phone.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Contacto" fontSize="12" fontWeight="200" textWrap />
            </FlexboxLayout>
          </FlexboxLayout>
          <FlexboxLayout  padding="5 5 0 5" col="1">
            <FlexboxLayout padding="19" class="card" background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/credit.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Metodo de pago" fontSize="12" fontWeight="200" textWrap />
            </FlexboxLayout>
          </FlexboxLayout>
          <FlexboxLayout padding="5 5 0 5"  col="2">
            <FlexboxLayout padding="19" class="card" background="" width="100%" height="100%" flexDirection="column" justifyContent="center" alignItems="center" >
              <Image src="~/assets/inte.png" marginBottom="10" height="25" width="25" row="0" />
              <label textAlignment="center" text="Preguntas Frecuentes" fontSize="12" fontWeight="200" textWrap />
            </FlexboxLayout>
          </FlexboxLayout>
        </GridLayout>
      </GridLayout>
      
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";

  export default Vue.extend({
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },

    methods: {
      logMessage() {
        console.log('You have tapped the message!')
      }
    }
  });
</script>

<style>
  /* .info {
    font-size: 20;
  } */
</style>
