import { ObservableArray } from '@nativescript/core/data/observable-array';

import type { Plan } from '~/data/planes'

interface Config{
    pasajeros: string;
    puertas: string;
    basic: number,
    medio: number,
    premium: number
}

export interface Coche {
    id: number;
    marca: string;
    modelo: string;
    detalle: string;
    imagen: string;
    config: Config;
    status: number;
    disponible:number;
    planes?: Plan[]
}


export const coches = {
    data: new ObservableArray<Coche[]>([])
}

interface Flota {
    flota: Coche[]
  }
  export interface flotaResponse {
    status: string;
    data: Flota
  }