  <template>
    <StackLayout padding="10">
        <DatePickerField :date="fechasData.date" :minDate="minDate" @dateChange="onDateChange"  hint="Seleccionar fecha" class="input"></DatePickerField>
        
        <GridLayout height="75" class="" columns="*,*">
          <TextField @tap="onselecthora" col="0" marginRight="4" :editable="false" :text="`${hora} hs`" class="input"/>
          <TextField @tap="onselectminuto" col="1" marginLeft="4" :editable="false" :text="`${minuto} min`" class="input"/>
        </GridLayout>
  
        <!-- <TimePickerField :time="fechasData.time" :minTime="minTime" minuteInterval="30" @timeChange="onTimeChange" hint="Seleccionar hora" class="input"></TimePickerField> -->
    </StackLayout>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { reserva } from '~/data/reserva'
    import moment from 'moment'
    import { Dialogs } from '@nativescript/core'
    export default Vue.extend({
        model: {
            prop: 'fechas',
            event: 'change'
        },
        props:{
           fechas: {
            type: Object,
            default: {
              date: moment().format('Y/M/D'),
              time: '01:00'
            }
          }
        },
      data(){
        return{
          minDate: moment().format('Y/M/D'),
          date: moment().format('Y/M/D'),
          minTime: '02:00',
          time: '03:00',
          hora: 9,
          minuto: 0,
          fechasData: this.fechas,
          horario: [9,10,11,12,13,14,15,16,17,18,19,20],
          minutos: [0,30]
        }
      },
      computed: {

      },
      methods: {
        onselecthora(){
          const ahora = new Date().getHours();
          // const ahora = 22;
        
          Dialogs.action({
            title: 'Hora',
            message: 'Selecciona una hora:',
            cancelButtonText: 'Cancel',
            actions: this.horario.filter(hora => moment(this.fechasData.date).isBefore(moment().endOf('day')) || hora >= ahora).map(e => `${e} hs`),
            // actions: this.horario.filter(hora => hora >= ahora).map(e => `${e} hs` ),
            cancelable: true,
            // destructiveActionsIndexes: [2],
          }).then((result) => {
            console.log(result)
            if(result != 'Cancel'){
              this.hora = parseInt(result.replace(' hs', '')) 
            }
            this.fechasData.time = `${this.hora}:${this.minuto}`
            this.$emit('change', this.fechasData)
          })
        },
        onselectminuto(){
          Dialogs.action({
            title: 'Hora',
            message: 'Selecciona una hora:',
            cancelButtonText: 'Cancel',
            actions: this.minutos.map(e => `${e} min` ),
            cancelable: true,
            // destructiveActionsIndexes: [2],
          }).then((result) => {
            console.log(result)
            if(result != 'Cancel'){
              this.minuto = parseInt(result.replace(' min', '')) 
            }
            this.fechasData.time = `${this.hora}:${this.minuto}`
            this.$emit('change', this.fechasData)
          })
        },
        onDateChange(args:any ){
          this.date = moment(args.value).format('Y/M/D')
          this.fechasData.date = this.date
          this.$emit('change',this.fechasData )
        },
        onTimeChange(args: any){
          this.time = moment(args.value).format('HH:mm')
          this.fechasData.time = this.time 
          
          this.$emit('change', this.fechasData)
        }
      }
    });
  </script>
  
  <style>
    /* .info {
      font-size: 20;
    } */
  </style>
  