let char = criarPaladino('Douglas');
let  monster = MonstroMenor();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);