import { ObservableArray } from '@nativescript/core/data/observable-array';

export interface Oficina {
    id: number;
    text: string;
    status: boolean;
    fecha: string;
    email: string;
    phone: string;
    latitud: number;
    longitud: number;
    direccion: string;
}


export const oficinas = {
    data: [] as Oficina[]
};
