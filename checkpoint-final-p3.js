/* Micro desafio - Passo 7 - Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo 
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes 
do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo
tenha todos os métodos corretamente). */

const aluno = require ('./aluno');

const estudantes = [
    new aluno('Arthur',3,[9,10,10,10]),
    new aluno('Diego',1,[7,4,6,4]),
    new aluno('Noemi',1,[9,8,8,10]),
    new aluno('Mario',2,[9,6,7,5]),
    new aluno('Estefana',4,[10,10,10,10]),  
]

module.exports = estudantes;