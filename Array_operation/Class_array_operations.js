class OperacoesVetor {
    constructor(vetor) {
        this.vetor = vetor;
    }

    sum() {
        return this.vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    }

    sumOdds() {
        const numerosImpares = this.vetor.filter(numero => numero % 2 !== 0);
        return numerosImpares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    }

    product() {
        return this.vetor.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);
    }
}

const vetores = [
    { vetor: [4, 7, 1], descricao: 'vetor [4, 7, 1]' },
    { vetor: [5, 5, 5], descricao: 'vetor [5, 5, 5]' },
    { vetor: [10, 20, 30, 40, 50, 60], descricao: 'vetor [10, 20, 30, 40, 50, 60]' }
];

vetores.forEach(({ vetor, descricao }) => {
    console.log("-".repeat(45));
    console.log(`--- Testes com o ${descricao} ---`);
    const operacoes = new OperacoesVetor(vetor);
    console.log(`Soma: ${operacoes.sum()}`); 
    console.log(`Soma de ímpares: ${operacoes.sumOdds()}`); 
    console.log(`Produto: ${operacoes.product()}`); 
    console.log("\n");
});