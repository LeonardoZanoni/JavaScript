const arrayDeNomes = ['Maria', 'José', 'Ana',"Leonardo"];
const notasDosAlunos = [8, 4, 6, 10];

                                              //elemento //indice
const alunosReprovados = arrayDeNomes.filter(function(_, index) {
    return notasDosAlunos [index] > 7;

})

console.log(alunosReprovados)
  
