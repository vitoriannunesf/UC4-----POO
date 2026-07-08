class Heroi{
    constructor(
        public nome: string,
        public vida: number,
        public energia: number
    ){}
}


class Equipe{
    constructor(
        public nome:string,
        public herois:Heroi[]=[]

    ){}

 listarHerois(){
    for(let heroi of this.herois){
        console.log(heroi.nome);
     }
     }

 adicionarHeroi(
    heroi:Heroi
    ){
        this.herois.push(heroi);
    }

removerHeroi(nome: string): void{
    const indice = this.herois.findIndex(
        (heroi) => heroi.nome.toLowerCase() === nome.toLowerCase()
    )
    if( indice === -1){
        console.log("Heroi não encontrado");
        return;
    }
    const removido = this.herois.splice(indice,1)[0];
    console.log(`Heroi ${removido.nome} foi removido da equipe`);
}

quantidadeHerois(): void{
    console.log(`Quantidade de herois na equipe ${this.herois.length}`)
}

buscarHeroi(heroit: string): void{
    const heroisencontrados = this.herois.find((hero) => hero.nome.toLowerCase() === heroit.toLowerCase());

    console.log("================================");
    console.log(`BUSCA POR HEROIS ${heroit}`);
    console.log("================================");

    if(!heroisencontrados){
        console.log("Nenhum heroi encontrado");
        return;
    }else {
        console.log("Heroi encontrado.");
    }
}

}

const thor =
new Heroi("Thor", 100, 80);

const hulk =
new Heroi("Hulk", 150, 60);

const homemAranha =
new Heroi("Homem-Aranha", 90, 100);

const marvel =
new Equipe("Marvel");

marvel.herois.push(thor);
marvel.herois.push(hulk);
marvel.herois.push(homemAranha);

for(let heroi of marvel.herois){
    console.log(heroi.nome);
}

//marvel.listarHerois();
//marvel.adicionarHeroi(thor);
marvel.removerHeroi("hulk")
marvel.listarHerois();
