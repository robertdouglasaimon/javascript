//https://jsonplaceholder.typicode.com/posts

async function lerPostagens() {
    let areaDaPostagem = document.querySelector('.posts');
    areaDaPostagem.innerHTML = 'Carregando...';

    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await resposta.json();
    console.table(json)
    
    if(json.length > 0 ) {
        areaDaPostagem.innerHTML = '';

        // //Com for tradicional
        // for(let postagem in json) {
        //     let postHtml = `
        //     <div>
        //         <h1>${json[postagem].title}</h1>
        //         <p>${json[postagem].body}</p>
        //         <hr/>
        //     </div>
        //     `
        //     areaDaPostagem.innerHTML += postHtml
        // }

        //Com forEach
        json.forEach((postagem) => {
            let postHtml = `
            <div>
                <h1>${postagem.title}</h1>
                <p>${postagem.body}</p>
                <hr/>
            </div>
            `
            areaDaPostagem.innerHTML += postHtml
        });

    } else {
        areaDaPostagem.innerHTML = ' Nenhum post para exibir.';
    }
};

async function addNewPost(title, body) {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
        }
    );

    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    lerPostagens();
}


document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

   if(title && body ) {
     addNewPost(title, body);
   } else {
    alert('Preencha todos os campos.');
   }
});



lerPostagens();