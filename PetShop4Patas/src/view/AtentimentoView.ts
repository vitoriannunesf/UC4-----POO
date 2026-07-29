import { Cliente } from "../model/Cliente";
import { Animal } from "../model/Animal";
import { Veterinario } from "../model/Veterinario";
import { Servico } from "../model/Serviço";
import { Atendimento } from "../model/Atendimento";
import { Pagamento } from "../model/Pagamento";

export class AtendimentoView{
    
    exibirTitulo(): void{
        console.log("===================================");
        console.log(" 🐾  4 PATAS  🐨💕");
        console.log("===================================");
        }

    exibirCliente(cliente: Cliente): void{
        console.log("👤 CLIENTE ")
        console.log(`ID: ${cliente.id}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`CPF: ${cliente.cpf}`);
        console.log(`Telefone: ${cliente.telefone}`);
        console.log(`Email: ${cliente.email}`);
        console.log("-------------------------------------------------")
    }

    exibirAnimal(animal: Animal): void{
        console.log("😺 ANIMAL 🐵");
        console.log(`ID: ${animal.id}`);
        console.log(`Nome: ${animal.nome}`);
        console.log(`Especie: ${animal.especie}`);
        console.log(`Raça: ${animal.raca}`);
        console.log(`Idade: ${animal.idade}`);
        console.log(`Peso: ${animal.peso}`);
        console.log(`Dono: ${animal.dono.nome}`);
        console.log(`Sexo: ${animal.sexo}`)
        console.log("-------------------------------------------------")
    }

    exibirVeterinario(veterinario: Veterinario): void{
        console.log("🌻 VETERINÁRIO 🩺 ");
        console.log(`ID: ${veterinario.id}`);
        console.log(`Nome: ${veterinario.nome}`);
        console.log(`CRMV: ${veterinario.crmv}`);
        console.log(`Especialidade: ${veterinario.especialidade}`);
        console.log(`Telefone Emergência: ${veterinario.telefoneEmergencia}`)
        console.log("-------------------------------------------------")
    }

    exibirServico(servico: Servico): void{
        console.log("🥼 SERVIÇO 🩵")
        console.log(`ID: ${servico.id}`);
        console.log(`Descrição: ${servico.descricao}`);
        console.log(`Valor: ${servico.valor}`);
        console.log(`Tempo de Duração: ${servico.duracaoMinutos}`)
        console.log("-------------------------------------------------")
    }

    exibirAtendimento(atendimento: Atendimento): void{
        console.log("🧑‍⚕️ ATENDIMENTO 🐩");
        console.log(`ID: ${atendimento.id}`);
        console.log(`Cliente: ${atendimento.cliente.nome}`);
        console.log(`Animal: ${atendimento.animal.nome}`);
        console.log(`Veterinario: ${atendimento.veterinario.nome}`);
        console.log(`Serviço: ${atendimento.servico.descricao}`);
        console.log(`Data do Atendimento: ${atendimento.dt_atendimento}`);
        console.log(`Observações: ${atendimento.observacoes}`);
        console.log("-------------------------------------------------")
    }

    exibirPagamento(pagamento: Pagamento): void{
        console.log("💵 PAGAMENTO 💵 ");
        console.log(`Forma de pagamento: ${pagamento.formaPagamento}`);
        console.log(`Valor pago: ${pagamento.valorPago}`);
        console.log(`Data do Pagemento: ${pagamento.dataPagamento}`);
        console.log(`Pago: ${pagamento.pago}`);
        console.log("--------------------------------------------------")
    }

    exibirMensagem(mensagem: string): void{
        console.log();
        console.log(mensagem);
    }
}
