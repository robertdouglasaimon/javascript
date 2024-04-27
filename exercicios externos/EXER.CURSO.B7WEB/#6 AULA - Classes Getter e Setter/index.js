/*COMO ESTRUTURAR CLASSES "Getter" E "Setter" NO JS*/

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

//

class Pessoa {
    age = 0;
    steps = 0;


  constructor (name) {
      this.name = name;
  }

  darUmPasso() {
    this.steps++;
  }

  addAno(novaIdade) {
    if (typeof novaIdade == 'number'){
    this.age = novaIdade;
    }
  }
}

let pessoa1 = new Pessoa("João");
let pessoa2 = new Pessoa("Maria");
let pessoa3 = new Pessoa("Pedro");

pessoa1.addAno(20);
pessoa1.darUmPasso();

console.log(`Esse é ${pessoa1.name}, ele tem ${pessoa1.age} anos e deu ${pessoa1.steps} passos.`);

console.log(`Esse é ${pessoa2.name}, ele tem ${pessoa2.age} anos e deu ${pessoa2.steps} passos.`);


