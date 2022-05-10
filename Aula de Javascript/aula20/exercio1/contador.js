
let inicio = document.getElementById('numer')
let list = document.getElementById('list')
let res = document.querySelector('div#res')
let valores = []// usando o array

function esNumero(n) {
    if (Number(n) >= 1 && Number(n) < 101) {
        return true
    } else {
        return false
    }
}

function esaLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }
}

function adicionar() {
    if (esNumero(inicio.value) && !esaLista(inicio.value, valores)) { // nesse aqui colocamos a açao e depois chamamos ele encima 
        valores.push(Number(inicio.value)) // pesquisar sobre push para acrecenta objeto na array
        let operador = document.createElement('option')// acabamos de criar uma obejeto para lida chamado operador 
        operador.text = `valor ${inicio.value} foi adicionado ` // estamos usando o operador 
        list.appendChild(operador) // aqui o operador vfoi adicionado a lista
        res.innerHTML = ''
    } else {
        alert(' valor nao encontrado na lista ou nao existe ')
    }
    inicio.value = ''
    inicio.focus()
}


function finalizar() {
    if (valores.length == 0) {
        alert('Erro adiciona um valor preacha o valos')

    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        var media = 0
        for ( let posi in valores){ // esse e um laço de percuso   pequeçar mais sobre essa formaçao o in 
            soma += valores[posi]
            if (valores[posi] > maior) {
                maior = valores[posi]
            }
            if (valores[posi] < menor ){
                menor = valores[posi]
            }
        }
        media = soma / total // aqui e o qualculo da media com a soma 
        res.innerHTML = '' // para limpar 
        res.innerHTML += ` <p>a total temos  ${total} valores prenchido </p>`
        res.innerHTML += `<p>o mair valor é  ${maior}</p>` // lenbrado += e para escrever em mais uma linha sem apagar 
        res.innerHTML += `<p>o menor valor e ${menor}</p>`
        res.innerHTML += ` <p>a somo de todos os valors e ${soma}`
        res.innerHTML += ` <p>a media dos valores digitados e ${media}`
    }

}

                                         