import moment from 'moment';
import { planes } from './planes';
import cache from '~/plugins/cache';
import { oficinas, Oficina } from "~/data/oficinas";
import type { Coche } from '~/data/coches'


const tax = 7

interface Fecha {
    date: string;
    time: string;
}

interface Mejora {
    name: string,
    id: string,
    amount: number,
}

interface ItenListInvoice {
    text: string,
    amount: number
}

interface Invoice {
    total: number,
    subtotal: number,
    plan:{
        id: number,
        name: string,
        dias: number,
        amount: number
    },
    mejoras: Mejora[],
    list: ItenListInvoice[]
    payment_type: paymentType
}

interface Fechas {
    recogida: moment.Moment,
    devolucion: moment.Moment,
}

interface Oficinas {
    recogida: Oficina,
    devolucion: Oficina,
}

interface diffFechas{
    dias: number,
}

type EstadosReserva = 'active' | 'end' | 'cancel' | 'init' | 'pending';
export type paymentType = 'card' | 'oficina' | '';

export interface cocheInfo{
    plan_id: number;
    coche_id: number;
}

export interface Reserva {
    id: number
    status: EstadosReserva,
    recogida: {
        oficina_id: number;
        fecha: Fecha;
    };
    devolucion: {
        oficina_id: number;
        fecha: Fecha;
    };
    coche: cocheInfo;
    cocheSeleccionado: Coche | undefined;
    mejoras: Mejora[];
    invoice: Invoice;
    // updateInvoice: () => ItenListInvoice[];
    getFechas: () => Fechas,
    getOficinas: () => Oficinas,
    getDifFechas: () => diffFechas,
    procesarReserva: (reserva: Reserva) => void,
    // createInvoice: (data: Object) => ItenListInvoice[],
}

export const reserva: Reserva = {
    id: 0,
    status: 'init',
    recogida: {
        oficina_id: 0,
        fecha: {
            date:  moment().hour() >= 20 ? moment().add(1, 'day').format('YYYY-M-D') : moment().format('YYYY-M-D'),
            time: '09:00',
        },
    },
    devolucion: {
        oficina_id: 0,
        fecha: {
            date: moment().add(7, 'day').format('Y-M-D'),
            time: '09:00',
        },
    },
    coche: {
        plan_id: 0,
        coche_id: 0,
    },
    cocheSeleccionado: undefined,
    mejoras: [],
    invoice: {
        total: 0,
        subtotal: 0,
        plan:{
            id: 0,
            name: '',
            dias: 0,
            amount: 0
        },
        mejoras: [],
        list: [],
        payment_type: ''
    },
    getOficinas(){
        return {
            recogida: oficinas.data.find((e)=> e.id == this.recogida.oficina_id),
            devolucion: oficinas.data.find((e)=> e.id == this.devolucion.oficina_id),
        }
    },
    getFechas: function(){
        return {
            recogida: moment(`${this.recogida.fecha.date} ${this.recogida.fecha.time}`,'YYYY-MM-DD HH:mm'),
            devolucion: moment(`${this.devolucion.fecha.date} ${this.devolucion.fecha.time}`,'YYYY-MM-DD HH:mm'),
        }
    },
    getDifFechas: function(){
        const fechas = this.getFechas()
        return {
            dias: fechas.devolucion.diff(fechas.recogida, 'days')
        }
    },
    // updateInvoice: function(){
    //     this.invoice.list = []

    //     const plan = this.cocheSeleccionado.planes.find((e)=>e.id == this.coche.plan_id)

    //     if(plan){
    //          this.invoice.plan.name = plan.nombre
    //          this.invoice.plan.amount = plan.amount
    //     }

        

    //     this.invoice.list.push({
    //         text: `Precio tarifa Plan ${this.invoice.plan.name}`,
    //         amount: this.invoice.plan.amount,
    //     }) 

    //     let sumaMejoras = 0

    //     this.mejoras.forEach((e)=>{
    //         sumaMejoras += e.amount
    //         this.invoice.list.push({
    //             text: e.name,
    //             amount: e.amount,
    //         })            
    //     })
        
    //     this.invoice.total = ( (this.invoice.plan.amount * this.invoice.plan.dias) + sumaMejoras ) 

    //     // this.invoice.list.push({
    //     //     text: `Subtotal`,
    //     //     amount: this.invoice.subtotal,
    //     // })

    //     // this.invoice.total = ( this.invoice.subtotal  + ( ( this.invoice.subtotal * tax ) / 100 ) )

    //     this.invoice.list.push({
    //         text: `Total a pagar x ${this.invoice.plan.dias} día${this.invoice.plan.dias>1?'s':''}`,
    //         amount: Math.round(this.invoice.total),
    //     })

    //     return this.invoice.list
    // },
    procesarReserva: function(reserva: Reserva){
        this.id = reserva.id
        this.status = reserva.status
        this.recogida = reserva.recogida
        this.devolucion = reserva.devolucion
        this.coche = reserva.coche
        this.mejoras = reserva.mejoras
        this.invoice = reserva.invoice

        // this.updateInvoice()
    },
    // createInvoice(data, { cocheSeleccionado = {} }  ){
    //     this.cocheSeleccionado = cocheSeleccionado
    //     console.log('data',data)
    //     this.invoice.subtotal = data.subtotal
    //     this.invoice.plan.id = this.coche.plan_id
       
    //     // this.invoice.plan.dias = data.dias

    //     const plan = this.cocheSeleccionado.planes.find((e)=>e.id == this.coche.plan_id)

    //     if(plan){
    //          this.invoice.plan.name = plan.nombre
    //          this.invoice.plan.amount = plan.amount
    //     }

    //     const fechas = this.getFechas()
    //     this.invoice.plan.dias = fechas.devolucion.diff(fechas.recogida, 'days');

    //     this.invoice.mejoras = data.beneficios

    //     this.invoice.total = this.invoice.subtotal

    //     console.log('data',data)

    //     this.mejoras.forEach(element => {
    //         this.invoice.total += element.precio
    //     })

    //     this.invoice.list = []

    //     this.invoice.list.push({
    //         text: `Precio tarifa Plan ${this.invoice.plan.name}`,
    //         amount: this.invoice.plan.amount,
    //     })

    //     let sumaMejoras = 0

    //     this.mejoras.forEach((e)=>{
    //         sumaMejoras += e.amount
    //         this.invoice.list.push({
    //             text: e.name,
    //             amount: e.amount,
    //         })            
    //     })

    //     // this.invoice.subtotal = ( this.invoice.subtotal + sumaMejoras ) 

    //     // this.invoice.list.push({
    //     //     text: `Subtotal`,
    //     //     amount: this.invoice.subtotal,
    //     // })
        
    //     this.invoice.total = ( this.invoice.subtotal + sumaMejoras ) 

    //     this.invoice.list.push({
    //         text: `Total a pagar x ${this.invoice.plan.dias} día${this.invoice.plan.dias>1?'s':''}`,
    //         amount: Math.round(this.invoice.total),
    //     })

       
    //     return this.invoice.list
    // },
};

