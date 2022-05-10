
function rodar() { 
    var img = document.getElementById('fotos')
    var texto = document.getElementById('txt')
    var hora = new Date()
    var horas = hora.getHours()
    var minutos = hora.getMinutes()
    var mudacor = document.getElementById('mudacor')
    
    
    
    if (horas < 12 && horas > 0 ) {
        texto.innerHTML = (`<h2>Bom dia São ${horas} horas e ${minutos} minutos</h2>`)
        texto.style.textAlign = 'center'
        texto.style.marginBottom = '30px'
        mudacor.style.background = 'rgba(230, 213, 65, 0.842)'
        mudacor.style.color='black'
        img.src = "imagem/bomdia1.png "
        
    }
    else if ( horas < 18 && horas >=12 ){
        texto.innerHTML = (`<h2> Boa tarde São ${horas} horas e ${minutos} minutos </h2>`)
        img.src = 'imagem/boatarde1.png'
        mudacor.style.background = 'rgba(87, 23, 23, 0.603'
    }
    else{
        texto.innerHTML = (`<h2> Boa noite Agora são ${horas} horas e ${minutos} minutos tenha um bom descanso </h2>` )
        img.src = 'imagem/boanoite1.png'
        mudacor.style.background = 'rgba(0, 0, 0, 888.7)'
    }
                                                                                                                         
}