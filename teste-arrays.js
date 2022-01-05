//O array funcionarios é um array de duas dimensões. 
//Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”.
// O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

let idades = [30, 35, 28]
let nomes = ["Ana", "Juliana", "Leonardo"]
let faculdade = [false, true, true] 


let funcionarios = [nomes,idades,faculdade]

console.log(`${funcionarios[0][1]} tem ${funcionarios[1][2]} anos e tem graduação? ${funcionarios[2][1]}`)


