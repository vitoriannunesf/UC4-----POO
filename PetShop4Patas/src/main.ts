import { AtendimentoController } from "./controller/AtendimentoController";
import { AtendimentoView } from "./view/AtentimentoView";

const controller = new AtendimentoController();
const view = new AtendimentoView();
view.exibirTitulo();

const cliente = controller.cadastrarCliente(1, "Vitoria", "123.456.789-00", "51378936254","vitoria@gmail.com");
const cliente2 = controller.cadastrarCliente(2, "Livia", "789.654,321-00", "51987654321", "livia@gmail.com");
view.exibirCliente(cliente);
view.exibirCliente(cliente2);

const animal = controller.cadastrarAnimal(1, "Luna", "Cachorro", "SRD", 6, 12, cliente, "Fêmea");
const animal2 = controller.cadastrarAnimal(2, "Billy", "Cachorro", "Shit-tzu", 6, 10, cliente2, "Macho");
view.exibirAnimal(animal);
view.exibirAnimal(animal2);

const veterinario = controller.cadastrarVeterinario(1, "Julia", "CRMV-RS 12345", "Cirurgia", "51123456789");
view.exibirVeterinario(veterinario);

const servico = controller.cadstrarServico(1, "Consulta veterinaria e cirurgia", 750, 180);
const servico2 = controller.cadstrarServico(2, "Consulta veterinaria e cirurgia", 800, 195);
view.exibirServico(servico);
view.exibirServico(servico2);

const pagamento = controller.cadastrarPagamento("Débito", 750, "2026-07-27", true);
const pagamento2 = controller.cadastrarPagamento("Crédito", 800, "2026-07-28", true);
view.exibirPagamento(pagamento);
view.exibirPagamento(pagamento2);

const atendimento = controller.realizarAtendimento(1, cliente, animal, veterinario, servico, "2026-07-27", "Sobrepeso e cuidado ao tomar os medicamentos", false, false, pagamento);
const atendimento2 = controller.realizarAtendimento(2, cliente2, animal2, veterinario, servico2, "2026-07-28", "Cuidado com os medicamentos", false, false, pagamento2);

if(atendimento){
    view.exibirMensagem("✅ Atendimento Realizado com Sucesso!");
    view.exibirAtendimento(atendimento);
    view.exibirMensagem("✅ Atendimento Realizado com Sucesso!");
    view.exibirAtendimento(atendimento2);
}else{
    view.exibirMensagem("❌ Não foi possivel realizar o atendimento!");
}

