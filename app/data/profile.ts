import { ObservableArray } from '@nativescript/core/data/observable-array';
import moment from 'moment'
import { getInfoPersonal, saveInfoPersonal } from '~/services/profileService';
import { login } from './auth';
import cache from '~/plugins/cache';

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
        
    ]),
    errors: [],
    isConfirm: false,
    setInputs(object: object){

        // {
        //     name: 'Anthoni',
        //     last_name: 'Rodriguez',
        //     email: 'yosec.cervino@gmail.com',
        //     dni: '96085695',
        //     phone: '2473468852',
        //     date_birth: '19/11/1991',
        //     tc: true,
        // }

        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                this.inputs.find((e)=> e.name == key).model = object[key]
            }
        }

        if(cache.get('email')!=undefined){
            this.inputs.find((e)=> e.name == 'email').model = cache.get('email')
            return
        }

        if(object == null || object == undefined){
            this.inputs.find((e)=> e.name == 'email').model = login.getEmail()
            return
        }
    },
    validate: function(){
        this.errors = []
        this.inputs.forEach(element=>{
            element.error = false
            if(element.required){
                if(element.model === ''){
                    this.errors.push(element)
                    element.error = true
                }
            }
        })
        return this.errors.length ? false : true
    },
    confirmInfo: function(){
        this.isConfirm = true
    },
    getData: function(){
        let obj = {}
        this.inputs.forEach(element=>{
            obj[element.name] = element.model
        })
        return obj
    },
    onGetInfoPersonal: async function(){
        const result = getInfoPersonal(login.getEmail())
        return result
    },
    onSaveInfoPersonal: async function (){
        const result = saveInfoPersonal(this.getData())
        return result
    }
}