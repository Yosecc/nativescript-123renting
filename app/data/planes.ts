import { ObservableArray } from '@nativescript/core/data/observable-array';

export const planes = {
    data: new ObservableArray ([
        {
            id: 1, 
            nombre: 'Basic',
            amount: '100€',
            backgroundColor: '#00B982',
            borderTopLeftRadius:"10",
            borderTopRightRadius:"10",
            borderBottomLeftRadius:"20",
        },
        {
            id: 2, 
            nombre: 'Medium',
            amount: '125€',
            backgroundColor: '#FF3300',
            borderTopLeftRadius:"10",
            borderTopRightRadius:"10",
        },
        {
            id: 3, 
            nombre: 'Premium',
            amount: '135€',
            backgroundColor: '#FF9900',
            borderTopLeftRadius:"10",
            borderTopRightRadius:"10",
            borderBottomRightRadius:"20",
        },
    ])
}