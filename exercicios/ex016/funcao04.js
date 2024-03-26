//Fazendo o fatorial de 5. Abaixo segue o calculo comentado na matématica normal, e em seguida, como será feito no Javascript.

// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))