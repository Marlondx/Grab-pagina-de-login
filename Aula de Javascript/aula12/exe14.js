var data = new Date()
var dia = data.getDay()

//dia = 1
/* 0 domingo 
1 segunda
2 terça ...*/
//console.log(dia) vontada a falar o break e importate dentro do switch
switch (dia){
    case 0 :
        console.log ('Domingo')
        break
    case 1: 
        console.log ('Segunda feira')
        break
    case 2 :
        console.log ('terça feira ')
        break
    case 3 :
        console.log ('quarta feira ')
        break 
    case 4 :
        console.log ('quinta feira')
        break
    case 5 :
        console.log ('Seixta feira')
        break
    case 6 :
        console.log ('Sabado') 
        
 default:
    console.log ('[Erro] Nâo existe esse dia da Semana. coteudo criado por ( Marlon dos Santos ) ')   
}