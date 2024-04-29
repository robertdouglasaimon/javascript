/*COMO ESTRUTURAR CLASSES "Getter" E "Setter" NO JS*/

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

//

class Pessoa {
    _age = 10; /*GETTER*/
    steps = 0;
  

  constructor (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  darUmPasso() {
    this.steps++;
  }

  get fullName() { /*GETTER*/
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {  /*GETTER*/
    return this._age; 
  }


  set age(x) { /*Setter*/
    if (typeof x === 'number') {
      this._age = x;
    }
  }

}

let pessoa1 = new Pessoa("João","Silva");
let pessoa2 = new Pessoa("Maria", "Sousa");
let pessoa3 = new Pessoa("Pedro", "Feitosa");


pessoa1.age = 30; /*Setter*/
console.log(`Esse é ${pessoa1.fullName}, ele tem ${pessoa1.age} anos.`);