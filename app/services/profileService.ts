import { ObservableArray } from '@nativescript/core/data/observable-array';
import moment from 'moment'
import cache from '~/plugins/cache';

export const getInfoPersonal = (email: string) => {

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'success', // require_code | success | error,
            data: {
                email: email,
                info_personal: null
                
            }
          }); 
        }, 2000);
      });

}

export const saveInfoPersonal = (data: object) => {

  return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success', // require_code | success | error,
          data: {
              info_personal: data
          }
        }); 
      }, 2000);
    });

}


