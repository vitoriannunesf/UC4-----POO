export class Games{
    constructor(
        public id:number,
        public nome:string,
        public console:string,
        public tipo:string,
        public valorDiaria:number,
        public disponivel: boolean = true
    ){}

    exibirDados(): void{
        console.log("================================================");
        console.log(`🎮 Nome: ${this.nome}`);
        console.log(`🕹️ Console: ${this.console}`);
        console.log(`📂 Tipo: ${this.tipo}`);
        console.log(`💰 Valor Diario: ${this.valorDiaria.toFixed(2)} `);
        console.log(`📌 Disponivel: ${this.disponivel ? "Sim" : "Não"}`);
        console.log("=================================================")
    }
}

