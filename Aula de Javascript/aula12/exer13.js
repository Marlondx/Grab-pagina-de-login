var hora = new Date()
var agora = hora.getHours()
var n1 = 15 

 if(agora < 12 ){
     console.log(`São ${agora} bom dia `)
 }
 else if (agora <= 18  ) {
     console.log(`São ${agora} boa tarde `)
 }
 else {
     console.log(`São ${agora} boa note `)
 }