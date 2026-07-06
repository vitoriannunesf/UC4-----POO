class Livro {
    constructor(
        public nome:string,
        public numeroPaginas:number,
        public autor:string
    ){}
}

class Aluno {
    constructor(
        public nome:string,
        public idade:number,
        public turma:string
    ){}
}

class Emprestimo {
    constructor(
        public data:string,
        public aluno: Aluno,
        public livro: Livro,
        public dataDevolucao:string
    ){}

    exibirEmprestimo(){
console.log("============ BIBLIOTECA ==================");
console.log(`Livro: ${livro.nome} \n Autor: ${livro.autor} \n Numero de paginas: ${livro.numeroPaginas}`)
console.log("-------------------------------------------------------------------------------------------")
console.log(`Nome: ${aluno.nome} \n Idade: ${aluno.idade} \n Turma: ${aluno.turma}`)
console.log("-------------------------------------------------------------------------------------------")
console.log(`Data do emprestimo: ${emprestimo.data} \n Data da devolução: ${emprestimo.dataDevolucao}`)
    }

    estaAtrasado(dataAtual:string): void{
        const atual = new Date(dataAtual);
        const devolucao = new Date(this.dataDevolucao);

        if(atual > devolucao){
            console.log("Atenção!!");
            console.log("Este livro esta com devolução atrasada!!");
        }else {
            console.log("Emprestimo dentro do prazo!!")
        }
    }
}

const livro = new Livro("Harry Potter", 348, "J.K Rowling");
const aluno = new Aluno("Livia", 16, "TDS261T");
const emprestimo = new Emprestimo("01.07.26", aluno, livro, "01.08.26");
emprestimo.exibirEmprestimo()
