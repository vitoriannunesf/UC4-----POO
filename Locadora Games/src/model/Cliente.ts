export class Cliente {
    constructor(
        public id:number,
        public nome:string,
        public idade:number,
        public cpf:string,
        public email:string,
        public ativo:boolean = true
    ){}

    exibirDados(): void{
        console.log("============================");
        console.log(`👤 Cliente: ${this.nome}`);
        console.log(`🎂 Idade: ${this.idade}`);
        console.log(`📄 CPF: ${this.cpf}`);
        console.log(`✉️E-mail: ${this.email} `);
        console.log(`✅ Ativo: ${this.ativo ? "Sim" : "Não"}`);
        console.log("=============================")
    }
}
