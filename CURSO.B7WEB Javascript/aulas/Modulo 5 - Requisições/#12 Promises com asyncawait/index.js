async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();;
    alert(`Titulo do primeiro post: ${json[0].title}`);

    // .then((response) => {
    //     return response.json();
    //     })
    //     .then((json) => {
    //     alert(`Titulo do primeiro post: ${json[0].title}`);
    //     })
    //     .catch(() => {
    //         alert('Deu problema na requisição!');
    //     })

    alert('Clicou!');
}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
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
    });
let json = await response.json();

console.log(json);

    // .then((response) => {
    //     return response.json();
    // })
    // .then((json) => {
    //     console.log(json);
    // });
}


document.querySelector('#botao').addEventListener('click', clicou);

document.querySelector('#inserir').addEventListener('click', inserir);
