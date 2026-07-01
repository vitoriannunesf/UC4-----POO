//classes
class Professor {

    constructor(
        public nome:string,
        public disciplina:string
    ){}

}

class Aluno {
    constructor (
        public nome:string,
        public idade:number
    ){}
}

class Curso{

    constructor(
        public nome: string,
        public professor: Professor,
        public aluno: Aluno
    ){}
}


//objetos
 const professor = new Professor("Carlos", "Javascript");
 const aluno = new Aluno("Lucas", 18);
 
 const professor2 = new Professor("Joao", "Typescript");
 const aluno2 = new Aluno("Maria", 17);

 const curso1 = new Curso("Curso de Javascript", professor, aluno);
 const curso2 = new Curso("Curso de Java", professor2, aluno2);


 //associação
/* console.log(`${aluno.nome} de ${aluno.idade} é aluno do professor ${professor.nome}`)
 console.log(`${aluno2.nome} de ${aluno2.idade} é aluno do professor ${professor2.nome}`)*/

 console.log(`${curso2.aluno.nome}, estuda ${curso2.professor.disciplina}`)
 console.log(`O Professor ${curso2.professor.nome}, leciona ${curso2.professor.disciplina}`)

 
