function carregar () {
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem') 
   var data = new Date()
   var hora = data.getHours() /*PARA BUSCAR A HORA REAL*/ 

   //var hora = /*PARA FORÇAR UMA HORA(USADO PARA TESTAR A FUNÇÃO)*/
   msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'assets/img/fotomanha.png';
        document.body.style.background = '#9CC1D9'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'assets/img/fototarde.png';
        document.body.style.background = '#F2C1AE'
    } else {
        // BOA NOITE!
        img.src = 'assets/img/fotonoite.png';
        document.body.style.background = '#312A40'
    }

}


