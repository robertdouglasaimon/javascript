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

