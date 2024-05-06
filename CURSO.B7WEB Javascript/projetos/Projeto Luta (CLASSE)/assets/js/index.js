let log = new Log(document.querySelector('.log'));

let char = new Paladino('Douglas');
let monster = new MonstroMaior();

let stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);    

stage.start();