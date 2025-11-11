// make an array of services

import { alpha, delta, omega } from "@/assets";
import { ImageProps, StaticImageData } from "next/image";

export interface IService {
    name: string;
    src: StaticImageData;
    price: number;
    color?: string;
}


export const services: IService[] = [
    {
        name: 'Alpha',
        src: alpha,
        color: '#2CAEE0',
        price: 295
    },
    {
        name: 'Delta',
        src: delta,
        color: '#bcaa8aff',
        price: 450
    },
    {
        name: 'Omega',
        src: omega,
        color: '#FD3D18',
        price: 595
    },
]