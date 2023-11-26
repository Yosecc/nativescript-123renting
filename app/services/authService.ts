import { ObservableArray } from '@nativescript/core/data/observable-array';
import moment from 'moment'
import cache from '~/plugins/cache';

export const validateEmail = (email: string) => {

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'require_code', // require_code | success | error,
            data: {
                email: email,
                info_personal: null
            }
          }); 
        }, 2000);
      });

}

export const validateCode = (obj: object) => {

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'success', // success | error,
            data: obj
          }); 
        }, 2000);
      });

}

export const resendCode = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'success', // success | error,
          }); 
        }, 2000);
      });

}
