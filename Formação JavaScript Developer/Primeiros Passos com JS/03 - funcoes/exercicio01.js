function escreveNome(nome) {
    return nome;
}

function verificaIdade(idade) {
    if (idade < 18) {
        console.log(escreveNome('Arthur') + ' Você é menor de idade')
    } else {
        console.log(escreveNome('Arthur') + ' Você é maior de idade')
    }
}

verificaIdade(20);