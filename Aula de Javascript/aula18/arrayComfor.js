let aiv = [0,1,5,8,6]
//a mais cansaativa de fazer 
console.log(aiv[0])
console.log(aiv[1])
console.log(aiv[2])
console.log(aiv[3])
console.log(aiv[4])
console.log(aiv[5])

// esse a maneira mais facil em fez de ficar escrevendo um por um 
for (var ler = 0 ; ler < aiv.length; ler ++){
    console.log(`aqui a a pociçao ${ler} e depois as variaveis ${aiv[ler]}`)
}


// mais facil de resolver do que as de cima 

for (var ler in aiv){
    console.log(`aqui a a pociçao ${ler} e depois as variaveis ${aiv[ler]}`)
}