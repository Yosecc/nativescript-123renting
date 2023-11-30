import { ObservableArray } from '@nativescript/core/data/observable-array';
import moment from 'moment';
import { getInfoPersonal, saveInfoPersonal } from '~/services/profileService';
import { login } from './auth';
import cache from '~/plugins/cache';

interface InfoPersonal {
    name: string;
    last_name: string;
    email: string;
    dni: number;
    phone: number;
    date_birth: string;
    tc: boolean;
}

interface Input {
    type: string;
    name: string;
    keyboard: string;
    placeholder: string;
    model: string | number | boolean;
    required: boolean;
    error: boolean;
}

interface Error {
    name: string;
}

interface InfoPersonalManager {
    inputs: ObservableArray<Input>;
    errors: Error[];
    isConfirm: boolean;
    data: InfoPersonal;
    setInputs: (object: InfoPersonal) => void;
    validate: () => boolean;
    confirmInfo: () => void;
    getData: () => InfoPersonal;
    onGetInfoPersonal: () => any;
    onSaveInfoPersonal: () => any;
}

export const infoPersonal: InfoPersonalManager = {
    inputs: new ObservableArray<Input>([
        {
            type: 'text',
            name: 'name',
            keyboard: '',
            placeholder: 'Nombre *',
            model: '',
            required: true,
            error: false,
        },
        {
            type: 'text',
            name: 'last_name',
            keyboard: '',
            placeholder: 'Apellido *',
            model: '',
            required: true,
            error: false,
        },
        {
            type: 'text',
            name: 'email',
            keyboard: 'email',
            placeholder: 'Email *',
            model: '',
            required: true,
            error: false,
        },
        {
            type: 'text',
            name: 'dni',
            keyboard: 'number',
            placeholder: 'Documento de identidad *',
            model: '',
            required: true,
            error: false,
        },
        {
            type: 'text',
            name: 'phone',
            keyboard: 'phone',
            placeholder: 'Móvil *',
            model: '',
            required: true,
            error: false,
        },
        {
            name: 'date_birth',
            type: 'date',
            keyboard: '',
            placeholder: 'Fecha de nacimiento *',
            model: '',
            required: true,
            error: false,
        },
        {
            name: 'tc',
            type: 'checkbox',
            keyboard: '',
            placeholder: 'He leído y acepto los términos y condiciones *',
            model: false,
            required: true,
            error: false,
        },
        
    ]),
    errors: [],
    isConfirm: false,
    data: {
        name: '',
        last_name: '',
        email: '',
        dni: 0,
        phone: 0,
        date_birth: '',
        tc: false,
    },
    setInputs(object: InfoPersonal) {
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const inputName = key as keyof InfoPersonal;
                const value = object[inputName];
                const input = this.inputs.find((e) => e.name === inputName);
                if (input) {
                    // Asegurémonos de que el tipo de 'model' coincida con el tipo en 'InfoPersonal'
                    input.model = value;
                }
            }
        }

        if (cache.get('email') !== undefined) {
            this.inputs.find((e) => e.name == 'email').model = cache.get('email');
            return;
        }

        if (object == null || object == undefined) {
            this.inputs.find((e) => e.name == 'email').model = login.getEmail();
            return;
        }
    },
    validate() {
        this.errors = [];
        this.inputs.forEach((element: Input) => {
            element.error = false;
            if (element.required) {
                if (element.model === '') {
                    let error: Error = {
                        name: element.name,
                    };
                    this.errors.push(error);
                    element.error = true;
                }
            }
        });
        return this.errors.length > 0 ? false : true;
    },
    confirmInfo() {
        this.isConfirm = true;
    },
    getData() {
        let obj: { [key: string]: any } = {};
        this.inputs.forEach((element) => {
            obj[element.name] = element.model;
        });
        return obj as InfoPersonal;
    },
    onGetInfoPersonal: async function () {
        const result = getInfoPersonal(login.getEmail());
        return result;
    },
    onSaveInfoPersonal: async function () {
        const result = saveInfoPersonal(this.getData());
        return result;
    },
}