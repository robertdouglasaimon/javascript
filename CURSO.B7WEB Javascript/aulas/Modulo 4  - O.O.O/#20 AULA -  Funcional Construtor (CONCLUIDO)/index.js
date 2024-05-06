/* Programação Funcional: Construtor*/

//

function createPerson(name, lastName, age) {
    return {
      name,
      lastName,
      age,

      getFullName() {
        return `${this.name} ${this.lastName}`;
      },

      start() {
        console.log('Deu start na pessoa');
      }

    }
}


let person1 = createPerson('Robert','Douglas', 30);
let person2 = createPerson('Érika','Wanessa', 27);

person1.start(); // Botstrap 

console.log(person1.getFullName());