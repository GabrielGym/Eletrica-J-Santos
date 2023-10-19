import lustreRustico from '../assets/Rectangle 30.png'
import Lampada from '../assets/Rectangle 30 (1).png'
import Extensao from      '../assets/Rectangle 30 (2).png'
import KitDeFerramentas from '../assets/Rectangle 30 (3).png'
import GarfosDeMesaInox from '../assets/Rectangle 30 (4).png'
import Chuveiro from '../assets/Rectangle 30 (5).png'
import Ventilador from '../assets/Rectangle 30 (6).png'
import Tomada from '../assets/Rectangle 30 (7).png'


export type TProducts = {
    id: number,
    name: string,
    value: number,
    discountPrice: number | null,
    installments: number | null,
    category: string,
    img: string
}

export const products: TProducts[] = [
    {
        id: 1,
        name: "Lustre suspenso rústico",
        value: 1500,
        discountPrice: 33.33,
        installments: 3,
        category: "Lustres",
        img: `${lustreRustico}`,
    },
    {
        id: 2,
        name: "Lâmpada",
        value: 60,
        discountPrice: 33.3,
        installments: 2,
        category: "Lâmpadas",
        img: `${Lampada}`,
    },
    {
        id: 3,
        name: "Extensão",
        value: 25,
        discountPrice: 32,
        installments: null,
        category: "Acessórios",
        img: `${Extensao}`,
    },
    {
        id: 4,
        name: "Kit de ferramentas",
        value: 100,
        discountPrice: 20,
        installments: 2,
        category: "Ferramentas",
        img: `${KitDeFerramentas}`,
    },
    {
        id: 5,
        name: "Garfos de mesa inox",
        value: 15,
        discountPrice: 46.6,
        installments: null,
        category: "Utensílios domésticos",
        img: `${GarfosDeMesaInox}`,
    },
    {
        id: 6,
        name: "Chuveiro",
        value: 120,
        discountPrice: 16.6,
        installments: 4,
        category: "Acessórios",
        img: `${Chuveiro}`,
    },
    {
        id: 7,
        name: "Ventilador 2 em 1, mesa e parede",
        value: 50,
        discountPrice: 40,
        installments: null,
        category: "Utensílios domésticos",
        img: `${Ventilador}`,
    },
    {
        id: 8,
        name: "Tomada",
        value: 20,
        discountPrice: 50,
        installments: null,
        category: "Acessórios",
        img: `${Tomada}`,
    },
]