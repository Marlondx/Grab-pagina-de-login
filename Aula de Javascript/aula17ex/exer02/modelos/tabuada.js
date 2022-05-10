function tabu() {
    // parti de chamada de id trasfromando e variavel
    var nume = document.getElementById('nume')
    let tabua = document.getElementById('sel')
    
    // para dar o erro se a pessoa nao digita nada
    if (nume.value.length == 0) {
        alert('erro meu camarada')
    }
    else {  // aqui a trasformaçao da string e numero
        let n = Number(nume.value)
        let c = 1
        tabua.innerHTML = '' // para atualizar a pagina e nao fica uma coisa em cima da outra 
        
        // aqui esta o nosso conjuto de repedizao assim fazendo a tabuada de x
        while (c <= 10) {
            var vr = document.createElement('Option')
            vr.text = `${n} x ${c} = ${n * c}`
            tabua.appendChild(vr)
            //pegando a variavel c e colocando mais ++ 
            c++
        }
    }
}