const { gets, print } = require('./funcoes_ex03');

const valorSalario = gets();
const valorBeneficios = gets();

function calculaImposto(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaDoImposto = pegarAliquota(valorSalario);
const valorImposto = calculaImposto(valorSalario, aliquotaDoImposto);

const transferir = valorSalario - valorImposto + valorBeneficios;

print(transferir);

