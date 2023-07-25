class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const arthur = new Pessoa();
arthur.nome = 'Arthur K';
arthur.idade = 20;

const joao = new Pessoa();
joao.nome = 'joao Francisco';
joao.idade = 19;

arthur.descrever();
joao.descrever();

class pessoaAtendida {
    nome;
    idade;
    peso;
    altura;

    imc(){
        console.log(`Seu IMC é ${this.peso / (this.altura * this.altura)}`);
    }
}

const paciente1 = new pessoaAtendida();
paciente1.nome = 'Arthur Korkiskis Felismino'
paciente1.idade = 20;
paciente1.peso = 89;
paciente1.altura = 1.87;

const paciente2 = new pessoaAtendida();
paciente2.nome = 'joao Francisco'
paciente2.idade = 22;
paciente2.peso = 82;
paciente2.altura = 1.78;

paciente1.imc();
paciente2.imc();