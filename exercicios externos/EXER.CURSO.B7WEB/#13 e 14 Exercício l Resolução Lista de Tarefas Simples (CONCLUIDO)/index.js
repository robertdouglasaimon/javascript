//Elementos do HTML que foram puxados para usarmos no JS.
let input = document.querySelector('.input');
let lista = document.querySelector('#lista');

//Funções
function handleKeyUp (e) { 
  if(e.code === 'Enter') {
    //Adicionando uma nova LI na lista
    let novaLi = document.createElement('li');
    novaLi.innerHTML = input.value;
    lista.appendChild(novaLi);
    
    //Esvaziando a caixa após adicionar o evento
    input.value='';
  }
}

//Ouvindo o que o usuário está fazendo no teclado para poder executar a ação da função. Nesse caso aqui, a ação esperada era: Escrever algo e confirmar com ENTER para poder inserir na lista.
input.addEventListener('keyup', handleKeyUp);