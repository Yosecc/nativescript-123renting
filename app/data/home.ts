//es 1
//ca 2
//en 3
//de 4

type Idioma = 'es' | 'en' | 'ca' | 'de';
import type { Beneficio } from '~/data/mejoras'

interface TitleConfig {
    text: string;
    textTransform: string;
    fontSize: number;
    fontWeight: string;
    color: string;
  }
  
  interface SubTitleConfig {
    text: string;
    fontSize: number;
    fontWeight: string;
    color: string;
    textAlignment: string;
  }
  
  interface RedirectConfig {
    route: string;
    meta?: {
      auth: boolean;
      button: string;
      onActionRoute: string;
      inputsCustom: {
        tc: boolean;
      };
    };
  }
  
  interface ButtonConfig {
    text: string;
    textAlignment: string;
    color: string;
    fontWeight: string;
    fontSize: string;
    background: string;
    redirect: RedirectConfig;
  }
  
  interface GridButtonConfig {
    textAlignment: string;
    text: string;
    fontSize: string;
    fontWeight: string;
    src: string;
    height: string;
    width: string;
    box: {
      width: string;
      height: string;
    };
    redirect: RedirectConfig;
  }
  
  interface BannerConfig {
    src: string;
  }
  
  interface GridButtonBottomConfig {
    textAlignment: string;
    text: string;
    fontSize: string;
    fontWeight: string;
    src: string;
    height: string;
    width: string;
    box: {
      width: string;
      height: string;
    };
    redirect: RedirectConfig;
  }
  
  interface BodyConfig {
    button: ButtonConfig;
    gridButtons: GridButtonConfig[];
    banner: BannerConfig;
    gridButtonsBottom: GridButtonBottomConfig[];
  }
  
  interface HeaderConfig {
    title: TitleConfig[];
    sub: SubTitleConfig;
  }
  
  export interface Parametros {
    politica_privacidad: string;
    email: string;
    direccion: string;
    ubicacion: string;
    facebook: string;
    twitter: string;
    instagram: string;
    descripcion: string;
    meta_description: string;
    meta_name: string;
    video: string;
    youtube: string;
    termino_mail: string;
    google: string;
    meta_keywords: string;
    newsletter: string;
  }
  
  export interface homeDisplay {
    idioma: Idioma;
    header: HeaderConfig;
    body: BodyConfig;
    parametros: Parametros | undefined;
  }

