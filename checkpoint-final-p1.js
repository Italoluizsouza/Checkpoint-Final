class aluno {
    constructor(nome, qtdFaltas, notas){
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }

    calcularMedia() {
        return this.notas.reduce((nota,outraNota) => nota + outraNota) / this.notas.length;
    }
   faltas() {
        this.qtdFaltas++;
    }
}

module.exports = aluno;