interface Reservas {
    data: Reserva[];
    addReserva: (data: Reserva) => void;
    getReservaActive: () => Reserva | undefined;
}

const ajustaReservasCache = (reservas: string) => {
    let reservasData = JSON.parse(reservas)
    reservasData = reservasData.map( (reser: Reserva) => {
        reser.getFechas = reserva.getFechas
        reser.getOficinas = reserva.getOficinas
        return reser
    })

    return reservasData
}

export const Reservas: Reservas = {
    data: cache.get('reservas') != undefined ? ajustaReservasCache(cache.get('reservas')):[],
    addReserva: function (data: Reserva) {
        this.data.push(data);
        cache.set('reservas', JSON.stringify(this.data))
    },
    getReservaActive: function(){
        return this.data.find((e)=> e.status == 'active')
    }
};

export function restaurarReserva() {
    // reserva.recogida.oficina_id = 0;
    // reserva.recogida.fecha.date = moment().format('Y-M-D');
    // reserva.recogida.fecha.time = '09:00';

    // reserva.devolucion.oficina_id = 0;
    // reserva.devolucion.fecha.date = moment().format('Y-M-D');
    // reserva.devolucion.fecha.time = '09:00';

    reserva.coche.plan_id = 0;
    reserva.coche.coche_id = 0;

    reserva.mejoras = []
    reserva.invoice = {
        total: 0,
        subtotal: 0,
        plan:{
            id: 0,
            name: '',
            dias: 0,
            amount: 0
        },
        mejoras: [],
        list: [],
        payment_type: ''
    }
}


interface Beneficio {
    beneficio: string;
    monto: number;
  }
  
  export interface ReservaData {
    subtotal: number;
    total: number;
    dias: string;
    start: string;
    end: string;
    idoficina: string;
    iddevolucion: string;
    beneficios_seleccionados: Beneficio[];
  }
  
  export interface ReservaResponse {
    status: string;
    data: ReservaData;
  }