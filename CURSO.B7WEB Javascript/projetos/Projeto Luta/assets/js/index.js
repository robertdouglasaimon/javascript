let char = new Cavaleiro('Douglas');
let monster = new MonstroMenor();

let stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);    

stage.start();