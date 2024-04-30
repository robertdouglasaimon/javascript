/*COMO ESTRUTURAR CLASSES "Classes: Factory" NO JS*/

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

//

//    Person
class Pessoa {

  age = 10; 
  
  constructor (name) {
      this.name = name;
  }

}
//       createPerson
function criarPessoa(name, age) {
    let p = new Pessoa(name);
    p.age = age;
    return p;
}

let p1 = criarPessoa('Robert', 30);
console.log(`${p1.name} tem ${p1.age} anos.`)







// let pessoa1 = new Pessoa ("Douglas");
// pessoa1.sayHi();

// console.log(`${pessoa1.name}.`);