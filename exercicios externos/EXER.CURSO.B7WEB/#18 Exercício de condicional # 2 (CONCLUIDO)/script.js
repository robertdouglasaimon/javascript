//Subistitua o @ pela condicional correta para que o resultado seja TRUE ✅

let x = 10;
let y = 5;

console.log(x > y)

//Subistitua o @ pela condicional correta para que o resultado seja FALSE ✅
 
let w = "10";
let z = 10;

console.log(w === z);

//Subistitua o @ pela condicional correta para que o resultado seja TRUE ✅

let a = 10;
let b = 5;

console.log( a != b);

//Crie uma condicional para verificar se o preço da carne está barato ou caro. PS: Até 45 está barato. ❌

let preco = 40.3;
if (preco <= 45) {
  console.log(`Preço está valendo ${preco}, está barato!`);
} else {
  console.log(`Preço está valendo ${preco} está mais caro.`);
} 


//ANOTAÇÕES ------------------------------------------------

/* -  EXEMPLO DE TERNÁRIO NO JS -

let age = 60;
let isAdult = ((age >= 18 && age <= 60) ? 'Sim' : 'Não');

console.log(isAdult); */


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
 