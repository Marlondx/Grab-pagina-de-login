var idade = 6

if (idade < 16) {
    console.log(`Com ${idade} anos nao e obrigadorio votar`)
} else if (idade >= 16 && idade < 18 || idade >= 65) {
    console.log(`Com ${idade} anos voto opicional `)
} else if (idade == 18) {
    console.log(`Maior de ${idade} anos voto obrigadorio`)
} else if (idade > 18) {
    console.log(`voce tem ${idade} anos No Brasil maios de 18 anos e obrigadorio o voto `)
}


