const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0 // variavel para armazenar os valores
let nota = 0 // variavel para receber o valor de cada array

//callback
//notas.forEach( nota => {
 //   somaDasNotas += nota
//})

notas.forEach(function(nota){
    somaDasNotas += nota    
})


let media = somaDasNotas / notas.length 

console.log(media)