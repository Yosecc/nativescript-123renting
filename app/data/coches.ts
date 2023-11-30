import { ObservableArray } from '@nativescript/core/data/observable-array';

interface Coche {
    id: number;
    marca: string;
    detalle: string;
    imagen: string;
    config: {
        pasajeros: string;
        puertas: string;
        basico: number,
        medium: number,
        premium: number
    };
    status: boolean;
}

export const coches = {
    data: new ObservableArray([
        {
            id: 1,
            marca: 'Mercedes Benz Citan',
            detalle: '111 Tourer',
            imagen: '~/assets/coche.png',
            config: {
                amount: '100/D',
                pasajeros: '5 Pasajeros', 
                puertas: '5 Puertas'
            },
            status: true,
        },
        {
            id: 2,
            marca: 'Mercedes Benz Citan',
            detalle: '111 Tourer',
            imagen: '~/assets/coche.png',
            config: {
                amount: '100/D',
                pasajeros: '5 Pasajeros', 
                puertas: '5 Puertas'
            },
            status: false,
        },
        {
            id: 3,
            marca: 'Mercedes Benz Citan',
            detalle: '111 Tourer',
            imagen: '~/assets/coche.png',
            config: {
                amount: '100/D',
                pasajeros: '5 Pasajeros', 
                puertas: '5 Puertas'
            },
            status: true,
        },
    ])
}