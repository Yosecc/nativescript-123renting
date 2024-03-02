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

export interface Beneficio {
    id: number;
    descripcion: string;
    precio: number;
    basic: number;
    medium: number;
    premium: number;
}

interface Mejoras {
    data: Mejora[],
    addMejora: (data:  Beneficio[]) => void
}

export const mejoras: Mejoras = {
    data: [],
    addMejora(data){
        this.data = data.map(element=>{
            return {
                name: element.descripcion,
                id: element.id,
                planes: [
                    {
                        id: 1,
                        plan: 'Basic',
                        amount: element.precio,
                        incluido: element.basic ? true : false,
                    },
                    {
                        id: 2,
                        plan: 'Medium',
                        amount: element.precio,
                        incluido: element.medium ? true : false,
                    },
                    {
                        id: 3,
                        plan: 'Premium',
                        amount: element.precio,
                        incluido: element.premium ? true : false,
                    },
                ],
            }
        })
    }
};
