/*COMO ESTRUTURAR E DEIXAR FUNCIONAL UM "ACTION" NO JS*/

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

//NO EXEMPLO ABAIXO ESTAMOS PARAMETRANDO "steps",  que serão passos para o "this", que no caso são as pessoas "João, Maria e Pedro"

class Pessoa {
    age = 0;
    steps = 0;


  constructor (name) {
      this.name = name;
  }

  //Apos referenciar lá em cima, criamos uma váriavel que representará a ação de this (as pessoas), que no caso aqui seria a ação de '' aumentar a idade e dar um passo ''.
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

// E aqui, após programarmos ação lá em cima, ativamos e chamamos ela aqui embaixo para ela acontecer ⬇️
pessoa1.addAno(20);
pessoa1.darUmPasso();

console.log(`Esse é ${pessoa1.name}, ele tem ${pessoa1.age} anos e deu ${pessoa1.steps} passos.`);

console.log(`Esse é ${pessoa2.name}, ele tem ${pessoa2.age} anos e deu ${pessoa2.steps} passos.`);


