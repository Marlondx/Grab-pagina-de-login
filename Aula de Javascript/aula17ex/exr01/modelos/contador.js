
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let resultado = document.querySelector('div#res')

// var ini = Number(inicio.value)

function contador() {

    if (inicio.value.length == 0 || inicio.value == 0 || fim.value == 0) {
        alert('erro')
    }

    else {
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        if (ini < fi) {
            for (var cal = ini; cal <= fi; cal += pas) { // dentro do var vai uma variavel uma cotiçao e uma soma ou acresetimento 

                resultado.innerHTML += `${cal} \u{1F449} `// para colocar emoge	
            }
        }

        else {

            for (var cale = ini; cale >= fi; cale -= pas) {
                 resultado.innerHTML += `${cale} \u{1F449} `
            }
          
        }
    } resultado.innerHTML += `fim \u{1F3AF}` 

}