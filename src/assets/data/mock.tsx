import vr from "../icons/products/vr.png";
import keyboard from "../icons/products/keyboard.png";
import jbl from "../icons/products/jbl.png";
import monitor from "../icons/products/monitor.png";
import pcGamer from "../icons/products/pc-gamer.png";


export interface Produto {
    cover: string;
    title: string;
    subTitle: string;
    price: string;

}

const mockData: Produto[] = [
    {
        cover: vr,
        title: "Oculos virtual",
        subTitle: "Vr Glesses",
        price: 'R$19,50',
    },
    {
        cover: keyboard,
        title: "Teclado Mecânico",
        subTitle: "Teclado",
        price: 'R$200',
    },
    {
        cover: jbl,
        title: "Caixa de som JBL",
        subTitle: "Caixa de som",
        price: 'R$400',
    },
    {
        cover: monitor,
        title: "Monitor 25 polegadas",
        subTitle: "Monitores",
        price: 'R$900',
    },
    {
        cover: pcGamer,
        title: "Computador Gamer",
        subTitle: "Computadores",
        price: 'R$900',
    }
];

export default mockData;