  <template>
    <StackLayout padding="10">
        <DatePickerField :date="fechasData.date" :minDate="minDate" @dateChange="onDateChange"  hint="Seleccionar fecha" class="input"></DatePickerField>
        <TimePickerField :time="fechasData.time" :minTime="minTime" @timeChange="onTimeChange" hint="Seleccionar hora" class="input"></TimePickerField>
    </StackLayout>
  </template>
  
  <script lang="ts">
    import Vue from "nativescript-vue";
    import { Application, Color, Utils } from '@nativescript/core'
    import { reserva } from '~/data/reserva'
    import moment from 'moment'

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
          fechasData: this.fechas
        }
      },
      computed: {

      },
      methods: {
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
  