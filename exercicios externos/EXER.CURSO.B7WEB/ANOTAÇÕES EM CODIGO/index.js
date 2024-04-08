//ANOTAÇÕES ------------------------------------------------


// - FUNÇÃO COM RETORNO CONDICIONAL -
/*
function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 18;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    console.log('É maior de idade');
} else {
    console.log('É menor de idade');
}
*/





/* 

-  EXEMPLO DE TERNÁRIO NO JS -

let age = 60;
let isAdult = ((age >= 18 && age <= 60) ? 'Sim' : 'Não');

console.log(isAdult); 

*/


//-----------------------------------------------------------

/*

ABAIXO ESTÁ UMA BRINCADEIRA QUE EU FIZ A PARTE DO EXERCICIOS, SÓ PARA MATAR A CURIOSIDADE. O MAIS IMPORTANTE É OS EXERCICIOS ACIMA!

let local1 = "Casa";
let local2 = "Bonita";

function casa() {
  let nome = window.prompt('Qual é o seu nome?');
  if (nome === '' || typeof nome == 'Number' || isNaN(nome)) {
    window.alert(`Olá ${nome}! Boa Noite! Sua ${local1} é muito ${local2}!`);
  } else  {
    window.alert('Nome inválido aperte F5 e tente novamente com um nome válido!');
  }
 }

 */

 //-----------------------------------------------------------

 /*
 
 Arrow Function ---------------------//

 const somar = (x, y) => {
     return x + y;
}

console.log(somar(10, 5));

*/


 //FUNÇÃO COM PARAMETROS (FORMA COMO O BONIEKE TA ENSINANDO)
 
 /*
 
 let a = 10
 let b = 5
 let resultado = somar(a, b);

 function somar(x, y) {
  return x + y;  
}

console.log(`Resultado da soma com parâmetros:" ${a} + ${b} = ${resultado}`);

*/


//FUNÇÃO SEM PARAMETROS (FORMA COMO O GUANABARA ENSINOU)

/* 

let c = 5
let d = 5

function soma1() {
  let resultado = c + d;
  return resultado;
}

console.log(`Resultado da soma sem parâmetros:" ${a} + ${b} = ${resultado}`);

*/

/* FUNÇÕES DENTRO DE FUNÇÕES --------------------------------//

function addSquares(a, b) {   <-- função global
  const square = (x) => {     <-- arrow  function
   return x * x;  
  }

  let sqrA = square(a);
  let sqrB = square(b);
  return  sqrA + sqrB;
}

console.log(addSquares(3, 2));

// Evitar fazer funções normais dentro de função, para manter o código limpo, o ideal para manter as coisas organizadas é fazer um ARROW FUNCTION dentro da FUNCTION, caso haja necessidade de fazer uma function dentro da outra, pois, mantém o código organizado e limpo. E consome menos memória obviamente.

*/



// INTRODUÇÃO AO ARRAY  -------------------------------------------------------------------------------------------//

/*
 ID DO ARRAY      0       1       2       <--- (A CONTAGEM DOS ITENS DENTRO DO ARRAY SEMPRE SE INICIA EM 0!)
  let colors = ['blue', 'red', 'green'];

 console.log(colors);


ARRAY DENTRO DE UM ARRAY-----------------
let lista = ['bla-bla-bla', ['xx','yy']];  (PROCESSO NORMAL.)


let lista = [   (PROCESSO ORGANIZADO IGUAL A UMA FUNÇÃO, PARA FACILITAR A VISUALIZAÇÃO.)
  'bla-bla-bla', 
  ['xx','yy']
]; 

console.log(lista [1][1]);


Explicando a operação detalhadamente: 
Aqui a coisa complica um pouco pois: Para acessar o ''xx'' detro do segundo array, primeiro acessamos o segundo array paramentrando lista [1] no console, pois lembre-se, os ID's de um array começam do 0 até o ultimo numero do ultimo elementro dentro dele, logo, aqui colocamos [1] para acessar o "xx" do SEGUNDO array. E por fim, já dentro do SEGUNDO array, caso quisermos acessar o ''yy'' muda a abordagem, pois, já dentro do segundo array a contagem de ID's recomeça, logo, o ''yy'' do segundo array será o numero [1] visto que no segundo array a contagem inicial ''0'' seria o ''xx''. Logo, colocamos o ID [1] para acessar o segundo array e escolher ''xx'' e em seguida [1]
novamente para acessar ''yy'' do SEGUNDO ARRAY :)

Sobre os processos acima: AMBOS SÃO A MESMA COISA, só mudei a forma visual de ver para manter a organização mesmo dentro do código.

-----------------------------------------------------------*/
/*
//OPERAÇÕES BÁSICAS DE ARRAY
let ingredientes = [
  'agua',
  'farinha',
  'ovo',
  'corante',
  'sal'
];


ingredientes.shift(); // REMOVE O PRIMEIRO ITEM DO ARRAY. No caso aqui, vai remover a agua.

ingredientes.pop(); // REMOVE O ULTIMO ITEM DO ARRAY. No caso aqui, vai remover o ''sal'' se deixar ativada.

// ADICIONANDO MAIS ITENS NO ARRAY (deve se colocar a adição antes do log para ela ser feita a lista!)

ingredientes.push('cebola'); // <-- Comando MAIS INDICADO para adição de itens a um Array.

//  ingredientes [5] = 'cebola'; <-- Comando NÃO POPULAR para adição da cebola ao Array.


console.log(ingredientes)
console.log(`Total de ingredientes:  ${ingredientes.length}`); // .length - Usado para puxar a contagem dos itens dentro do Array. Isso inclui os itens  já existente e os itens adicionados depois.

*/

/* 

OBJETO - JAVASCRIPT
//Exemplo de objeto no JS:
let personagem = { // Objeto principal.
  nome: 'Douglas',
  idade: 90,
  pais: 'Brasil',
  olhos:['preto','azul'], // Um array dentro de um objeto.
  caracteristicas: { // Um objeto dentro de um objeto.
    forca: 20,
    magia: 5,
    stamina: 15
  }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.caracteristicas.magia) //Chamando um objeto dentro de um objeto.
console.log(personagem.olhos[1]) // Chamando um array e seus atributos dentro de um objeto.


// Adicionando atributos a um objeto ou ao seus filhos.   
//Por exemplo:
let personagem = { 
  nome: 'Douglas',
  idade: 90,
  pais: 'Brasil',
  olhos:['preto','azul'], 
  caracteristicas: { 
    forca: 20,
    magia: 5,
    stamina: 15
  }
}

personagem.nome = 'Pedro'; //Modifica o atributo 'Douglas' para 'Pedro' que está dentro do objeto principal.
personagem.caracteristicas.forca += 5; //Aumentou +5 de força do atributo força dentro do segundo objeto que está dentro do objeto.
personagem.olhos.push('verde'); //Adicionou mais um olho ao ARRAY dentro do objeto.
console.log(personagem.olhos);

*/

let personagem = {
  nome: 'Douglas',
  idade: 90,
  carros: [
    {modelo:'Fiat', cor:'preto'},
    {modelo: 'Ferrari', cor: 'vermelho'}
  ]
}

personagem.carros[1].cor 