export const home : homeDisplay = {
    idioma: 'es',
    header: {
        title: [
            {
                text: 'home.title',
                textTransform: 'uppercase',
                fontSize: 60, 
                fontWeight:"800",
                color: '',
            },
            {
                text: 'home.title1',
                textTransform: 'uppercase',
                fontSize: 36,
                fontWeight:"700",
                color: '#E74117'   
            },
            {
                text: 'home.title2',
                textTransform: 'uppercase',
                fontSize: 60, 
                fontWeight:"800",
                color: ''

            },
        ],
        sub: {
            text: 'home.subtitle',
            fontSize: 14, 
            fontWeight:"400",
            color: '',
            textAlignment:"center"
        }
    },
    body:{
        button:{
            text:"home.button",
            textAlignment:"center" , 
            color:"white" , 
            fontWeight:"900", 
            fontSize:"20",
            background: '#E74117',
            redirect: {
                route: '/reserva/oficina_recogida'
            }
        },
        gridButtons: [
            {
                textAlignment:"center",
                text:"flota" ,
                fontSize:"15%" ,
                fontWeight:"800" ,
                src:"res://car",
                height:"40%" ,
                width:"40%",
                box:{
                    width: '50%',
                    height: '50%'
                },
                redirect: {
                    route: '/flota'
                }
            },
            {
                textAlignment:"center",
                text:"oficinas" ,
                fontSize:"15%" ,
                fontWeight:"800" ,
                src:"res://edificio",
                height:"40%" ,
                width:"40%",
                box:{
                    width: '50%',
                    height: '50%'
                },
                redirect: {
                    route: '/oficina'
                }
                
            },
            {
                textAlignment:"center",
                text:"mis_reservas" ,
                fontSize:"15%" ,
                fontWeight:"800" ,
                src:"res://reserve",
                height:"40%" ,
                width:"40%",
                box:{
                    width: '50%',
                    height: '50%'
                },
                redirect: {
                    route: '/profile/reservaciones'
                }
            },
            {
                textAlignment:"center",
                text:"perfil" ,
                fontSize:"15%" ,
                fontWeight:"800" ,
                src:"res://person",
                height:"40%" ,
                width:"40%",
                box:{
                    width: '50%',
                    height: '50%'
                },
                redirect: {
                    route: '/profile/info_personal',
                    meta: { auth: true , button: 'Guardar', onActionRoute: 'save_data_info_personal', inputsCustom: { tc: false }},
                    
                }
            },
        ],
        banner: {
            src: "~/assets/furgo.png"
        },
        gridButtonsBottom:[
            {
                textAlignment:"center",
                text:"contacto" ,
                fontSize:"12" ,
                fontWeight:"200" ,
                src:"res://phone",
                height:"25" ,
                width:"25",
                box:{
                    width: '33.33%',
                    height: 'auto'
                },
                redirect: {
                    route: '/contacto'
                }
            },
            {
                textAlignment:"center",
                text:"metodo_de_pago" ,
                fontSize:"12" ,
                fontWeight:"200" ,
                src:"res://card",
                height:"25" ,
                width:"25",
                box:{
                    width: '33.33%',
                    height: 'auto'
                },
                redirect: {
                    route: '/metodo_payment'
                }
            },
            {
                textAlignment:"center",
                text:"preguntas_frecuentes" ,
                fontSize:"12" ,
                fontWeight:"200" ,
                src:"res://interrogative",
                height:"25" ,
                width:"25",
                box:{
                    width: '33.33%',
                    height: 'auto'
                },
                redirect: {
                    route: '/preguntas_frecuentes'
                }
            },
            
        ]
    },
    parametros: undefined
}

export interface Traduccion {
    nombre: string;
    titulo: string;
    texto: string | null;
  }
  

  

  
  interface Oficina {
    id: number;
    text: string;
    email: string;
    status: number;
    phone: string;
    latitud: number | null;
    longitud: number | null;
  }
  
  interface Comentario {
    id: number;
    nombre: string;
    procedencia: string;
    contenido: string;
    url_imagen: string;
    id_pagina: number;
    idioma: string;
    role_user_id: number;
    created_at: string;
    updated_at: string;
  }
  
  interface CocheFoto {
    id: number;
    id_vehiculo: number;
    img: string;
    descripcion: string;
    created_at: string;
    updated_at: string;
    id_usuario: number;
  }
  
  interface Marca {
    id: number;
    descripcion: string;
    created_at: string;
    updated_at: string;
    id_usuario: number;
  }
  
  interface Modelo {
    id: number;
    descripcion: string;
    created_at: string;
    updated_at: string;
    id_usuario: number;
    id_marca: number;
  }
  
  interface Coche {
    id: number;
    id_marca: number;
    id_modelo: number;
    numero_puestos: number;
    puertas: number;
    porcentaje_oferta: number | null;
    alquiler_basico: number;
    alquiler_medio: number;
    alquiler_premium: number;
    fotos: CocheFoto[];
    marca: Marca;
    modelo: Modelo;
  }
  
  interface Data {
    elementos: Traduccion[];
    parametros: Parametros;
    sliders: any[]; // Puedes ajustar este tipo según la estructura real
    beneficios: Beneficio[];
    oficinas: Oficina[];
    comentarios: Comentario[];
    coches: Coche[];
  }
  
  export interface ResponseObject {
    status: string;
    data: Data;
  }
  