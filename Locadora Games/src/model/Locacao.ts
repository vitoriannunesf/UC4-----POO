import { Cliente } from "./Cliente";
import { Games } from "./Game";

export class Locacao{
    constructor(
        public id:number,
        public cliente:Cliente,
        public game:Games,
        public data:string,
        public dt_devolucao:string,
        public devolvida: boolean = true 
    ){
        this.locar();
    }

    locar(): void {
        if (!this.game.disponivel){
            console.log(`❌ O jogo ${this.game.nome} ja esta locado`);
            return;
        }
        this.game.disponivel = false;
        console.log(`🎮 O jogo ${this.game.nome} foi locado com sucesso!`)
    }

    devolver(): void {
        if (this.game.disponivel = true){
        console.log(`❌ O jogo ${this.game.nome} não esta locado e não pode ser devolvido `);
        return;
    }
    this.game.disponivel = true;
    console.log(`✅ O jogo ${this.game.nome} foi devolvido com sucesso!`)
    }

    estaAtrasada(dataAtual: string): boolean {
        const atual = new Date(dataAtual);
        const devolucao = new Date(this.dt_devolucao);
        return atual > devolucao;
    }

    calcularDias(): number{
        const inicio = new Date(this.data);
        const fim = new Date(this.dt_devolucao);

        const diferencatempo = fim.getTime() - inicio.getTime()
        const dias = diferencatempo / (1000 * 60 * 60 * 24);

        return dias;
    }

    calcularDiasAtraso(diaHoje: string): number{
        const inicio = new Date(this.dt_devolucao);
        const fim = new Date(diaHoje);

        const diferencatempo = fim.getTime() - inicio.getTime()
        const dias = diferencatempo / (1000 * 60 * 60 * 24);

        return dias;
    }

    calcularValorPrevisto(): number{
        return this.calcularDias() * this.game.valorDiaria;
    }

    calcularValorAtraso(dataAtual: string): number{
        return this.calcularDiasAtraso(dataAtual) * this.game.valorDiaria;
    }

    calcularValorTotal(dataAtual: string): number{
        return this.calcularValorAtraso(dataAtual) + this.calcularValorPrevisto();
    }

    marcarComoDevolvido(): void{
        this.devolvida = true;
    }

    foiDevolvido(): boolean{
        return this.devolvida;
    }

    consultarSituacao(dataAtual: string): string{
        if(this.foiDevolvido()){
            return "Devolvida";

        }
        if (this.estaAtrasada(dataAtual)){
            return "Atrasada";
        }
        return "Esta ok! Esta em dia!"

    }

    exibirResumo(dataAtual: string): void {
        console.log("============================================");
        console.log(`🎮 RESUMO DA LOCAÇÃO`);
        console.log("=============================================");
        console.log(`Jogo locado: ${this.game.nome}`);
        console.log(`Console: ${this.game.console}`);
        console.log(`Tipo: ${this.game.tipo}`);
        console.log("-----------------------------------------------");
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`CPF: ${this.cliente.cpf}`);
        console.log(`E-mail: ${this.cliente.email}`);
        console.log("-----------------------------------------------");
        console.log(`Data de locação: ${this.data}`);
        console.log(`Previsão de Devolução: ${this.dt_devolucao}`);
        console.log(`Total de dias previstos para a locação: ${this.calcularDias()} dias`);
        console.log(`O valor previsto é de: R$ ${this.calcularValorPrevisto()}`)
        console.log("-----------------------------------------------");
        console.log(`Situação da locação: ${this.estaAtrasada(dataAtual) ? "Atrasada" : "Em dia"}`)
        console.log(`Dias em atraso: ${this.calcularDiasAtraso(dataAtual)}`)
        console.log(`O valor de atraso é de: R$ ${this.calcularValorAtraso(dataAtual)}`)
        console.log("-----------------------------------------------");
        console.log(`Valor total pagar: ${this.calcularValorPrevisto() + this.calcularValorAtraso(dataAtual)}`)
}
        
}