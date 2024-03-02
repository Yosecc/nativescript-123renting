import { Dialogs, HttpResponse, Http } from "@nativescript/core";
const urlBase = 'https://dev.api.123renting.es/api';
import cache from '@/plugins/cache';

interface ApiData {
    [key: string]: string | number | boolean; // Adjust the allowed types based on your data structure
}


const Api = {
    post: function(url: string, data?: object) {
        return new Promise((resolve, reject) => {
            Http.request({
                url: `${urlBase}${url}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                content: JSON.stringify(data),
            })
            .then(
                (response) => {
                    const content = response.content

                    if (response.statusCode == 200) {
                        if(content){
                            console.warn({ url: `${urlBase}${url}`, res: content.toJSON() });
                            resolve(content?.toJSON())
                        }
                    }else{
                        if(content){   
                            reject(content?.toJSON())
                        }
                    }
                },
                (e) => {
                    console.log('e',e)
                    // error
                }
            )
            .catch((err) => {
                console.log('err',err)
                // reject(err)
                
            })
        });
        // return new Promise((resolve, reject) => {
        //     console.log('JUJU')
        //     Http.request({
        //         method: "post",
        //         // url: `${urlBase}${url}`,
        //         url:'https://dev.api.123renting.es/api/calcular_costo',
        //         headers: {
        //             "Content-Type": "application/json",
        //             // 'x-api-key': cache.get('token') ? cache.get('token') : null
        //         },
        //         content: JSON.stringify(data)
        //     }).then(
        //         (response) => {

        //             console.log('response', response)
        //             if (response.statusCode == 200) {
        //                 const content = response.content
        //                 if(content){
        //                     console.warn({ url: `${urlBase}${url}`, res: content?.toJSON() })
        //                     resolve(content?.toJSON())
        //                 }
        //             } else {
        //                 reject(response.content?.toJSON())
        //             }
        //         },
        //         (e) => {
        //             // console.log('ul', e)
        //         }
        //     ).catch((e) => {
        //         // console.log('ij', e)
        //     })
        // });
    },
    get: async function(url: string, data?: ApiData) {
        try {
            if (data && Object.keys(data).length) {
                const qs = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
                url = `${url}?${qs}`;
            }

            const response = await Http.request({
                method: "get",
                url: `${urlBase}${url}`,
                headers: {
                    "Content-Type": "application/json",
                    // 'x-api-key': cache.get('token') || null
                },
            });

            const content = response?.content;
            if (content) {
                console.warn({ url: `${urlBase}${url}`, res: content.toJSON() });
                return content.toJSON();
            } else {
                throw new Error('Response content is undefined.');
            }
        } catch (error) {
            console.error(`Error in get request ${url}:`, error);
            throw error;
        }
    },
    defaults: {
        headers: {
            common: ['x-api-key']
        }
    }
};

export default Api;
