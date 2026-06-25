class Selecao {
    constructor(
        public nome: string,
        public pontos: number,
        public gols_marcados: number,
        public gols_sofridos: number
    ) { }

    registrarResultado(gols_feitos: number, golsSofridos: number): void {
       if(gols_feitos > golsSofridos){
        this.pontos += 3;
       }
       else if( gols_feitos === golsSofridos){
        this.pontos += 1;
       }
       this.gols_marcados += gols_feitos;
       this.gols_sofridos += golsSofridos;
    }
    
    saldoGols(): number {
       return this.gols_marcados - this.gols_sofridos;
    }

    comentarioTecnico(): string {
       if(this.pontos >= 6 && this.saldoGols() > 0) {
        return "Grande campanha. A seleção esta jogando como favorita ao titulo!"
       }
       if(this.pontos >= 3 && this.saldoGols() < 0) {
        return "A seleção ainda tem chance, mas precisa melhorar o saldo."
       }
       return "Situação complicado. A seleção precisa reagir urgentemente!"
        }
    

    situacaoGrupo(): string {
        if(this.pontos >= 6){
            return "Classificado!";
        }
        
        if(this.pontos > 3 && this.pontos < 6){
            return "Ainda tem chance!"
        }

        return "Eliminado!"
    }
    
     exibirResumo(): void {
        console.log("=========================================");
        console.log(`Nome: ${this.nome}`);
        console.log(`Pontos: ${this.pontos}`);
        console.log(`Gols Marcados: ${this.gols_marcados}`);
        console.log(`Gols Sofridos: ${this.gols_sofridos}`);
        console.log(`Saldo de gols: ${this.saldoGols()}`);
        console.log(`Situação: ${this.situacaoGrupo()}`);
        console.log(`Comentario do tecnico: ${this.comentarioTecnico()}`)
        console.log("==========================================")
    }
}


const selecao1 = new Selecao("Brasil", 9, 6, 5);
const selecao2 = new Selecao("França", 6, 7, 4);
const selecao3 = new Selecao("Portugal", 6, 8, 5);
const selecao4 = new Selecao("Argentina", 1, 2, 6);

const grupo = [selecao1, selecao2, selecao3, selecao4];
for (const selecao of grupo) {
  selecao.exibirResumo();
}


selecao1.exibirResumo();
selecao2.exibirResumo();
selecao3.exibirResumo();
selecao4.exibirResumo();
