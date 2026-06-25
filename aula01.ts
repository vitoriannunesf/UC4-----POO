class ContaBancaria{
    public saldo:number;
    public titular:string;

    constructor(titular:string, saldoInicial:number){
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    
    public depositar(valor:number):void{
        if (valor <= 0){
            console.log("Valor invalido para deposito");
            return;
        }
        this.saldo += valor;
    }
    public sacar(valor: number): boolean {
        if (valor <= 0 || valor > this.saldo) return false;
        this.saldo -= valor;
        return true;
    }
    public verSaldo(): number {
        return this.saldo;
    }
}
const conta1 = new ContaBancaria("Mia", 300);
conta1.depositar(50);
console.log("Saldo atual R$"+conta1.verSaldo());
console.log("É possivel sacar R$1000? "+conta1.sacar(1000));
console.log("É possivel sacar R$200? "+conta1.sacar(200));
console.log("Saldo atual de R$"+conta1.verSaldo());