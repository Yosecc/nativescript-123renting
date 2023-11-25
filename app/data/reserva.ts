import moment from 'moment';
import { planes } from './planes';
import cache from '~/plugins/cache';
import { oficinas, Oficina } from "~/data/oficinas";

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
type paymentType = 'card' | 'oficina' | '';

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
    coche: {
        plan_id: number;
        coche_id: number;
    };
    mejoras: Mejora[];
    invoice: Invoice;
    updateInvoice: () => ItenListInvoice[];
    getFechas: () => Fechas,
    getOficinas: () => Oficinas,
    getDifFechas: () => diffFechas,
    procesarReserva: (reserva: Reserva) => void
}

export const reserva: Reserva = {
    id: 0,
    status: 'init',
    recogida: {
        oficina_id: 0,
        fecha: {
            date: moment().format('Y-M-D'),
            time: '01:00',
        },
    },
    devolucion: {
        oficina_id: 0,
        fecha: {
            date: moment().format('Y-M-D'),
            time: '01:00',
        },
    },
    coche: {
        plan_id: 0,
        coche_id: 0,
    },
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
    updateInvoice: function(){
        this.invoice.list = []
        this.invoice.plan.id = this.coche.plan_id
        const plan = planes.data.find((e)=> e.id == this.invoice.plan.id )

        this.invoice.plan.name = plan.nombre
        this.invoice.plan.amount = plan.amount

        console.log('this.invoice.plan.amount',this.invoice.plan.amount)
        
        const fechas = this.getFechas()
        this.invoice.plan.dias = fechas.devolucion.diff(fechas.recogida, 'days');

        const PlanAmount = (this.invoice.plan.amount * this.invoice.plan.dias)
        
        this.invoice.list.push({
            text: `Precio tarifa Plan ${this.invoice.plan.name} por ${this.invoice.plan.dias} días`,
            amount: PlanAmount,
        })

        let sumaMejoras = 0

        this.mejoras.forEach((e)=>{
            sumaMejoras += e.amount
            this.invoice.list.push({
                text: e.name,
                amount: e.amount,
            })            
        })

        this.invoice.subtotal = ( PlanAmount + sumaMejoras ) 

        this.invoice.list.push({
            text: `Subtotal`,
            amount: this.invoice.subtotal,
        })

        this.invoice.total = ( this.invoice.subtotal  + ( ( this.invoice.subtotal * tax ) / 100 ) )

        this.invoice.list.push({
            text: `Total a pagar x ${this.invoice.plan.dias} días`,
            amount: Math.round(this.invoice.total),
        })

        return this.invoice.list
    },
    procesarReserva: function(reserva: Reserva){
        this.id = reserva.id
        this.status = reserva.status
        this.recogida = reserva.recogida
        this.devolucion = reserva.devolucion
        this.coche = reserva.coche
        this.mejoras = reserva.mejoras
        this.invoice = reserva.invoice

        this.updateInvoice()
    }
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
    reserva.recogida.oficina_id = 0;
    reserva.recogida.fecha.date = moment().format('Y-M-D');
    reserva.recogida.fecha.time = '01:00';

    reserva.devolucion.oficina_id = 0;
    reserva.devolucion.fecha.date = moment().format('Y-M-D');
    reserva.devolucion.fecha.time = '01:00';

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
