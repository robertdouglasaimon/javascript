/*COMO ESTRUTURAR CLASSES "Classes: Herança" NO JS*/

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

//

class Pessoa {

  age = 10; 
  
  constructor (name) {
      this.name = name;
  }

  sayHi() {
    console.log(`${this.name} diz "Oi!". `)
  }

}

class Estudante extends Pessoa {
        
    constructor(name, id) {
      super (name); // "super()" - refere-se sempre ao PAI, no caso do nosso exemplo aqui, o "Pessoa". Eles está acessando "Pessoa" para pegar a propriedade "name" para usar em "Estudante".

      this.id = id;
    }

}

let pessoa1 = new Estudante ("Robert", 1);
pessoa1.age = 31;

let pessoa2 = new Estudante ("Érika", 2) 
pessoa2.age = 27

// A nova variável "pessoa2" consegue também acessar as propriedades que "pessoa1", pois, como ela é "Estudante" ela tem acesso as propriedades do PAI que é "Pessoa" e consegue acessar "age" e "name". E isso se aplicará a toda nova variável que for atribuida com a classe "Estudante", facilitando a adição ou modificações de informações, com base na conexão pai e filho feita aqui.


pessoa1.sayHi();  // Assim como elementos, dá para herdar funções inteiras também de outra classe. Aqui no exemplo criamos a "sayHi" para demonstrar isso.

console.log(`${pessoa1.name} tem ${pessoa1.age} anos e matricula #${pessoa1.id}.`);

console.log(`${pessoa2.name} tem ${pessoa2.age} anos e matricula #${pessoa2.id}.`);


//Observação importante sobre funções e funções herdadas: O que você cria na função principal SEMPRE VAI SOBREESCREVER o que está na função que foi "puxada/herdada". É regra.