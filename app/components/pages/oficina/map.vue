<template>
  <Page name="map" ref="map" id="map" actionBarHidden="true" >
    <AbsoluteLayout background="red">
      <MapView
        @ready="onReady"
        @mapTap="onTap"
        @mapLongPress="onLongPress"
        @markerTap="onMarkerTap"
        myLocationButtonEnabled="true"
        :lat="lat"
        :lng="lng"
        zoom="15"
        top="0"
        left="0"
        width="100%"
        height="100%"
        ref="mapa"
      />
      <DockLayout top="0" left="0" width="100%" height="100%" stretchLastChild="false">
        <GridLayout dock="top" columns="auto, *, auto" padding="20" height="80" >
          <Image col="0" @tap="onBack" src="~/assets/arrow_back.png" width="40" marginRight="10" />
        </GridLayout>
    
        <GridLayout dock="bottom" columns="*" padding="0" height="240" >
          <Pager ref="pager" for="(item, key) in oficinasData" height="240">
                <v-template>
                  <StackLayout padding="20">
                    <StackLayout  class="card" padding="20" width="100%" >
                      <GridLayout dock="top" columns="auto, *, auto" height="40" >
                        <Image col="0" @tap="moveTo(key-1)" v-if="key > 0" src="~/assets/arrow_back.png" height="40" />
                        <Label class="text" col="1" textAlignment="center" :text="`${item.text}`" fontWeight="600" fontSize="16" textWrap />
                        <Image col="2" @tap="moveTo(key+1)" v-if="key < (oficinasData.length - 1)"  src="~/assets/arrow_back.png" height="40" rotate="180" />
                      </GridLayout>
                      <GridLayout dock="top" columns="*,*,*" marginTop="20">
                        <FlexboxLayout justifyContent="flex-start" padding="10 5 0 5" alignItems="center" flexDirection="column" col="0">
                          <Image src="res://clock" width="30" />
                          <Label class="texto" textAlignment="center" :text="'Lun. a Dom. 9:00 a 19:00'" fontWeight="200" fontSize="12" textWrap />
                        </FlexboxLayout >
                        <FlexboxLayout justifyContent="flex-start" padding="10 5 0 5" alignItems="center" flexDirection="column" col="1">
                          <Image src="res://email" width="30" />
                          <Label class="texto" textAlignment="center" :text="'info@123renting.ad'" fontWeight="200" fontSize="12" textWrap />
                        </FlexboxLayout >
                        <FlexboxLayout justifyContent="flex-start" padding="10 5 0 5" alignItems="center" flexDirection="column" col="2">
                          <Image src="res://phone" width="30" />
                          <Label class="texto" textAlignment="center" :text="'+376 812330'" fontWeight="200" fontSize="12" textWrap />
                        </FlexboxLayout >
                      </GridLayout>
                    </StackLayout>
                  </StackLayout>
                </v-template>
            </Pager>        
        </GridLayout>

      </DockLayout>
    </AbsoluteLayout>
  </Page>
