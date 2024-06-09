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
            // console.log(error); Para saber qual erro aconteceu especificamente no console.
        })
        .finally(() => {
            alert('Opa, acabou tudo!');
        });
}

document.querySelector('#botao').addEventListener('click', clicou);


