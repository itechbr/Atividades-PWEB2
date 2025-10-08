const readline = require('readline');

class Exams {
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
        this._scores = null;
    }

    add(exam) {
        this.exams.push(exam);
        this._scores = null;
    }

    avg() {
        const scores = this._getAllScores();
        if (scores.length === 0) {
            return 0;
        }
        const sum = scores.reduce((total, score) => total + score, 0);
        return sum / scores.length; 
    }

    min(count = 1) {
        const scores = [...this._getAllScores()];
        scores.sort((a, b) => a - b);
        return scores.slice(0, count);
    }

    max(count = 1) {
        const scores = [...this._getAllScores()];
        scores.sort((a, b) => b - a);
        return scores.slice(0, count);
    }

    lt(limit) {
        const scores = this._getAllScores();
        return scores.filter(score => score < limit);
    }

    gt(limit) {
        const scores = this._getAllScores();
        return scores.filter(score => score > limit);
    }

    _getAllScores() {
        if (this._scores === null) {
            this._scores = this.exams.map(exam => this._calculateScore(exam));
        }
        return this._scores;
    }

    _calculateScore(studentAnswers) {
        let score = 0;
        for (let i = 0; i < this.answer.length; i++) {
            if (studentAnswers[i] === this.answer[i]) {
                score += this.weight[i];
            }
        }
        return score;
    } 
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-".repeat(45));
console.log("--- Sistema de Provas ---");

function perguntarGabarito() {
    rl.question('Digite o gabarito separado por vírgula (ex: a,b,a,c,d): ', (gabaritoInput) => {
        const gabarito = gabaritoInput.split(',').map(item => item.trim());
        perguntarPesos(gabarito);
    });
}

function perguntarPesos(gabarito) {
    rl.question('Digite os pesos separados por vírgula (ex: 2,2,2,2,2): ', (pesosInput) => {
        const pesos = pesosInput.split(',').map(item => parseInt(item.trim()));
        const sistemaDeProvas = new Exams(gabarito, pesos);
        perguntarQtdAlunos(sistemaDeProvas);
    });
}

function perguntarQtdAlunos(sistemaDeProvas) {
    rl.question('Quantos alunos vão responder? ', (qtdAlunosInput) => {
        const qtdAlunos = parseInt(qtdAlunosInput);
        perguntarRespostasAlunos(sistemaDeProvas, qtdAlunos, 1);
    });
}

function perguntarRespostasAlunos(sistemaDeProvas, qtdAlunos, alunoAtual) {
    if (alunoAtual > qtdAlunos) {
        mostrarResultados(sistemaDeProvas);
        rl.close();
        return;
    }
    rl.question(`Respostas do aluno ${alunoAtual} separadas por vírgula: `, (respostasInput) => {
        const respostas = respostasInput.split(',').map(item => item.trim());
        sistemaDeProvas.add(respostas);
        perguntarRespostasAlunos(sistemaDeProvas, qtdAlunos, alunoAtual + 1);
    });
}

function mostrarResultados(sistemaDeProvas) {
    console.log("\nNotas de todos os alunos:", sistemaDeProvas._getAllScores());
    console.log("-".repeat(45));
    console.log(`Média da turma: ${sistemaDeProvas.avg().toFixed(2)}`);
    console.log("-".repeat(45));
    console.log("A menor nota:", sistemaDeProvas.min());
    console.log("As 2 menores notas:", sistemaDeProvas.min(2));
    console.log("-".repeat(45));
    console.log("A maior nota:", sistemaDeProvas.max());
    console.log("As 2 maiores notas:", sistemaDeProvas.max(2));
    console.log("-".repeat(45));
    console.log("Notas maiores que 5:", sistemaDeProvas.gt(5));
    console.log("Notas menores que 5:", sistemaDeProvas.lt(5));
    console.log("-".repeat(45));
}

perguntarGabarito();