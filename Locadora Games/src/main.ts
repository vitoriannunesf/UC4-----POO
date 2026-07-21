import { Cliente } from "./model/Cliente";
import { Games } from "./model/Game";
import { LocacaoController } from "./controller/LocacaoController";
import { LocacaoView } from "./view/LocacaoView";

const controller = new LocacaoController(); 

const view = new LocacaoView();

view.exibirTitulo();

const cliente = new Cliente(1, "Livia Matias", 16, "123.456.789.00", "livia34@gmail.com",true);

const game = new Games(1, "Minecraft", "Playstation 5", "DVD", 10);

const locacao = controller.realizarlocacao(1, game, cliente, "2026-07-13", "2026-07-16");

if (!locacao){
    view.exibirMensagem(`❌ O jogo já está locado.`)
}else{
    view.exibirMensagem(`✅ O jogo foi locado com sucesso!`);
    view.exibirResumo("2026-07-16", locacao);
}