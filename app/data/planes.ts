import { ObservableArray } from '@nativescript/core/data/observable-array';

export interface Plan {
  id: number;
  nombre: string;
  amount: number;
  backgroundColor: string;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
}

interface Planes {
  data: Plan[];
}

export const planes: Planes = {
  data: [
    {
      id: 1,
      nombre: 'Basic',
      amount: 0,
      backgroundColor: '#00B982',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: undefined,
    },
    {
      id: 2,
      nombre: 'Medium',
      amount: 0,
      backgroundColor: '#FF3300',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: undefined,
      borderBottomRightRadius: undefined,
    },
    {
      id: 3,
      nombre: 'Premium',
      amount: 0,
      backgroundColor: '#FF9900',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: undefined,
      borderBottomRightRadius: 20,
    },
  ],
};
