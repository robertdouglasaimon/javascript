//1. No array abaixo, qual o número que pega a Ferrari?
 //Resposta:
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1
console.log('1. ' + carros[1]);

//2. Troque a Ferrari por Audi
//Resposta:

/*  OPÇÃO 1 = ADICIONAR O AUDI COM PUSH, TROCAR A FERRARI E O AUDI DE POSIÇÃO E DEPOIS APAGAR A FERRARI:

carros.push('Audi');

// Trocar 'Audi' com 'Ferrari'
let posiAudi = carros.indexOf('Audi'); // Encontra a posição de 'Audi'
let posiFerrari = carros.indexOf('Ferrari'); // Encontra a posição de 'Ferrari'

let temp = carros[posiAudi];

    carros[posiAudi] = carros[posiFerrari];
    carros[posiFerrari] = temp;

carros.pop(); //APAGA a Ferrari que agora está em último.

*/

// OPÇÃO 2 = SUBSTITUIR o valor da Ferrari pelo valor do Audi usando "carros[1] = 'Audi'; assim, substituindo o que ta em 1 pela entrada que eu escolher, que no caso é o Audi.

carros[1] = 'Audi';
console.log('2. Lista com Audi:');
console.log(carros);


//3. Adicione a Volvo a lista
//Resposta:

carros.push('Volvo');

console.log('3. Lista com Volvo:');
console.log(carros);


//4. Exiba quantos itens tem no array
//Resposta:
console.log('4. itens no array')
console.log(`Total de itens no Array: ${carros.length}`)