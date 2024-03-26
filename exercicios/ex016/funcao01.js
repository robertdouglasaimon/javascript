// AULA DE FUNÇÕES!
//Exemplificando uma função com o exemplo do video da aula 16.

//EXEMPLO COM PAR E IMPAR

function parimpar(n) {
    if (n%2 == 0) { 
        return 'par'
    }

    //Se o "n" for divisivel(n % 2) por dois, e der resto zero "0", o bloco ira executar a condição "return 'par'.
     else { 
        return 'impar'

    // Se não (else) irá executar: "return 'impar'. 
    }
}

//CHAMADA para mostrar o RESULTADO. Ela sempre é obrigatoria quando se quer mostrar o que a função irá executar no seu resultado final.

let res = parimpar(11)

console.log(res) // Comando para mostrar no terminar o resultado. No caso aqui do exemplo, será IMPAR.

