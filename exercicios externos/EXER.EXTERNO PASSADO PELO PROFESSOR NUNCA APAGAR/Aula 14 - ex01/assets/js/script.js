function contar() {
   let inicio = document.getElementById('txti');
   let fim = document.getElementById('txtf');
   let passo = document.getElementById('txtp');

   let res = document.getElementById('res')
    
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML= 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
        // SE (IF) o passo for menor ou igual a zero "p <= 0 ", vai disparar o alerta "window.alert('Passo inválido! Considerando PASSO1)" e vai fazer a contagem de acordo com o passo 1.
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
     }

        if (i < f) {
        //SE (IF) o valor do inicio for menor que o valor do final (i < f), ai ele vai executar o bloco de baixo.


            for(let c = i; c <= f; c += p) {
            // c - Representa a sigla de ''CONTADOR'' por isso o ''c'' antes do i. Esta dizendo que: A variavel C (contador), vai começar no inicio (i), e enquanto o "c" for menor ou igual (<=) ao fim (f), o contador vai receber ele mesmo mais o p (+= p).

         //Continuando o paramentro...
            res.innerHTML += `${c} \u{1F449} `
            // Então o resultado vai ser o que ele tem (res.innerHTML) mais (+= [lembrando que "+" não significa ADIÇÃO e sim CONCATENÇÃO/JUNÇÃO.]) o resultado que veio lá de cima da operação for, que no caso é o "c" Porém, ele vem entre crases pois usaremos o novo valor atribuido a ele e não o valor inicial, logo a string formatada: `${c}`. Por fim, adicionamos o \u{1F449} para colocar o emoji do dedo (lembrando que ele só funciona entre crases, logo, ele precisa tam em crases com outro elemento ou, craseado sozinho para rodar. Dá para colocar o emoji direto  "👉🏻" ou o código dele que é " `\u{1F449}`). RESUMINDO TUDO: Fazemos uma contagem CRESCENTE. 
            }

        } else {
            for (let c = i; c >= f; c -=p) {
             // c - Representa a sigla de ''CONTADOR'' por isso o ''c'' antes do i. Esta dizendo que: A variavel C (contador), vai começar no inicio (i), e enquanto o "c" for MAIOR ou IGUAL (>=) ao fim (f), o contador vai RETIRAR/PERDER o PASSO (-= p). Fazemos isso para caso onde: Se o inicio for 10, fim 0 e o passo for 1, o programa não mostrar só o emoji e não executar o raciocinio, pois, não terá ele especificado no codigo. Por isso fazemos o inverso e subitraimos, para nunca ficar sem valor de retorno no resultado. RESUMINDO TUDO: Fazemos uma contagem REGRESSIVA.
        


             // No mais, o resultado é só repetir a mesma coisa de anteriormente.
             res.innerHTML += `${c}\u{1F449}`  
            }
        }
        res.innerHTML += `🏁`
        //Para rodar o emoji da bandeira, repetimos o "res.innerHTML" só que FORA do parametro e nele atribuimos o valor da bandeira, entre crases obviamente, senão, não roda o emoji. Dá para colocar o emoji direto  "🏁" ou o código dele que é " `\u{1F3C1}` "
    }
}
