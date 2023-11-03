import moment from 'moment'

export const reserva = {
    recogida:{
        oficina_id: 0,
        fecha: {
            date: moment().format('Y/M/D'),
            time: '01:00' 
        },
        
    },
    devolucion:{
        oficina_id: 0,
        fecha: {
            date: moment().format('Y/M/D'),
            time: '01:00' 
        }, 
    },
    coche: {
        plan_id: 0,
        coche_id: 0
    }
    
}