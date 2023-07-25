class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e meu ano de nascimento é ${this.anoDeNascimento}`);
    }
}

const arthur = new Pessoa('Arthur', 21);
const carlos = new Pessoa('carlos', 20);

arthur.descrever();
carlos.descrever();

class pessoaAtendida {
    peso;
    altura;
    calculo;

    constructor(peso, altura){
        this.peso = peso;
        this.altura = altura * altura;
        this.calculo = this.peso / this.altura
    }

    imc(){
        console.log(`Seu IMC é ${this.calculo}`);
    }
}

const paciente1 = new pessoaAtendida(89, 1.87);
const paciente2 = new pessoaAtendida(87, 1.67);

paciente1.imc();
paciente2.imc();