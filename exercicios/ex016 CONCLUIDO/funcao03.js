//EXEMPLO ADICIONANDO UM FUNÇÃO A UMA VARIAVEL COMO PARAMETRO.

let v = function(x) {
    return x*2 
    
    //No exemplo eu to querendo saber qual é o dobro de x*2
}


console.log(v(5)) 

//Lembre-se, o valor do parametro externo "(v(5))" substitui o " function(x) " para "function(5)", e a função é ativada com o valor que foi adicionado no console.log. Logo, o calculo ficará return 5*2, que mostrará no terminal "10", pois, 5 x 2 = 10. Obviamente o terminal só mostrará o resultado final, mas esse é todo o procedimento descrito.
