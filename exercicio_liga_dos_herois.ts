interface Combatente {
    atacar(): void;
    defender(): void;
    usarPoderEspeciar(): void;
}

class Heroi implements Combatente {
    private vida: number;
    constructor(
        public nome: string,
        vida: number,
        public energia: number
    ){
        this.vida = vida;
    }

    atacar(): void {
        console.log(`${this.nome} realizando um ataque comum.`)
    }
    
    defender(): void {
        console.log(`${this.nome} se defendeu.`)
    }

    usarPoderEspeciar(): void {
        console.log(`${this.nome} ainda nao possui poder especial.`)
    }

    receberDano(dano:number): void{
        if(dano <= 0){
            console.log(`${this.nome} nao recebeu dano`)
            return;
        }
        this.vida -= dano;
        if(this.vida < 0){
            this.vida = 0;
        }
       
    }

    recuperarEnergia(energia:number): void{
        if(energia <= 0){
            console.log(`${this.nome} nao recuperou energia`)
            return;
        }
        this.energia += energia;
    }

    verVida():number{
        return this.vida;
    }

    estaVivo():boolean{
        return this.vida > 0;
    }

    renascer(): void{
       if(this.vida > 0){
        console.log(`${this.nome} ja esta vivo`);
       } else {
        console.log(`${this.nome} renasceu!`)
       }
       this.vida = 50;
       return;
    }

    exibirStatus(): void{
        console.log("=================================")
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Energia: ${this.energia}`);
        console.log("=================================");

    }
}

class HomemAranha extends Heroi {
    atacar(): void {
        console.log(`${this.nome} lançou teias no inimigo.`);
    }

    defender(): void {
        console.log(`${this.nome} desviou usando o sentido aranha`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 20){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 20;
        console.log(`${this.nome} usou teia gigante`)
    }
}

class Batalha {
    constructor(
        public heroi1: Heroi,
        public heroi2: Heroi
    ){}

    iniciarBatalha(): void {
        console.log("🏆 A batalha começou");
        console.log(`${this.heroi1.nome} vs ${this.heroi2.nome}`);

        console.log("\nRodada1");
        this.heroi1.atacar();
        this.heroi2.receberDano(10);
        console.log(`${this.heroi2.nome} recebeu 10 de dano`);
        this.heroi2.defender();

        console.log("\nRodada2");
        this.heroi2.atacar();
        console.log(`${this.heroi1.nome} recebeu 15 de dano`);
        this.heroi1.defender();

        console.log("\nRodada3");
        this.heroi1.usarPoderEspeciar();
        this.heroi2.receberDano(30);
        console.log(`${this.heroi2.nome} recebeu 30 de dano`);
        this.heroi2.usarPoderEspeciar();
        this.heroi1.receberDano(25);
        console.log(`${this.heroi1.nome} recebeu 25 d dano`);

        console.log("\nStatus Final:");
        this.heroi1.exibirStatus();
        this.heroi2.exibirStatus();
        
        this.exibirVencedor();
    }

    exibirVencedor(): void{
        if(this.heroi1.estaVivo() && !this.heroi2.estaVivo()){
            console.log(`🏆${this.heroi1.nome} venceu a batalha`);
        } else if(!this.heroi1.estaVivo() && this.heroi2.estaVivo()){
            console.log(`🏆${this.heroi2.nome} venceu a batalha`);
        } else if(!this.heroi1.estaVivo() && !this.heroi2.estaVivo()){
            console.log("A batalha terminou empatada!");
        } else{
            console.log("A batalha ainda esta em andamento!");
        }
    }


}

class Batman extends Heroi {
    atacar(): void {
        console.log(`${this.nome} lança uma sequencia de golpes de artes marciais`);
    }

    defender(): void {
        console.log(`${this.nome} ergue sua capa reforçada, reduzindo o dano recebido`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 15){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 15;
        console.log(`${this.nome} invoca o Batmovel para um ataque devastador em area`)
    }
}

class Superman extends Heroi {
    atacar(): void {
        console.log(`${this.nome} dispara sua visao de calor, causando alto dano`);
    }

    defender(): void {
        console.log(`${this.nome} bloqueia o ataque com seu corpo de aço`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 20){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 20;
        console.log(`${this.nome} absorve energia do sol`)
    }
}

class Homemdeferro extends Heroi {
    atacar(): void {
        console.log(`${this.nome} dispara um lazer de alta potencia`);
    }

    defender(): void {
        console.log(`${this.nome} ativa um escudo de energia`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 10){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 10;
        console.log(`${this.nome} lança drones da armadura para atacar os inimigos`)
    }
}

class Viuvanegra extends Heroi {
    atacar(): void {
        console.log(`${this.nome} usa seu bastão eletrico`);
    }

    defender(): void {
        console.log(`${this.nome} entra em posição de esquiva rapida`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 20){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 20;
        console.log(`${this.nome} executa o seu golpe fatal`)
    }
}

class Feiticeiraescarlate extends Heroi {
    atacar(): void {
        console.log(`${this.nome} manipula a magia do caos`);
    }

    defender(): void {
        console.log(`${this.nome} conjura um esucdo magico`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 15){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 15;
        console.log(`${this.nome} altera a realidade`)
    }
}

class Drmanhatan extends Heroi {
    atacar(): void {
        console.log(`${this.nome} controla particulas subatomicas`);
    }

    defender(): void {
        console.log(`${this.nome} recostroi seu proprio corpo`)
    }

    usarPoderEspeciar(): void {
        if(this.energia < 10){
            console.log(`${this.nome} nao tem energia suficiente`);
            return;
        }

        this.energia -= 10;
        console.log(`${this.nome} congela o tempo por um instante`)
    }
}

const homemAranha = new HomemAranha("Homem-Aranha", 100, 80);
const batman = new Batman("Batman", 120, 100);
const superman = new Superman("Superman", 150, 120);

/*homemAranha.exibirStatus();
batman.exibirStatus();
superman.exibirStatus();*/

const batalha1 = new Batalha(homemAranha, batman);
batalha1.iniciarBatalha();
