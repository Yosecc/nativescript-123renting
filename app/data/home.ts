export const home = {
    idioma: 'ES',
    header: {
        title: [
            {
                text: 'VIAJA',
                fontSize: 60, 
                fontWeight:"800",
                color: '',
            },
            {
                text: ' sin ',
                fontSize: 36,
                fontWeight:"700",
                color: '#E74117'   
            },
            {
                text: 'LIMITES',
                fontSize: 60, 
                fontWeight:"800",
                color: ''

            },
        ],
        sub: {
            text: 'Encuentra y alquila en sencillos pasos',
            fontSize: 14, 
            fontWeight:"400",
            color: '',
            textAlignment:"center"
        }
    },
    body:{
        button:{
            text:"INICIA TU RESERVA",
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
                text:"Flota" ,
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
                text:"Oficina" ,
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
                text:"Mis reservas" ,
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
                text:"Perfil" ,
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
                text:"Contacto" ,
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
                text:"Metodo de pago" ,
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
                text:"Preguntas Frecuentes" ,
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
    }
}