interface Plan {
    id: number;
    plan: string;
    amount: number;
    incluido: boolean;
}

interface Mejora {
    name: string;
    id: number;
    planes: Plan[];
}

export const mejoras: Mejora[] = [
    {
        name: 'Combustible',
        id: 1,
        planes: [
            {
                id: 1,
                plan: 'Basic',
                amount: 100,
                incluido: false,
            },
            {
                id: 2,
                plan: 'Medium',
                amount: 100,
                incluido: false,
            },
            {
                id: 3,
                plan: 'Premium',
                amount: 100,
                incluido: true,
            },
        ],
    },
    {
        name: 'Kilometraje ilimitado',
        id: 2,
        planes: [
            {
                id: 1,
                plan: 'Basic',
                amount: 100,
                incluido: true,
            },
            {
                id: 2,
                plan: 'Medium',
                amount: 100,
                incluido: true,
            },
            {
                id: 3,
                plan: 'Premium',
                amount: 100,
                incluido: true,
            },
        ],
    },
    {
        name: 'Coberturas de ruedas y lunas',
        id: 3,
        planes: [
            {
                id: 1,
                plan: 'Basic',
                amount: 67,
                incluido: false,
            },
            {
                id: 2,
                plan: 'Medium',
                amount: 100,
                incluido: true,
            },
            {
                id: 3,
                plan: 'Premium',
                amount: 100,
                incluido: true,
            },
        ],
    },
];
