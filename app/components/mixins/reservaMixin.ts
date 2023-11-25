import { coches } from "~/data/coches";
import { planes } from '~/data/planes'

export default {
    filters: {

    },
    computed: {
        paymentType(){
            let name = ''
            switch (this.reserva.invoice.payment_type) {
                case 'card':
                    name = 'Debito automatico'
                    break;
                case 'oficina':
                    name = 'Pago en oficina'
                    break;
            
                default:
                    break;
            }
            return name
        },
        coche(){
            return coches.data.find((e)=> e.id == this.reserva.coche.coche_id)
        },
        plan(){
            return planes.data.find((e)=> e.id == this.reserva.coche.plan_id)
        },
        fechas(){
            return this.reserva.getFechas()
        },
        oficinas(){
            return this.reserva.getOficinas()
        },
        status(){
            let text = ''
            let color = ''
            switch (this.reserva.status) {
                case 'active':
                    text = 'Activo'
                    color = 'green'
                    break;
                
                case 'init':
                    text = 'Iniciado'
                    color = '#E65100'
                    break;
            
                default:
                    text = this.reserva.status
                    break;
            }
            return { text, color }
        }
    },
    methods: {
       
    }
};