</template>
    
    <script lang="ts">
      import { Pager } from '@nativescript-community/ui-pager/index.android';
      import Vue from "nativescript-vue";
      import { Application, Color, Utils } from '@nativescript/core'
      import { oficinas } from '~/data/oficinas'
      import * as geolocation from '@nativescript/geolocation'
      import { CoreTypes } from '@nativescript/core' 
      import { Dialogs, HttpResponse, Http } from "@nativescript/core";
      // import { reserva } from '~/data/reserva'
      import { MapView, Marker, GoogleMap, MarkerOptions, CircleOptions, Circle, Polyline ,CameraUpdate, PolylineOptions,Coordinate } from '@nativescript/google-maps';
      // import Oficinas from '~/components/components/reserva/Oficinas.vue'
      // import layoutPage from "~/components/pages/reserva/layoutPage.vue";
  
      export default Vue.extend({
        props:{
            oficina:{
                type: Object,
                default: {}
            }
        },
        data(){
          return{
            oficinasData:  oficinas.data,
            oficina_id: 0,
            keyActive: 0,
            lat: 0,
            lng: 0,
            my_lat: 0,
            my_lng: 0,
            map: {} as GoogleMap ,
            marcadores: [] as Marker[],
            polilineas: [] as Polyline[]
          }
        },
        watch:{
        
        },
        components:{
          // Oficinas,
          // layoutPage
        },
        computed: {
          message() {
            return "Blank {N}-Vue app";
          },
          isDark(){
            return Application.systemAppearance() === 'dark'
          },

        },
        created(){
        },
        mounted(){
          this.geo()
            this.oficina_id = this.oficina.id != undefined ? this.oficina.id : 0
            if(this.oficina_id!=0){
              this.keyActive = this.oficinasData.findIndex((e)=> e.id == this.oficina_id)
              if(this.keyActive!=undefined){
                setTimeout(()=>{
                 this.moveTo(this.keyActive)
                },1000)
              }
            }
        },
        methods: {
          getApiGoogle(){
            let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${this.my_lat},${this.my_lng}&destination=${this.lat},${this.lng}&key=AIzaSyBDYfyp6Rgqno86nyyfwToq7E-FcEuPrkQ`

            console.log(url)
            Http.request({
              url: url,
              method: 'GET',
              // headers: { 'Content-Type': 'application/json' },
            }).then(
              (response) => {
                const result = response.content?.toJSON()
                console.log(result)

                const coordinates = result.routes[0].overview_polyline.points;

                let decodedCoordinates = this.decodePolyline(coordinates);
                // decodedCoordinates = decodedCoordinates.map((e)=>{
                //   return {
                //     lat: e.latitude,
                //     lng: e.longitude
                //   };
                // })
                const polinie = this.addPolyline(this.map, { points: decodedCoordinates, color: '#0091EA' })
                this.polilineas.push(polinie)

                this.map.animateCamera(
                  CameraUpdate.fromCoordinates(decodedCoordinates,this.map.cameraPosition.zoom)
                );
              },
              (e) => {
                // error
              }
            )
          },
          decodePolyline(encoded:any): Coordinate[] {
            // Función para decodificar la polyline
            let index = 0;
            const len = encoded.length;
            const array: Coordinate[] = [];
            let lat = 0;
            let lng = 0;

            while (index < len) {
              let b;
              let shift = 0;
              let result = 0;
              do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
              } while (b >= 0x20);

              const dlat = (result & 1) !== 0 ? ~(result >> 1) : (result >> 1);
              lat += dlat;

              shift = 0;
              result = 0;
              do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
              } while (b >= 0x20);

              const dlng = (result & 1) !== 0 ? ~(result >> 1) : (result >> 1);
              lng += dlng;

              const point: Coordinate  = { lat: lat / 1e5, lng: lng / 1e5 };
              array.push(point);
            }
            return array;
          },
          geo(){
            geolocation.enableLocationRequest().then(() => {
              geolocation
                .getCurrentLocation({
                  desiredAccuracy: CoreTypes.Accuracy.high,
                  maximumAge: 5000,
                  timeout: 20000
                })
                .then(currentLocation => {
                  console.log(currentLocation)
                  this.my_lat = currentLocation.latitude
                  this.my_lng = currentLocation.longitude
                })
            })
          },
          addMarker(map: GoogleMap, markerOptions: MarkerOptions): Marker {
            return this.map.addMarker(markerOptions);
          },
          addCircle(map: GoogleMap, circleOptions: CircleOptions): Circle {
            return this.map.addCircle(circleOptions);
          },
          addPolyline(map: GoogleMap, polylineOptions: PolylineOptions): Polyline {
            return this.map.addPolyline(polylineOptions);
          },
          moveTo(key:number){
            const oficina = this.oficinasData.find((e,i)=> i == key);
            this.lat = oficina.latitud;
            this.lng = oficina.longitud;
            if(!this.$refs.pager){
              return
            }
            const pagerRef = this.$refs.pager;

            if (pagerRef instanceof Pager) {
              pagerRef.scrollToIndexAnimated(key, true);
            } else {
              // Manejar el caso en que $refs.pager no es una instancia de Pager
            }
            // (this.$refs.pager.nativeView as Pager).scrollToIndexAnimated(key, true);

            if(this.map){
              if(this.marcadores.length){
                this.marcadores.forEach(element=>{
                  
                  this.map.removeMarker(element)
                })
                this.marcadores = []
              }
              if(this.polilineas.length){
                this.polilineas.forEach(element=>{
                  if(element){
                    this.map.removePolyline(element)
                  }
                })
                this.polilineas = []
              }
              const markerOficina = this.addMarker(this.map, {position: { lat: this.lat, lng: this.lng }, color: '#E74117', title: oficina.text })
              this.marcadores.push(markerOficina)
              if(this.my_lat!=0 && this.my_lng!=0){
                const markerMy = this.addMarker(this.map, {position: {lat: this.my_lat , lng: this.my_lng}, color: '#0091EA', title: 'Yo|My'})
                this.marcadores.push(markerMy)

                // this.getApiGoogle()
              }  
            }
            // console.log('marcadores',this.marcadores)
          },
          onBack() {
            this.$navigator.back()
          },
          onButtonAction(){
            // this.$navigator.navigate('/reserva/date_recogida')
          },
          onReady({map}: { map: GoogleMap }){
            console.log('onReady',map)
            this.map = map
            // this.map.myLocationEnabled = true
            // if(this.lat != '' && this.lng != '' ){
              // map.addMarker({position: {lat: this.lat , lng: this.lng}})

            // }
          },
          onTap(args:any){
            console.log('onTap',args)
          },
          onLongPress(){
            console.log('onLongPress')
          },
          onMarkerTap(){
            console.log('onMarkerTap')
          },
        }
      });
    </script>
    
    <style>
      /* .info {
        font-size: 20;
      } */
    </style>
    