function ativar(){
var ano = document.getElementById('an')
var data = new Date()
var andata = data.getFullYear()
var res = document.getElementById('resultado')
var img2 = document.getElementById('foto')
var img = document.createElement ('img') // aqui e para criar um elemento
    img.setAttribute('id','foto') // para colocar um id
    if (ano.value.length == 0 || Number(ano.value) > andata){
        alert ('Erro não foi encontrado sua idade digite sua tada de nacimento ')
    }
      else {
          var sex = document.getElementsByName('sexo')
          calculo = andata - Number(ano.value)
          var genero = ''

          if (sex[0].checked) {
              genero = 'Masculino'
              if (calculo > 0 && calculo < 10)  {

                  img2.src = 'imagem/bomdia1.png'

              }

              else if (calculo < 25 ) {
                  img2.src = 'imagem/boatarde1.png'
              }
              
             
          }
          else if (sex[1].checked){
              genero = 'Femenino'

              if (calculo > 0 && calculo < 10) {
                  img2.src = 'imagem/boanoite1.png'
              }
          }
         
          res.innerHTML = `aqui esta a sua idade ${calculo} e o sexo é ${genero}`
          res.appendChild(img2) // aqui e para colocar a imgem no res
          res.style.textAlign = 'center'
         // img2.src = 'imagem/bomdia1.png'

      }
//var calculo = andata - Number(ano.value)

// res.innerHTML = `aqui esta a sua idade ${calculo} e o sexo é ${genero}`

}

