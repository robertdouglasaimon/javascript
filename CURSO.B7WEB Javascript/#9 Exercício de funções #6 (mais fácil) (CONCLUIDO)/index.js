/*
Crie uma função que valide usuário e senha.

Usuario correto: douglas
Senha correta: 123
*/

//Uso da função:
function validar(usuario, senha) {
if (usuario === 'pedro' && senha == !isNaN || senha === '123') {
    return true;
} else {
    return false;
    }
}

let usuario = 'douglas';
let senha = '1234';
let validacao = validar(usuario, senha);
if(validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!'); 
}
