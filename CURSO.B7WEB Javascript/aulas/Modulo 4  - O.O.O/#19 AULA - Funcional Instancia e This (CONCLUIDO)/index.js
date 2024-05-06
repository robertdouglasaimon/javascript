/* Programação Funcional: Instância e This*/

//

function createPerson(name, lastName, age) {
    return {
      name,
      lastName,
      age,
      getFullName() {
        return `${this.name} ${this.lastName}`;
      }
    }
}


let person1 = createPerson('Robert','Douglas', 30);
let person2 = createPerson('Érika','Wanessa', 27);

console.log(person1.getFullName());