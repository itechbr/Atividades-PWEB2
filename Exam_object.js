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
        if (scores.length === 0) return 0;
        return scores.reduce((total, score) => total + score, 0) / scores.length;
    }

    min(count = 1) {
        return [...this._getAllScores()].sort((a, b) => a - b).slice(0, count);
    }

    max(count = 1) {
        return [...this._getAllScores()].sort((a, b) => b - a).slice(0, count);
    }

    lt(limit) {
        return this._getAllScores().filter(score => score < limit);
    }

    gt(limit) {
        return this._getAllScores().filter(score => score > limit);
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

console.log("-".repeat(45));
console.log(">>> Correção de Provas <<<");

const gabarito = ['a', 'b', 'a', 'c', 'd'];
const pesos = [2, 2, 2, 2, 2];
const exam_sistem = new Exams(gabarito, pesos);

const aluno1Respostas = ['a', 'd', 'c', 'b', 'd']; 
const aluno2Respostas = ['a', 'b', 'a', 'c', 'd']; 
const aluno3Respostas = ['d', 'b', 'a', 'a', 'a']; 
const aluno4Respostas = ['a', 'b', 'a', 'd', 'd']; 

exam_sistem.add(aluno1Respostas);
exam_sistem.add(aluno2Respostas);
exam_sistem.add(aluno3Respostas);
exam_sistem.add(aluno4Respostas);

console.log("\nNotas dos alunos:", exam_sistem._getAllScores());
console.log("-".repeat(45));
console.log(`Média da turma: ${exam_sistem.avg().toFixed(2)}`);
console.log("-".repeat(45));
console.log("Menor nota:", exam_sistem.min());
console.log("2 menores notas:", exam_sistem.min(2));
console.log("-".repeat(45));
console.log("Maior nota:", exam_sistem.max());
console.log("2 maiores notas:", exam_sistem.max(2));
console.log("-".repeat(45));
console.log("Notas acima de 5:", exam_sistem.gt(5));
console.log("Notas abaixo de 5:", exam_sistem.lt(5));
console.log("-".repeat(45));