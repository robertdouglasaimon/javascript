function verificar() {
    var data = new Date() // Pega a data atual.
    var ano = data.getFullYear() // Pega o ano atual.
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10 ) {
                // Criança
                img.setAttribute('src', 'assets/img/bebeh.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'assets/img/jovemh.png');
            } else if (idade < 50) {
                // Aulto
                img.setAttribute('src', 'assets/img/adultoh.png');
            } else {
                // Idoso
                img.setAttribute('src', 'assets/img/idosoh.png');
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10 ){
                // Criança
                img.setAttribute('src', 'assets/img/bebem.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'assets/img/jovemm.png');
            } else if (idade < 50) {
                // Aulto
                img.setAttribute('src', 'assets/img/adultom.png');
            } else {
                // Idoso
                img.setAttribute('src', 'assets/img/idosom.png');
            }
        }
        res.style.textAlign = 'center'
        img.style.margin = 'auto'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}