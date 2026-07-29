import { Cliente } from "./Cliente";
import { Animal } from "./Animal";
import { Servico } from "./Serviço";
import { Veterinario } from "./Veterinario";
import { Pagamento } from "./Pagamento";

export class Atendimento{
    constructor(
        public id: number,
        public cliente: Cliente,
        public animal: Animal,
        public veterinario: Veterinario,
        public servico: Servico,
        public dt_atendimento: string,
        public observacoes: string,
        private finalizado: boolean = false,
        private cancelado: boolean = false,
        public pagamento: Pagamento
    ){}

calcularValorTotal():number {
    return this.servico.valor;
}

foiFinalizado(): boolean{
    return this.finalizado;
}

foiCancelado(): boolean{
    return this.cancelado;
}

finalizar(): boolean{
    if(this.finalizado || this.cancelado || this.servico.valor < this.pagamento.valorPago || this.pagamento.pago){
        return false;
    }
    this.finalizado = true;
    return true;
}

cancelar(): boolean{
    if(this.cancelado || this.finalizado){
        return false;
    }
    this.cancelado = true;
    return true;
}

consultarSituacao(): string{
    if(this.cancelado){
        return "❌ Atendimento Cancelado!"
    }
    if(this.finalizado){
        return "✅ Atendimento Finalizado!"
    }
    return "🐕 Atendimento em Andamento!"
}

calcularValorComDesconto(percentual: number): number{
    const desconto = this.calcularValorTotal() * (percentual / 100);
    return this.calcularValorTotal() - desconto;
}

}