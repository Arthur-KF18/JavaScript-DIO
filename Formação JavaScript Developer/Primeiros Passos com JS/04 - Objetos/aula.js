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

function comparaPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`)
    }
}

const arthur = new Pessoa('Arthur', 20);
const samara = new Pessoa('samara', 19);

arthur.descrever();
samara.descrever();
comparaPessoa(arthur, samara);



class pessoaAtendida {
    nome;
    peso;
    altura;
    calculo;

    constructor(nome, peso, altura){
        this.peso = peso;
        this.altura = altura * altura;
        this.calculo = this.peso / this.altura;
        this.nome = nome;
    }

    imc(){
        console.log(`Olá ${this.nome}, seu IMC é ${this.calculo}`);
    }
}

function tipoImc(valor) {
    if (valor.calculo < 18.5) {
        console.log(`magreza`)
    } else if (valor.calculo > 18.5 && valor.calculo < 24.9) {
        console.log(`peso normal`)
    }  else if (valor.calculo > 25 && valor.calculo < 29.9) {
        console.log(`Sobrepeso`)
    }  else if (valor.calculo > 29.9 && valor.calculo < 34.9) {
        console.log(`Obesidade grau I`)
    } else if (valor.calculo > 35 && valor.calculo < 39.9) {
        console.log(`Obesidade Grau II`)
    } else {
        console.log(`Obesidade Grave`)
    }
}

const paciente1 = new pessoaAtendida('Arthur', 87, 1.87);
const paciente2 = new pessoaAtendida('Jose', 70, 1.75);

paciente1.imc();
tipoImc(paciente1);
paciente2.imc();
tipoImc(paciente2);