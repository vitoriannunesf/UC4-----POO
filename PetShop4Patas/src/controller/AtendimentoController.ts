import { Cliente } from "../model/Cliente";
import { Animal } from "../model/Animal";
import { Veterinario } from "../model/Veterinario";
import { Servico } from "../model/Serviço";
import { Atendimento } from "../model/Atendimento";
import { Pagamento } from "../model/Pagamento";

export class AtendimentoController{
    constructor(
        private cliente: Cliente | null = null,
        private animal: Animal | null = null,
        private veterinario: Veterinario | null = null,
        private servico: Servico | null = null,
        private atendimento: Atendimento | null = null,
        private pagamento: Pagamento | null = null
    ){}

cadastrarCliente(id: number, nome: string, cpf: string, telefone: string, email: string): Cliente{
    this.cliente = new Cliente(id, nome, cpf, telefone, email);
    return this.cliente;
}

cadastrarAnimal(id: number, nome: string, especie: string, raca: string, idade: number, peso: number, dono: Cliente, sexo: string): Animal{
    this.animal = new Animal(id, nome, especie, raca, idade, peso, dono, sexo);
    return this.animal;
}

cadastrarVeterinario(id: number, nome: string, crmv: string, especialidade: string, telefoneEmergencia: string): Veterinario{
    this.veterinario = new Veterinario(id, nome, crmv, especialidade, telefoneEmergencia);
    return this.veterinario;
}

cadstrarServico(id: number, descricao: string, valor: number, duracaoMinutos: number): Servico{
    this.servico = new Servico(id, descricao, valor, duracaoMinutos);
    return this.servico;
}

cadastrarPagamento(formaPagamento: string, valorPago: number, dataPagamento: string, pago: boolean): Pagamento{
    this.pagamento = new Pagamento(formaPagamento, valorPago, dataPagamento, pago)
    return this.pagamento;
}

realizarAtendimento(id: number, cliente: Cliente, animal: Animal, veterinario: Veterinario, servico: Servico, dt_atendimento: string, observacoes: string, finalizado: boolean, cancelado: boolean, pagamento: Pagamento): Atendimento{
    this.atendimento = new Atendimento(id, cliente, animal, veterinario, servico, dt_atendimento, observacoes, finalizado, cancelado, pagamento);
    return this.atendimento;
}

finalizarAtendimento(atendimento: Atendimento): boolean{
    return atendimento.finalizar();
}

cancelarAtendimento(atendimento: Atendimento): boolean{
    return atendimento.cancelar();
}

obterCliente(): Cliente | null{
    return this.cliente;
}

obterAnimal(): Animal | null{
    return this.animal;
}

obterVeterinario(): Veterinario | null{
    return this.veterinario;
}

obterServico(): Servico | null{
    return this.servico;
}

obterAtendimento(): Atendimento | null{
    return this.atendimento
}

alterarObservacoes(atendimento: Atendimento, novaObservacao: string): void{
    atendimento.observacoes = novaObservacao;
}
}