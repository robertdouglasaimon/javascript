/* 

4 - Calcule a porcentagem entre 2 números. 
Exemplo: 25% de 40 é 10.
Formula da porcentagem: (y / x) * 100

Uso da função:
let x = 40;
let y = 10;

console.log(`${pct}% de ${x} é ${y}.`;

*/

//Resposta:
let x = 40;
let y = 10;
let pct = calcPct(x, y);

function calcPct(x, y) {
    return (y / x) * 100;  
}

console.log(`${pct}% de ${x} é ${y}.`);