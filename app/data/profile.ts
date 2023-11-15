import { ObservableArray } from '@nativescript/core/data/observable-array';

export const infoPersonal = {
    inputs: new ObservableArray([
        {
            type: 'text',
            name: 'name',
            keyboard: '',
            placeholder: 'Nombre *',
            model: '',
            required: true
        },
        {
            type: 'text',
            name: 'last_name',
            keyboard: '',
            placeholder: 'Apellido *',
            model: '',
            required: true
        },
        {
            type: 'text',
            name: 'email',
            keyboard: 'email',
            placeholder: 'Email *',
            model: '',
            required: true
        },
        {
            type: 'text',
            name: 'dni',
            keyboard: 'number',
            placeholder: 'Documento de identidad *',
            model: '',
            required: true
        },
        {
            type: 'text',
            name: 'phone',
            keyboard: 'phone',
            placeholder: 'Móvil *',
            model: '',
            required: true
        },
        {
            name: 'date_birth',
            type: 'date',
            placeholder: 'Fecha de nacimiento *',
            model: '',
            required: true
        },
        {
            name: 'tc',
            type: 'checkbox',
            placeholder: 'He leído y acepto los términos y condiciones *',
            model: false,
            required: true
        },
        
    ])
}