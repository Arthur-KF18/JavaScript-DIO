const { gets, print } = require('./funcoes_auxiliares.js');

const quantidadeItens = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeItens; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado
    }
}

print(maiorValor);