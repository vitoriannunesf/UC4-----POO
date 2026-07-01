class Heroi {
    atacar(): void {
        console.log("Ataque comum");
    }
}

class HomemAranha extends Heroi {
    atacar(): void {
        console.log("Lançou telas!");
    }
}

class Hulk extends Heroi {
    atacar(): void {
        console.log("Esmagou tudo!");
    }
}

const h1 = new HomemAranha();
const h2 = new Hulk();

/*h1.atacar();
h2.atacar();*/

interface Vingador {
    atacar(): void;
    defender(): void;
}

class Thor implements Vingador {

  atacar(): void {
    console.log("Raio de Asgard!");
  }

  defender(): void {
    console.log("Girou o martelo!");
  }

}

const h3 = new Thor();
h3.atacar();
h3.defender();
