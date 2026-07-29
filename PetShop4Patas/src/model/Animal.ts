import { Cliente } from "./Cliente";

export class Animal{
    constructor(
        public id: number,
        public nome: string,
        public especie: string,
        public raca: string,
        public idade: number,
        public peso: number,
        public dono: Cliente,
        public sexo: string
    ){}
}