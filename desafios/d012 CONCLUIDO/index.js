function verificar () {
    let pAnterior =  parseFloat(window.prompt('Qual era o preço anterior do produto?'));
    let pAtual = parseFloat(window.prompt('Qual é o preço atual do produto?'));

    if(isNaN(pAnterior)|| isNaN(pAtual)) {
        alert('Por favor , insira valores numéricos válidos.')
        return;
    }

 // Calcula a diferença de preço
    let diferenca = pAtual - pAnterior;
    let percentual = (Math.abs(diferenca) / pAnterior) * 100;


    let mensagem;
    if(diferenca > 0) {
        mensagem = `O produto custava R$${pAnterior.toFixed(2).replace('.', ',')} e agora custa R$${pAtual.toFixed(2).replace('.', ',')}. <br><br>
        Hoje o produto está mais caro. <br><br>
        O preço subiu R$${Math.abs(diferenca).toFixed(2).replace('.', ',')} em relação ao preço anterior. <br><br>
        Uma variação de ${percentual.toFixed(2)}% para cima`;
    } else if (diferenca < 0){
        mensagem = `O produto custava R$${pAnterior.toFixed(2).replace('.', ',')} e agora custa R$${pAtual.toFixed(2).replace('.', ',')}. <br><br>
        Hoje o produto está mais barato. <br><br>
        O preço caiu R$${Math.abs(diferenca).toFixed(2).replace('.', ',')} em relação ao preço anterior. <br><br>
        Uma variação de ${percentual.toFixed(2)}% para cima`;
    } else {
        mensagem = 'O preço permaneceu o mesmo.';
    }

    // Atualiza a interface com o resultado
    document.querySelector('.res').innerHTML = mensagem;
}