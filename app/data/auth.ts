import { ObservableArray } from '@nativescript/core/data/observable-array';
import moment from 'moment';
import cache from '~/plugins/cache';
import { infoPersonal } from './profile';
import { validateEmail, validateCode, resendCode } from '~/services/authService';

interface Input {
    name: string;
    type: string;
    secure?: boolean;
    placeholder: string;
    model: string;
    required: boolean;
    error?: boolean;
    keyboard?: string;
    isPlaceholder?: boolean;
    xClass?: string;
    isError?: boolean;
    maxLength?: number;
}

interface Validation {
    inputs: ObservableArray<Input>;
    errors: Input[];
    validateIgualdad(): boolean;
    validate(): boolean;
}

export const createPassword: Validation = {
    inputs: new ObservableArray<Input>([
        {
            name: 'password',
            type: 'text',
            secure: true,
            placeholder: 'Contrasena *',
            model: '',
            required: true,
        },
        {
            name: 'confirm_password',
            type: 'text',
            secure: true,
            placeholder: 'Confirme Contrasena *',
            model: '',
            required: true,
        },
    ]),
    errors: [],
    validateIgualdad() {
        return this.inputs.find((e) => e.name == 'password').model === this.inputs.find((e) => e.name == 'confirm_password').model;
    },
    validate() {
        this.errors = [];
        this.inputs.forEach((e) => {
            e.error = false;
            if (e.required) {
                if (e.model == '') {
                    e.error = true;
                    this.errors.push(e);
                }
            }
        });

        return this.errors.length ? false : true;
    },
};

interface CodeValidation {
    inputs: ObservableArray<Input>;
    getCode(): string;
    isValidate: boolean;
    onValidateCode(): Promise<{ status: string; message: string }>;
    onResendCode(): Promise<any>;
}

export const codeValidation: CodeValidation = {
    inputs: new ObservableArray<Input>([
        {
            name: 'code',
            type: 'text',
            keyboard: 'number',
            placeholder: '0000',
            isPlaceholder: false,
            xClass: 'code',
            model: '',
            required: true,
            isError: false,
            maxLength: 4,
        },
    ]),
    getCode() {
        return this.inputs.find((e) => e.name == 'code').model;
    },
    isValidate: false,
    async onValidateCode() {
        this.inputs.find((e) => e.name == 'code').isError = false;
        if (this.getCode() == '') {
            this.inputs.find((e) => e.name == 'code').isError = true;
            return {
                status: 'error',
                message: 'El codigo es requerido.',
            };
        }
        const result = await validateCode(this.getCode);
        return result as { status: string; message: string };
    },
    async onResendCode() {
        const result = await resendCode();
        return result;
    },
};

interface Login {
    inputs: ObservableArray<Input>;
    getEmail(): string;
    onValidaEmail(): Promise<{ status: string; message: string }>;
    validarPatronEmail(valor: string): boolean;
}

export const login: Login = {
    inputs: new ObservableArray<Input>([
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
    getEmail() {
        return this.inputs.find((e) => e.name == 'email').model;
    },
    async onValidaEmail() {
        this.inputs.find((e) => e.name == 'email').isError = false;
        if (this.getEmail() == '') {
            this.inputs.find((e) => e.name == 'email').isError = true;
            return {
                status: 'error',
                message: 'El email es requerido.',
            };
        }

        if (!this.validarPatronEmail(this.getEmail())) {
            return {
                status: 'error',
                message: 'El email es incorrecto.',
            };
        }
        const result = await validateEmail(this.getEmail());
        // return result;
        return result as { status: string; message: string };
    },
    validarPatronEmail(valor: string) {
        if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor)) {
            return true;
        } else {
            return false;
        }
    },
};

export const Authenticated = () => {
    if (!infoPersonal.validate()) {
        return { message: 'Hay datos de su informacion personal que son requeridos' };
    }

    const data = infoPersonal.getData();

    cache.set('token', 'kikijuhyfsdgfsdgtfrd');
    cache.set('email', data.email);

    if (cache.get('token')) {
        alert('logueado');
    }
};

export const isAuthenticated = () => {
    console.log('isAuthenticated', cache.get('email'), cache.get('token'));
    if ((cache.get('email') != undefined && cache.get('email') != '') && (cache.get('token') != undefined && cache.get('token') != '')) {
        return true;
    }
    return false;
};
