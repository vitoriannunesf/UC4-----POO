class Processador {
    constructor(
        public modelo: string,
        public nucleos: number,
        public frequencia: number
    ) { }
}

class MemoriaRAM {
    constructor(
        public capacidade: number,
        public tipo: string
    ) { }
}

class SSD {
    constructor(
        public capacidade: number,
        public interfaceSSD: string
    ) { }
}

class Computador {
    public processador: Processador;
    public memoriaRAM: MemoriaRAM;
    public ssd: SSD;

    constructor(
        public marca: string,
        public modelo: string,
        public preco: number
    ) {
        this.processador = new Processador("Intel Core i5-12400", 6, 2.5);
        this.memoriaRAM = new MemoriaRAM(16, "DDR4");
        this.ssd = new SSD(512, "NVMe");
    }

    ligar(): void {
        console.log("💻 Computador ligado com sucesso!");
    }

    desligar(): void {
        console.log("💻 Computador desligado.");
    }

    upgradeMemoria(novaCapacidade: number): void {
        if (novaCapacidade <= this.memoriaRAM.capacidade) {
            console.log("A nova memória precisa ser maior que a atual.");
            return;
        }

        this.memoriaRAM.capacidade = novaCapacidade;
        console.log(`Memória atualizada para ${novaCapacidade} GB.`);
    }

    upgradeSSD(novaCapacidade: number): void {
        if (novaCapacidade <= this.ssd.capacidade) {
            console.log("O novo SSD precisa ser maior que o atual.");
            return;
        }

        this.ssd.capacidade = novaCapacidade;
        console.log(`SSD atualizado para ${novaCapacidade} GB.`);
    }

    exibirConfiguracaoCompleta(): void {
        console.log("=====================================");
        console.log("💻 COMPUTADOR");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log("-------------------------------------");
        console.log("🧠 Processador");
        console.log(`Modelo: ${this.processador.modelo}`);
        console.log(`Núcleos: ${this.processador.nucleos}`);
        console.log(`Frequência: ${this.processador.frequencia} GHz`);
        console.log("-------------------------------------");
        console.log("💾 Memória RAM");
        console.log(`Capacidade: ${this.memoriaRAM.capacidade} GB`);
        console.log(`Tipo: ${this.memoriaRAM.tipo}`);
        console.log("-------------------------------------");
        console.log("📀 SSD");
        console.log(`Capacidade: ${this.ssd.capacidade} GB`);
        console.log(`Interface: ${this.ssd.interfaceSSD}`);
        console.log("=====================================");
    }
}

class Loja {
    public computadores: Computador[] = [];

    constructor(public nome: string) { }

    adicionarComputador(computador: Computador): void {
        this.computadores.push(computador);
        console.log(`Computador ${computador.marca} ${computador.modelo} adicionado à loja.`);
    }

    listarComputadores(): void {
        console.log("=====================================");
        console.log(`🏬 LOJA: ${this.nome}`);
        console.log("📋 LISTA DE COMPUTADORES");
        console.log("=====================================");

        if (this.computadores.length === 0) {
            console.log("Nenhum computador cadastrado.");
            return;
        }

        for (let i = 0; i < this.computadores.length; i++) {
            const computador = this.computadores[i];

            console.log(`${i + 1}. ${computador.marca} ${computador.modelo}`);
            console.log(`   Processador: ${computador.processador.modelo}`);
            console.log(`   Memória RAM: ${computador.memoriaRAM.capacidade} GB`);
            console.log(`   SSD: ${computador.ssd.capacidade} GB`);
            console.log(`   Preço: R$ ${computador.preco.toFixed(2)}`);
            console.log("-------------------------------------");
        }
    }

    buscarPorMarca(marca: string): void {
        const encontrados = this.computadores.filter(
            (computador) => computador.marca.toLowerCase() === marca.toLowerCase()
        );

        console.log("=====================================");
        console.log(`🔍 BUSCA POR MARCA: ${marca}`);
        console.log("=====================================");

        if (encontrados.length === 0) {
            console.log("Nenhum computador encontrado.");
            return;
        }

        for (const computador of encontrados) {
            computador.exibirConfiguracaoCompleta();
        }
    }

    removerComputador(modelo: string): void {
        const indice = this.computadores.findIndex(
            (computador) => computador.modelo.toLowerCase() === modelo.toLowerCase()
        );

        if (indice === -1) {
            console.log("Computador não encontrado.");
            return;
        }

        const removido = this.computadores.splice(indice, 1)[0];
        console.log(`Computador ${removido.marca} ${removido.modelo} removido da loja.`);
    }

    alterarPreco(modelo: string, novoPreco: number): void {
        const computador = this.computadores.find(
            (computador) => computador.modelo.toLowerCase() === modelo.toLowerCase()
        );

        if (!computador) {
            console.log("Computador não encontrado.");
            return;
        }

        if (novoPreco <= 0) {
            console.log("Preço inválido.");
            return;
        }

        computador.preco = novoPreco;
        console.log(`Preço do ${computador.marca} ${computador.modelo} alterado para R$ ${novoPreco.toFixed(2)}.`);
    }

    mostrarQuantidadeEstoque(): void {
        console.log(`📊 Quantidade de computadores no estoque: ${this.computadores.length}`);
    }

    calcularValorTotalEstoque(): number {
        let total = 0;

        for (const computador of this.computadores) {
            total += computador.preco;
        }

        return total;
    }

    exibirValorTotalEstoque(): void {
        console.log(`💰 Valor total do estoque: R$ ${this.calcularValorTotalEstoque().toFixed(2)}`);
    }

    computadorComMaiorMemoria(): void {
        if (this.computadores.length === 0) {
            console.log("Nenhum computador cadastrado.");
            return;
        }

        let maior = this.computadores[0];

        for (const computador of this.computadores) {
            if (computador.memoriaRAM.capacidade > maior.memoriaRAM.capacidade) {
                maior = computador;
            }
        }

        console.log("⭐ Computador com maior memória RAM:");
        maior.exibirConfiguracaoCompleta();
    }

    computadorComMaiorSSD(): void {
        if (this.computadores.length === 0) {
            console.log("Nenhum computador cadastrado.");
            return;
        }

        let maior = this.computadores[0];

        for (const computador of this.computadores) {
            if (computador.ssd.capacidade > maior.ssd.capacidade) {
                maior = computador;
            }
        }

        console.log("🚀 Computador com maior SSD:");
        maior.exibirConfiguracaoCompleta();
    }
}

const computador1 = new Computador("Dell", "Inspiron 15", 3500);
const computador2 = new Computador("Lenovo", "IdeaPad 3", 2900);
const computador3 = new Computador("Acer", "Aspire 5", 3200);
const computador4 = new Computador("Dell", "Vostro 3520", 4100);

computador1.ligar();
computador1.upgradeMemoria(32);
computador1.upgradeSSD(1000);
computador1.desligar();

computador2.upgradeMemoria(24);
computador3.upgradeSSD(2000);

const loja = new Loja("Tech House");

loja.adicionarComputador(computador1);
loja.adicionarComputador(computador2);
loja.adicionarComputador(computador3);
loja.adicionarComputador(computador4);

loja.listarComputadores();

loja.buscarPorMarca("Dell");

loja.alterarPreco("IdeaPad 3", 3100);

loja.mostrarQuantidadeEstoque();

loja.exibirValorTotalEstoque();

loja.computadorComMaiorMemoria();

loja.computadorComMaiorSSD();

loja.removerComputador("Aspire 5");

loja.listarComputadores();

loja.exibirValorTotalEstoque();