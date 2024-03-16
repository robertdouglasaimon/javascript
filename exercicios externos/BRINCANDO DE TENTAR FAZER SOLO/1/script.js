function comecar() {
    const nome = window.prompt('A Érika está online? Olhe o status no WhatsApp e responda a caixa abaixo com "Sim" ou "Não"🙇🏽');

    const msgSim = "E ai nega, como está? Como foi a semana? Tudo certo? Saudades de você. 😮💌";
    const msgSimRes = "Ta ONLINE!✔️ A gostosa ta online! Bora aproveitar! 😎💕";
    const msgNao = "Depois eu tento falar contigo, acho que você ta ocupada. Beijo pra ti pequena grande colosso!💞🤷🏻‍♂️";
    const msgNaoRes = "Ta OFFLINE❌. Não foi dessa vez jovem Jedi, a gostosa ainda continua desaparecida, foi triste.😔";

    if (nome && nome.toLowerCase() === "sim") {
        window.alert(msgSim);
        setTimeout(function() {
            let res = window.document.querySelector('.res');
            res.innerHTML = msgSimRes;
        }, 100);
    } else {
        window.alert(msgNao);
        setTimeout(function() {
            let res = window.document.querySelector('.res');
            res.innerHTML = msgNaoRes;
        }, 100);
    }

    // let res = window.document.querySelector('.res');
    // res.innerHTML = "";     
}