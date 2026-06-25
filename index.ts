class Produto {
    constructor(
    public nome:string,
    public preco: number,
    public quantidade: number
    ) { }

    valorEstoque(): number {
        return this.preco * this.quantidade;
    }
    situacaoEstoque(): string {
        if (this.quantidade < 5){
            return "Estoque baixo";
        }
        if (this.quantidade <= 20){
            return "Estoque normal"; 
        }
        return "Estoque alto";
    }
    
    aplicarDesconto(percentual: number): void {
        if (percentual <= 0 || percentual > 100) {
            console.log("Percentual de desconto invalido.");
            return;
        }
        this.preco = this.preco - (this.preco * percentual) / 100;
    }

    reporEstoque(quantidade: number): void {
        if (quantidade <= 0) {
            console.log("Quantidade para reposição invalida.");
            return;
        }
        this.quantidade += quantidade;
    }

    vender(quantidadeVendida: number): void {
        if(quantidadeVendida <= 0){
            console.log("Quantidade de venda invalida.");
            return;
        }
        if(quantidadeVendida > this.quantidade){
            console.log(`Nao ha estoque suficiente para vender ${this.nome}`);
            return;
        }
        this.quantidade -= quantidadeVendida;
        console.log(`Venda realizada: ${quantidadeVendida} unidade(s) de ${this.nome}`)
    }

    exibirDados(): void {
        console.log("=========================");
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço Unitario: R$ ${this.preco.toFixed(2)}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor em Estoque: R$ ${this.valorEstoque().toFixed(2)}`);
        console.log(`Situação: ${this.situacaoEstoque()}`);
        console.log("==============================")
    }

}

const produto1 = new Produto("Mouse Gamer", 120, 10);
const produto2 = new Produto("Teclado Mecanico", 250, 3);
const produto3 = new Produto("Monitor 24 Polegadas", 900, 25);


produto1.exibirDados();
produto2.exibirDados();
produto3.exibirDados();  

/*console.log("Aplicando desconto de 10% no Mouse Gamer...")
produto1.aplicarDesconto(10);
produto1.exibirDados();

console.log("Aplicando desconto de 15% no Monitor 24 polegadas...")
produto3.aplicarDesconto(15);
produto3.exibirDados();

console.log("Reponde 10 unidades do teclado Mecanico...");
produto2.reporEstoque(10);
produto2.exibirDados();

console.log("Vendemos 5 unidades do Monitor...");
produto3.vender(5);
produto3.exibirDados();

console.log("Tentando vender 100 unidades do Mouse Gamer...");
produto1.vender(100);
produto1.exibirDados();*/

const produto4 = new Produto("CPU I5 10", 2530.50, 2);
const produto5 = new Produto("Impressora Epson L450", 1587, 5);

produto4.exibirDados();
produto5.exibirDados();

console.log("Vendemos 1 unidade do CPU I5 10...")
produto4.vender(1);
produto4.exibirDados();

console.log("Vendemos 2 unidades da Impressora Epson L450...");
produto5.vender(2);
produto5.exibirDados();




/*class = seleção
*nome - string
*pontos - number
*gols_marcados - number
*gols_sofridos - number

== medotos ==
*saldo_gols
*situação_grupo - classificado, eliminado, ainda tem chance
                 +6 pontos      -3 pontos      entre 3 e 6 pontos

exibir_resumo 
*selecao
*situacao
*gols feitos
*gols sofridos
saldo de gols
pontos
