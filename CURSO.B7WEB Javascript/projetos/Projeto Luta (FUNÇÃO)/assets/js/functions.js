let char = criarPaladino('Douglas');
let  monster = MonstroMaior();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);