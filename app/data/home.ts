export const home = {
    idioma: 'ES',
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
    }
}