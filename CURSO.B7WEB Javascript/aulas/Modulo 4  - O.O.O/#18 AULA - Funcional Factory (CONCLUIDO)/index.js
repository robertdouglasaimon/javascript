/* Programação Funcional: Factory */

//Criando objetos apartir de funções. Para interação funcional e direta.

//Ao invés de criar um objeto para cada coisa, criamos uma função PAI GERAL (Uma factory) da raça, e atribuimos as várias as caracteristicas diferentes para cada individuo com base nos para metros da função pai, como demonstra o exemplo abaixo. Assim, podemos criar várias "Pessoas" sem a necessidade de criar um objeto para cada pessoa, levanto a um retrabalho desnecessario. Esse sem duvidas é o método mais eficaz e direto.

//SEGUE ABAIXO A ESTRUTURA PRINCIPAL PARA O FUNCIONAMENTO DO MESMO ⬇️

function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age 
  }
}

let person1 = createPerson('Robert', 'Douglas','30');
let person2 = createPerson('Érika', 'Wanessa','27');

console.log(person1.name);