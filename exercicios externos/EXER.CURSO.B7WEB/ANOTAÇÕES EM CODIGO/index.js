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

/*
PRATICANDO OBJETOS UM POUCO MAIS E COM UM POUCO MAIS DE COMPLEXIDADE =D

let personagem = {
  nome: 'Douglas',
  idade: 90,
  carros: [
    {modelo:'Fiat', cor:'preto'},
    {modelo: 'Ferrari', cor: 'vermelho'}
  ]
}

console.log(personagem.carros[1].modelo);

*/

/* FUNÇÃO DENTRO DE OBJETO --------------------------------//

let pessoa = {
    nome:'Robert',
    sobrenome:'Douglas',
    idade: 90,
    nomeCompleto: function() { // Função dentro do objeto.
    return `${this.nome} ${this.sobrenome}`; // "This" acessa o proprio objeto.
  }
}

console.log(pessoa.nomeCompleto()); //Por fim, usando ''this'' ele pega o nome, pega o sobre nome, concatena e forma o nome completo, ou frase ou seja lá o que você queira fazer no template string. Aqui no caso ele formou o nome completo ''Robert Douglas''.

-----------------------------------------------------------*/





/*-------------------------------------------------------//
O FOR (lOOPING FOR)

//O Loop é um conjunto de parametros que servem para criar um ciclo infinito (Ou repetitivo até certo ponto de alguma atividade especifica) de alguma atividade.

//No caso do FOR: Enquanto for TRUE e a condição estiver sendo satisfeita, ele continuará executando. Enquanto for TRUE, ele rodará até.. Ou o parametro acabar ou até o infinito.

//O LOOP FOR é compostos de 3 condicionais que são:
// A VARIAVEL / A CONDIÇÃO / O INCREMENTO.
for (let n = 1; n <= 10; n++ ) {
  console.log('Número ' + n);
}

-------------------------------------------------------*/

/*--------------------------------------------------------//
DANDO LOOP EM ARRAYS

let cores = ['preto','branco','azul','vermelho'];
cores.push('verde')

/*
Metodo tradicional de fazer looping em array.

for (let n = 0; n < cores.length; n++ ) {
  console.log(cores[n]);
}



/*
Metodo INTELIGENTE de fazer looping com array. Aqui usamos as "chaves" das cores como valor para o [i] e fazemos o looping.

for(let i in cores) {
  console.log(cores[i]);
}


// Metodo INTELIGENTE de fazer looping com array. Exatamente igual ao anterior, aqui só muda que estamos usando os objetos, as cores ''cores'' em sí como valor para [i].

for (let cor of cores) {
  console.log(cor);
}
//AMBOS são a mesma coisa, mas usando tecnicas diferentes.

*/



// AGORA VAMOS ULTILIZAR ESSE CONHECIMENTO DE LOOPING DENTRO DE UM ARRAY MAIS ELABORADO:

/*
let cores = [
    {nome:'preto', qt: 10},
    {nome:'azul', qt: 5},
    {nome:'vermelho', qt: 15},
];
*/

/*
//Metodo tradicional de fazer looping em array.

for (let n = 0; n < cores.length; n++ ) {
  console.log(cores[n].nome);
}
*/

/*
//Metodo INTELIGENTE de fazer looping com array. Aqui usamos as "chaves" das cores como valor para o [i] e fazemos o looping.

for(let i in cores) {
  console.log(cores[i].nome);
}
*/

/* 
//Metodo INTELIGENTE de fazer looping com array. Exatamente igual ao anterior, aqui só muda que estamos usando os objetos, as cores ''cores'' em sí como valor para [i].

for (let cor of cores) { 
  console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}


//USANDO LOOPING PARA ALTERAR ALGUMA INFORMAÇÃO:
let cores = [
  {nome:'preto', qt: 10},
  {nome:'azul', qt: 5},
  {nome:'vermelho', qt: 15},
];

for(let i in cores) { //Por exemplo, colocando os nomes das cores em maiusculo.
  cores[i].nome = cores[i].nome.toUpperCase();
  console.log(cores[i].nome);
}

*/

/*-------------------------------------------------------*/

/*WHILE (LOOPING WHILE) --------------------------------*/
//Enquanto a condição estiver sendo satisfeita, ele continuará executando. Enquanto for TRUE, ele rodará até.. Ou o parametro acabar ou até o infinito.

let numero = 0
while (numero <= 10) {
  console.log(`O número da vez é ${numero}!`);
  numero++;
}