let num = [5, 8, 2, 9, 3] // Váriavel composta =D (Famoso array)
num.push(1) // Metodo interno que acrescenta valores a um array.
num.sort() // Coloca a em ordem crescente os elementos do array.
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else { 
    console.log(`O valor 8 está na posição ${pos}`)
}




