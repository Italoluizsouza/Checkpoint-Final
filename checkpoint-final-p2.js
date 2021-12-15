const aluno = require('./checkpoint-final-p1');
const estudantes = require('./checkpoint-final-p3');


const curso = {
    nomeDoCurso: 'Excel Avançado',
    notaDeAprovacao:8,
    faltasMaximas: 4,
    listaEstudantes: estudantes,

    adicionarAluno(nome, qtdFaltas, notas) {
        let alunoNovo = new aluno(nome, qtdFaltas, notas);
        this.listaEstudantes.push(alunoNovo);
    },

    mediaAprovacao(aluno) {
        let mediaAluno = aluno.calcularMedia();
        if(aluno.qtdFaltas > this.faltasMaximas && mediaAluno < this.notaDeAprovacao*1.1){
            console.log(`O(a) estudante) ${aluno.nome} esta aprovado com média ${aluno.calcularMedia()}.`)
            return false;
        } else if(mediaAluno < this.notaDeAprovacao){
            console.log(`O(a) estudante) ${aluno.nome} esta reprovado com média ${aluno.calcularMedia()}.`)
            return false;
        } else {
            console.log(`O(a) estudante) ${aluno.nome} esta aprovado com média ${aluno.calcularMedia()}.`)
            return true;
        }
    },

    listaFinal() {
        for( let i = 0; i < this.listaEstudantes.length; i++ ) {
            curso.mediaAprovacao(this.listaEstudantes[i]);
        }
} 
}

console.log(`CURSO: ${curso.nomeDoCurso}`);
console.log(`Relação de Aprovados ou Reprovados`);
curso.listaFinal();