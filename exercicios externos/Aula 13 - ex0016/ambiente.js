// DO

var c = 1
do {
    console.log(`Passo ${c}`); // Usando " `` " para poder fazer interpolação por placeholders (para poder usar o ${c} sem problemas, e para ele poder contar usando usando o "c" e o valor que será atribuido a ele, fazendo tipo uma contagem até chegar ao fim do looping).
    c++ // c = c + 1
} while (c <= 6) 