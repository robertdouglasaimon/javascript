/*COMO ESTRUTURAR CLASSES "Classes Variavel Metodo Estatico" NO JS*/

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

//

class Pessoa {

  static hands = 2;
  age = 10; 
  
  constructor (name) {
      this.name = name;
  }

  static sayHi(){
    console.log(`Oi`);
  }

}


let pessoa1 = new Pessoa ("Douglas");
Pessoa.sayHi();

// console.log(`${pessoa1.name} tem ${Pessoa.hands} mãos.`);