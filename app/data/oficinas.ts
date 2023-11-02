import { ObservableArray } from '@nativescript/core/data/observable-array';

export const oficinas = {
    data: new ObservableArray([
        { 
            id: 1, 
            text: 'Pas de la casa Av. Pais Valenciano 33 Bj. D. Betera. 46117', 
            status: true
        },
        { 
            id: 2,
            text: 'La Massana', 
            status: false,
        },
        { 
            id: 3, 
            text: 'Escaldes - EngordanyAvinguda Pont de la Tosca g .local 7.', 
            status: false,
        }, 
    ])
}