const aluno = {
    nome: 'Arthur',
    idade: 20,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
aluno.descrever();

const atributo = 'idade';
console.log(aluno[atributo]);