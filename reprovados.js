const arrayDeNomes = ['Maria', 'José', 'Ana'];
const notasDosAlunos = [3, 4, 10];

const alunosReprovados = arrayDeNomes.filter(function(nomes, index) {
    return notasDosAlunos [index] < 5;

})

console.log(alunosReprovados)
  
