import { Cliente } from "../model/Cliente";
import { Games } from "../model/Game";
import { Locacao } from "../model/Locacao";

export class LocacaoController{
    private locacao: Locacao | null = null;

    realizarlocacao(id: number, game: Games, cliente: Cliente, datalocacao: string, dataDevolucao: string) : Locacao | null {
        if (!game.disponivel){
        return null;
    }
    game.disponivel = false;
    this.locacao = new Locacao(id, cliente, game, datalocacao, dataDevolucao)

    return this.locacao;
}

    devolverGame(): boolean{
        if(!this.locacao){
            return false;
        }
        if (this.locacao.foiDevolvido()){
            return false;
        }
        this.locacao.game.disponivel = true;
        this.locacao.marcarComoDevolvido();
        return true;
    }

    consultarSituacao(dataAtual:string): string{
        if(!this.locacao){
            return "Nenhuma locação ativa";
        }
        return this.locacao.consultarSituacao(dataAtual);
    }
}