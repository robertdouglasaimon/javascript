//Elementos do HTML que foram puxados para usarmos no JS.
let caixaDeTexto = document.querySelector('.caixaDeTexto');
let lista = document.querySelector('#lista');


function adicionarTarefa (e) { 
  if(e.code === 'Enter') {
    //Adicionando uma nova LI na lista
    let novaLi = document.createElement('li');
    novaLi.innerHTML = caixaDeTexto.value;
    lista.appendChild(novaLi);
    

    caixaDeTexto.value=''; //Esvaziando a caixa após adicionar o evento
  }
}

//Ouvindo o que o usuário está fazendo no teclado para poder executar a ação da função.

caixaDeTexto.addEventListener('keyup', adicionarTarefa);