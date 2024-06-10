function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
        return response.json();
        })
        .then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        .catch(() => {
            alert('Deu problema na requisição!');
        })
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo teste',
                id: 101,
                userId: 2
            })
    })
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}


document.querySelector('#botao').addEventListener('click', clicou);

document.querySelector('#inserir').addEventListener('click', inserir);
