import { ObservableArray } from '@nativescript/core/data/observable-array';

export const oficinas = {
    data: new ObservableArray([
        { 
            id: 1, 
            text: 'Pas de la casa Av. Pais Valenciano 33 Bj. D. Betera. 46117', 
            status: true,
            position:{
                lat: '-34.5063046',
                lng: '-58.5525299',
            }
        },
        { 
            id: 2,
            text: 'La Massana', 
            status: false,
            position:{
                lat: '-34.5385361407958',
                lng: '-58.71181079717337',
            }
        },
        { 
            id: 3, 
            text: 'Escaldes - EngordanyAvinguda Pont de la Tosca g .local 7.', 
            status: false,
            position:{
                lat: '-34.824022260153924',
                lng: '-58.34602580923719',
            }
        }, 
    ])
}