/*function fatorial(n) {
    let cal = 1 

    for (let somar = n; somar > 1; somar--) {
        cal *= somar 
        
    }
    return cal 
}

console.log(fatorial(5));*/

// aqui fizemos um exercicio o qual o fatoria iria reseber uma valor e depois multibleca ate chegar no soma 
// usamos a multiblicaçao 

//5! = 5 x 4 x 3 x 2 x 1 = 120 tambem tem outra forma de fazer que e 

// aqui e chamado de recusividade
function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}
console.log(fatorial(5));

// da o mesmo  valor de cima 120