export class Exam {
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
            this._scores = this.exams.map(exam => this._calculateScore(exam.values));
        }
        return this._scores;
    }

    _calculateScore(studentValues) {
        let score = 0;
        for (const key in this.answer.values) {
            if (
                Object.prototype.hasOwnProperty.call(studentValues, key) &&
                studentValues[key] === this.answer.values[key]
            ) {
                score += this.weight[key];
            }
        }
        return score;
    }
}