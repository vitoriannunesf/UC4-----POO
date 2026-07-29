export class Pagamento{
    constructor(
        public formaPagamento: string,
        public valorPago: number,
        public dataPagamento: string,
        public pago: boolean = false
    ){}

    confirmarPagamento(): void{
        this.pago = true
    }
}