/*COMO ESTRUTURAR E DEIXAR FUNCIONAL UMA INSTANCIA NO JS*/

//SEGEU ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DA MESMA ⬇️


class Pessoa {
  //   age = 0;
  // constructor (name) {
  //     this.name = name;
  // }

  constructor(name, age, year){
    this.name = name;
    this.age = age;
    this.year = year;
  }
}

let pessoa1 = new Pessoa("João", 20, 1996);
let pessoa2 = new Pessoa("Maria", 30, 1993);
let pessoa3 = new Pessoa("Pedro", 40, 1983);

console.log(`${pessoa1.name} tem ${pessoa1.age} anos e nasceu em ${pessoa1.year}.`)


// let pessoa1 = new Pessoa("João");
// let pessoa2 = new Pessoa("Maria");
// let pessoa3 = new Pessoa("Pedro");

// pessoa1.age = 20;

// console.log(`${pessoa1.name} tem ${pessoa1.age} anos.`);
// console.log(`${pessoa2.name} tem ${pessoa2.age} anos.`);
// console.log(`${pessoa3.name} tem ${pessoa3.age} anos.`);