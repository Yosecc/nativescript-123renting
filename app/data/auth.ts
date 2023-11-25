import { ObservableArray } from '@nativescript/core/data/observable-array';
import moment from 'moment'
import cache from '~/plugins/cache';
import { infoPersonal } from './profile';
import { validateEmail, validateCode, resendCode } from '~/services/authService'


export const Authenticated = () => {
    
    if(!infoPersonal.validate()){
        return { message: 'Hay datos de su informacion personal que son requeridos' }
    }

    const data = infoPersonal.getData()
    
    cache.set('token','kikijuhyfsdgfsdgtfrd')
    cache.set('email', data.email)

    if(cache.get('token')){
        alert('logueado')
    }
}

export const isAuthenticated = () => {
    console.log('isAuthenticated', cache.get('email'), cache.get('token'))
    if((cache.get('email')!=undefined && cache.get('email') != '') && (cache.get('token')!=undefined && cache.get('token') != '') ){
        return true
    }
    return false
}

export const createPassword = {
    inputs: new ObservableArray([
        {
            name: 'password',
            type: 'text',
            secure: true,
            placeholder: 'Contrasena *',
            model: '',
            required: true
        },
        {
            name: 'confirm_password',
            type: 'text',
            secure: true,
            placeholder: 'Confirme Contrasena *',
            model: '',
            required: true
        },
    ]),
    errors: [],
    validateIgualdad(){
        return this.inputs.find((e)=> e.name == 'password').model === this.inputs.find((e)=> e.name == 'confirm_password').model
    },
    validate: function(){
        this.errors = []
        this.inputs.forEach((e)=>{
            e.error = false
            if(e.required){
                if(e.model == ''){
                    e.error = true
                    this.errors.push(e)
                }
            }
        })

        

       return this.errors.length ? false : true 
    }
}

export const codeValidation = {
    inputs: new ObservableArray([
        {
            name: 'code',
            type: 'text',
            keyboard: 'number',
            placeholder: '0000',
            isPlaceholder: false,
            xClass:'code',
            model: '',
            required: true,
            isError: false,
            maxLength: 4
        },
    ]),
    getCode: function(){
        return this.inputs.find( e => e.name == 'code' ).model
    },
    isValidate: false,
    onValidateCode: async function(){
        this.inputs.find( e => e.name == 'code' ).isError = false
        if(this.getCode()==''){
            this.inputs.find( e => e.name == 'code' ).isError = true
            return {
                status: 'error',
                message: 'El codigo es requerido.'
            }
        }
        const result = await validateCode(this.getCode)
        return result
    },
    onResendCode: async function(){
        const result = await resendCode()
        return result
    }
}

export const login = {
    inputs: new ObservableArray([
        {
            name: 'email',
            type: 'text',
            keyboard: 'email',
            placeholder: 'Email',
            isPlaceholder: false,
            model: '',
            required: true,
            isError: false,
        },
    ]),
    getEmail: function() : string{
        return this.inputs.find( e => e.name == 'email' ).model
    },    
    onValidaEmail: async function()
    {
        this.inputs.find( e => e.name == 'email' ).isError = false
        if(this.getEmail()==''){
            this.inputs.find( e => e.name == 'email' ).isError = true
            return {
                status: 'error',
                message: 'El email es requerido.'
            }
        }

        if(!this.validarPatronEmail(this.getEmail())){
            return {
                status: 'error',
                message: 'El email es incorrecto.'
            }
        }
        const result = await validateEmail(this.getEmail())
        return result
    },
    validarPatronEmail: function (valor: string) {
        if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor)){
        //  alert("La dirección de email " + valor + " es correcta.");
         return true
        } else {
        //  alert("La dirección de email es incorrecta.");
         return false
        }
    }
}