import { Locacao } from "../model/Locacao";
export class LocacaoView{

    exibirTitulo(): void {
        console.log("===================================");
        console.log("    🎮 SISTEMA DE LOCAÇÃO ");
        console.log("===================================");
    }

    exibirResumo(dataAtual: string, locacao:Locacao): void{
        console.log();
        console.log("===================================");
        console.log("       🎮 RESUMO DA LOCAÇÃO ");
        console.log("===================================");
        console.log(`ID da locação: ${locacao.id}`);
        console.log(`Jogo Locado: ${locacao.game.nome}`);
        console.log(`Console: ${locacao.game.console}`);
        console.log(`Tipo: ${locacao.game.tipo}`);
        console.log("===================================");
        console.log(`Cliente: ${locacao.cliente.nome}`);
        console.log(`CPF: ${locacao.cliente.cpf}`);
        console.log(`E-mail: ${locacao.cliente.email}`);
        console.log("===================================");
        console.log(`Data de locação: ${locacao.data}`);
        console.log(`Previsão de devolução: ${locacao.dt_devolucao}`);
        console.log(`Dias previstos: ${locacao.calcularDias()}`);
        console.log(`Valor previsto: R$ ${locacao.calcularValorPrevisto().toFixed(2)}`);
        console.log("===================================");
        console.log(`Situação: ${locacao.estaAtrasada(dataAtual) ? "Sim✅" : "Não❌"}`);
        console.log(`Dias em atraso: ${locacao.calcularDiasAtraso(dataAtual)}`);
        console.log(`Valor do atraso: R$ ${locacao.calcularValorAtraso(dataAtual).toFixed(2)}`);
        console.log("===================================");
        console.log(`💰 VALOR TOTAL A PAGAR: R$ ${locacao.calcularValorTotal(dataAtual).toFixed(2)}`);
    }

    exibirMensagem(mensagem: string): void {
        console.log();
        console.log(mensagem); 
    }
}