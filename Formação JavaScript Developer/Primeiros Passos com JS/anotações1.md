#### Variáveis e Operadores

- Iremos criar um arquivo chamado `aula.js` onde estarão presentes toda a lógica dos programas, assim como explicações dos projetos e tudo que estará sendo colocado no curso
- Temos um arquivo javaScript, __e com o node instalado, podemos rodar ele na nossa máquina, sem precisar do navegador por enquanto__. O comando responsável por isto é __`node arquivo..js`__
- `console.log("texto")`; Comando para rodar o texto dentro do console do terminal ou no navegador
- Para podermos declarar variáveis dentro do JS, além do que __já entendemos por lógica de programação, as variáveis são "espaços" para guardar valores. Estes espaços são basicamente a memória do computador__
- Temos duas formas diferentes de declarar variáveis no JS:
  - `let variavel = valor`: `let` permite __que mudemos o valor de uma variável, ou seja, se na próxima linha a variável for chamada novamente com um novo valor, este será aplicado a ela__
  - `const variavel = valor`:  __uma vez que passamos um valor para esta variável, não se é mais possível alterar os valores dela__
- Podemos perceber isto na seguinte linha de código:

```js
let variavel = 20;
console.log(variavel);
variavel = 30;
console.log(variavel);
```

- A respota no console será:

```console
20
30
```

- Isto ocorre pois o js __lê uma linha de cada vez, e também pois a declaração `let` permite a alteração do valor__
- quando inserirmos `const variavel = 20`, __será impresso apenas o valor 20, e o 30 será retornado um erro `TypeError: Assignment to constant variable.`__
- Obviamente, vemos que o `=` é um operador de __atribuição, ou seja, estamos atribuindo 20 ao valor da `variavel`__
- Para somarmos valores, __podemos usar operadores matemáticos como `+`, `-`, `/` e `*`:__

```js
let soma = 10 + 10;
// o resultado no console será 20
```

- Entendemos que, __criamos espaços de memória no computador, e que podemos realizar operações, onde o resultado é guardado dentro de uma variável e mostrado no console. Chamamos isso de computação de alto nível__

##### Desafio

- Criar um programa para calcular o valor de uma viagem:
  - 3 variáveis, sendo elas:
  1 - Preço do combustível;
  2 - Gasto médio do combustível;
  3 - Distância em KM da viagem;
- Imprimir no console o valor que será gasto para realizar esta viagem

```js
let precoCombustivel = 5.63;
const kmPorLitros = 12.1; 
const distanciaKm = 100; 

let mediaKm = distanciaKm / kmPorLitros;
console.log("a quantidade de litros foram: " + Math.round(mediaKm)+ "L")

let mediaPreco = mediaKm * precoCombustivel;
console.log("a média do combustível é " + Math.round(mediaPreco) + " R$");
```

- O que ocorre é que __a cada litro, andamos a quantidade de km em `kmPorLitros`, e para o valor da distância `distanciaKm`, temos de dividir a quantidade de km andados pela distância__
- O preço da viagem será a divisão entre eles __multiplicado pelo preço da gasolina, já que a gasolina anda uma quantidade `x` de km__
- __É importante lembrar que usar o padrão camel case, faz com que as variáveis sejam chamadas `destaForma`, onde a segunda palavra é colocado a primeira letra em maiúscula__
- Podemos inserir valores decimais, __porém, ao invés da vírgula, será usado o ponto: `2.50`__
- Podemos melhorar ainda mais os valores impressos utilizando o `Math.round(variavel)`, onde ele irá pegar o resultado decimal e irá aproximar ao valor mais perto
- __Programa é um conjunto de instruções para o computador__

#### Estruturas Condicionais

- Agora que já entendemos sobre __variáveis mutaveis com `let` e variáveis não alteráveis com `const` iremos ver sobre as estruturas condicionais__
- O que é uma condicional? __Dentro dos tipos de variáveis, temos o tipo `boolean`, ele é a variável que representa verdadeiro e falso. Sempre que quisermos expressar um verdadeiro e falso, utilizamos um `boolean`__
- uma variável do tipo `boolean` pode ser representada desta forma:

```js
const carroAzulRenan = true;
const carroAzulThiago = false;
```

- __O Renan possui carro azul e o Thiago não. Simples desta forma, os valores `true` ou `false` trazem o tipo booleano__
- A condicional, é diferente, __pois como o próprio nome diz, é uma condição__. Por exemplo `10 > 5`, sim, __se 10 é maior que 5, é uma condição verdadeira, se for `10 < 5`, é uma condição falsa__. Além disso, __podemos utilizar o `>=`, "maior ou igual", que também verifica se é verdadeiro ou falso__
- Vamos ter o seguinte exemplo:

```javascript
const numero = 10;
const eNumeroPar = numero % 2;

console.log(eNumeroPar);
```

- __Quando fazemos uma divisão, para aplicarmos se ele for par ou ímpar, ele deve ser múltiplo de 2. Assim, ao dividirmos um número por dois, se existir resto, sabemos que ele será ímpar. Para podermos verificar isto no javaScript, usamos o operador `%`.__
- o `%` é um __operador aritimético responsável por trazer o valor do resto da divisão__
- Ao inserirmos o valor 10, e usarmos a função `eNumeroPar`, __10 será dividido e o resto da divisão será dividido por 2. Assim, ele retorna `0`, mostrando que é par. Usando 5, retornará 1, mostrando que o número é ímpar__
- Ao mudarmos o valor de `eNumeroPar` para 5 por exemplo, __10 é múltiplo de 5, então será verdadeiro. Porém 11 não. Estamos verificando se é par ou é múltiplo do número que colocamos, sendo eficiente a nossa conta__
- Podemos verificar então se o número é par através do `(numero % 2) === 0`. Ao usarmos `node aula.js` novamente e verificarmos o valor 10, __irá retornar `true`__

```javascript
const numero = 10;
const eNumeroPar = (numero % 2) === 0;

console.log(eNumeroPar)
```

- __O `===` verifica estritamente se o valor do resultado da divisão é 0. Sempre o retorno de uma condicional retorna um `boolean`__
- Este é um __operador de igualdade__. Podemos entender de forma que:
  - `=` : Atribtuição
  - `==` : Igualdade, porém ignora o tipo da variável(string ou int)
  - `===` : Igualdade estrita
- Verificamos isso com `const eNumeroPar = (numero % 2) === '0';` e a resposta no console sendo __false, já que o resultado `ìnt` não é igual a `string`__
- Agora, __se nõs quisessemos que um texto fosse exibido quando o número fosse ou não par?__
- Para isso, utilizaremos __a estrutura condicional `if`, ou, "se", significa que, algum evento só poderá ocorrer "se" ele for verdadeiro__
- Verificamos isso da seguinte forma:

```javascript
if (eNumeroPar) {
    console.log('Executei')
}
// No console a resposta será `true` para número par
// e ímpar será `false`, mas não haverá a resposta
```

- __Isto está ocorrendo pois a variável `eNumeroPar` é do tipo `boolean`. Ela só é `boolean` por há a igualdade `===`__
- Se quisermos __verificar que o número inserido foi ímpar, podemos utilizar o operador `!`, já que ele é a negação da variável, ou seja, o `false` dela__

```javascript
if (eNumeroPar) {
    console.log('Par')
}

if (!eNumeroPar) {
    console.log('Ímpar')
}
```

- Dessa forma, __verificamos se o número inserido é ou não par, além de termos uma resposta de texto sobre o número inserido__
- Porém, __é a forma mais básica. E afim de evitar a repetição de código e deixá-lo mais inteligente, usamos outro fator importante que é o `else`, ou, "se não". Dentro do nosso laço condicional, quando utilizamos o `else` estamos vendo o lado `false` da variável, ou seja, qual será a resposta caso "não for par?"__

```js
if (eNumeroPar) {
    console.log('Par')
} else {
    console.log('ímpar')
}
```

- __Se o número for par, imprima o primeiro `console`, porém, se não for, imprima o segundo `console`__
- Porém, agora vamos pensar da seguinte forma. Sabemos que se inserirmos 0, __a mensagem retornada será `Par`__. Porém, __e se quisermos que 0 tenha uma mensagem específica?__
- Podemos fazer da seguinte forma:

```javascript
if (numero === 0) {
    console.log('Número inválido!')
}
```

- Isto funcionará, e o número será datado como inválido. __Porém, nós temos duas condicionais, e mesmo depois de verificar que é inválido, o outro `if` irá funcionar. Precisamos então que a condição de par ou ímpar não funcione quando o número for 0__
- Podemos utilizar o `else if`, ou seja __se o número não for 0, execute o `if` que possuímos__

```javascript
if (numero === 0) {
    console.log('Número inválido!')
} else if {
  // condicionais
}
```

- Dessa forma, entendemos de forma correta __as estruturas condicionais simples, já que podemos melhorar ainda mais a maneira como podemos escrevê-las também__
- Nessa estrutura, __podemos adicionar outros `else if` se termos outras condições a serem atendidas__
- Mas como pode se perceber, __a repetição desta estrutura condicional se torna confusa ao ser repetida diversas vezes, já que se torna difícil de ler, não sendo uma boa prática__
- Para uma boa prática, __ao invés de termos uma variável separada para validar, podemos coloca-la unicamente no nosso `if`__:

```javascript
const numero = 12;

if ((numero % 2) === 0) {
    console.log('O número é par')
} else {
    console.log('O número é ímpar')
}
```

- __O `numero` irá ser verificado diretamente, e conseguimos verificar se é `par` ou `impar` sem precisar de uma outra variável__
- Fica claro do que ocorreu para nós, __já que nós lemos e entendemos a linguagem. Porém, como podemos fazer para deixar legivél, de forma que qualquer pessoa possa tentar ler?__
- Simples, __guardamos a função em uma variável, de fácil leitura e identificação__
- __Temos uma convenção utilizada quando estamos lidando com variáveis booleanas que é utilziar `is` na frente da nossa variável__

```js
const isoNumeroEPar = (numero % 2) === 0
```

#### Desafio

- Criar um programa para calcular o valor de uma viagem:
  - 5 variáveis, sendo elas:
  1 - Preço do etanol;
  2 - Preço do combustível;
  3 - O tipo de combustível que está no seu carro;
  4 - Gasto médio do combustível do carro por KM;
  5 - Distância em KM da viagem;
- Imprimir no console o valor que será gasto para realizar esta viagem

- Dica importante sobre `strings`: __usamos geralmente `''` ou `crases` para definirmos elas, já que o uso de `""` é mais focado dentro do HTML__

```javascript
let precoEtanol = 3.89;
let precoGasolina = 5.63;
const kmPorLitros = 10;
const distanciaKm = 150;
let combustivelNoCarro = 'gasolina';
```

- Definimos nossas variáveis desta forma.

```javascript
let precoEtanol = 3.89;
let precoGasolina = 5.63;
let precoDiesel = 5.01;
const kmPorLitros = 12.5;
const distanciaKm = 300;
let combustivelNoCarro = 'etanol';

let litrosConsumidos = distanciaKm / kmPorLitros;

let gasolina = litrosConsumidos * precoGasolina;
let etanol = litrosConsumidos * precoEtanol;
let diesel = litrosConsumidos * precoDiesel;

if (combustivelNoCarro === 'gasolina') {
    console.log("a média da gasolina é " + gasolina.toFixed(2) + " R$");
} else if (combustivelNoCarro === 'etanol') {
    console.log("a média do etanol é " + etanol.toFixed(2) + " R$");
} else if (combustivelNoCarro === 'diesel') {
    console.log("a média do diesel é " + diesel.toFixed(2) + " R$");
}
```

- O código acima __foi melhorado com mais aspectos do que apresentado no curso, tendo diesel também como combustível, além de utilizar o `console.log` apenas quando a condição for atendida__

#### Praticando com Variáveis, Operadores e Estruturas Condicionais

1. Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3)/ 3;

- classificação:
  - Média menor que 5, reprovado;
  - Média entre 5 e 7, recuperação
  - Média acima de 7, passou de semestre

- Resposta:

```javascript
const nota1 = 7; 
const nota2 = 6; 
const nota3 = 7; 

const mediaNotas = (nota1 + nota2 + nota3)/3;

console.log("A nota que você tirou foi: " + Math.round(mediaNotas));

if (mediaNotas < 5) {
    console.log('Você foi reprovado')
} else if (mediaNotas >= 5 && mediaNotas < 7) {
    console.log('Você está de recuperação')
} else {
    console.log('Você foi aprovado')
}
```

- __Nõs utilizamos um operador lógico AND, representado por `&&`. Além dele temos NOT, `!`, e OR, representado por `||`__
- Se o número __for maior que 7, sera aprovado automaticamente, então não é necessária uma outra condição ao finalizarmos a operação__

2. O IMC - índice  de Massa Corporal é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta

- Fórmula do IMC: peso/(altura * altura)

- Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condiçõa de acordo com a tabela abaixo:
- IMC em adultos condição:
  - Abaixo de 18.5: Abaixo do peso
  - Entre 18.5 e 25: peso normal
  - Entre 25 e 30: 18.5: Acima do peso
  - Entre 30 e 40: Obeso
  - Acima de 40: Obesidade Grave

```javascript
const peso = 89;
const altura = 1.87
const alturaCalculada = Math.pow(altura, 2);

const IMC = peso / altura;
console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Você está abaixo do peso')
} else if (IMC > 18.5 && IMC <= 25) {
    console.log('Seu peso está normal')
} else if (IMC > 25 && IMC <= 30) {
    console.log('Você está acima do peso')
} else if (IMC > 30 && IMC <= 40) {
    console.log('Você está obeso')
} else {
    console.log('Você possui Obesidade Grave')
}
```

- __Usando a propriedade `Math` podemos fazer operações matemáticas com javaScript, já que ela é uma biblioteca da linguagem. utilizando o método `Math.pow(x, y)`, onde `x` é nosso número, sendo ele a altura ou qualquer valor, e `y` o número pelo qual iremos fazer seu quadrado. Por exemplo, para calcularmos o quadrado de 2, usamos `Math.pow(2, 2)`, e o resultado sendo 4__
- Também __podemos guardar variáveis dentro do método, facilitando o `input` dos valores__

3. Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

- Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

- Código Condição de pagamento:
  - À vista Débito, recebe 10% de desconto
  - À vista no dinheiro ou PIX, recebe 15% de desconto
  - Em duas vezes, preço normal da etiqueta, sem juros
  - acima de duas vezes, preço normal da etiqueta mais juros de 10%

- Resposta:

```javascript
const metodoPagamento = 'PIX';
const quantidadeVezes = 3;
const valorEtiqueta = 7.35;

const desconto10 = valorEtiqueta - (valorEtiqueta * 0.10);
const desconto15 = valorEtiqueta - (valorEtiqueta * 0.15);
const juros10 = valorEtiqueta + (valorEtiqueta * 0.10);

console.log("Desconto de 10%: " + (valorEtiqueta * 0.10).toFixed(2));
console.log("Desconto de 15%: " + (valorEtiqueta * 0.15).toFixed(2));

if (metodoPagamento === 'Debito') {
    console.log("O valor que irá pagar será de: " + desconto10.toFixed(2) + "R$")
} else if (metodoPagamento === 'PIX' || metodoPagamento === 'Dinheiro') {
    console.log("O valor que irá pagar será de: " + desconto15.toFixed(2) + "R$")
} else if (metodoPagamento === 'Credito' && quantidadeVezes === 2) {
    console.log("O valor que irá pagar será de: " + valorEtiqueta.toFixed(2) + "R$")
} else if (metodoPagamento === 'Credito' && quantidadeVezes > 2) {
    console.log("O valor que irá pagar será de: " + juros10.toFixed(2) + "R$")
}
```

#### O Poder das Funções na Qualidade do seu código

- __Funções são nada mais, nada menos do que trechos de codigo que podemos invocar sua execução a qualquer momento que quisermos__
- Por exemplo, __uma função que criamos foram os laços condicionais, do `if else`__
- Para declararmos uma função, utilizamos o `function`:

```javascript
function teste() {
    console.log('testando minha função!')
}

teste();
```

- Nós criamos uma função chamada `teste`. Dentro dela temos uma mensagem que irá aparecer no console. Por fim,, __para invocarmos esta função, existem diferentes maneiras, mas a comum é utilizar `teste();`, já que chamamos ela, e os `()` são responsáveis por iniciá-la__
- __Podemos chamar nossa função, quantas vezes quisermos, ela sempre irá executar com os métodos que definimos nela__
- Porém, além disto, __toda função possui um parâmetro, que é o valor inserido no `function teste(parametro){}`__

```javascript
function sayMyName(name) {
    console.log('Meu nome é ' + name)
}

sayMyName('Arthur');
// No console: Meu nome é Arthur
```

- O que está ocorrendo é o seguinte: __Nós criamos uma função que possui um parâmetro, e esta função, quando for chamada e passarmos um parâmetro para ela, quando for invocada ela irá executar o `console.log` com a nossa mensagem escrita__
- Por exemplo, __podemos criar uma função chamada de `quadrado`, e nela fazer a lógica para fazer o quadrado de um número:__

```javascript
function quadrado(valor) {
    console.log("O quadrado do seu valor é: " + Math.pow(valor, 2))
}

quadrado(3);
//  O quadrado do seu valor é: 9
```

- Porém, __funções que não retornam nada, são chamadas de `procedimentos`, já que elas quando serem chamadas irão ser executadas, mas não retornam um parâmetro__
- Porém, se nós __quisermos utilizar este `valor` para outra conta, podemos fazer da seguinte forma:__

```javascript
function quadrado(valor) {
    return valor * valor;
}

quadrado(10);
const quadradoDeDez = quadrado(10);

console.log(quadradoDeDez);
```

- Chamamos a função, __ela nos retorna o valor através do `return` presente dentro dela. Com isto, podemos repetir essa operação diversas vezes: `console.log(quadradoDeDez + quadrado(5))`__
- Além disto, no nosso exemplo onde precisávamos de juros podemos criar uma função própria para isto:

```javascript
function incrementaJuros(valor, percenturalJuros) {
    const valorAcresimo = (percentualJuros/100) * valor;
    return valor + valorAcresimo;
}

console.log(incrementaJuros(100, 10));
```

- __Passamos dois parâmentros, o `valor` e o `percentualJuros`. Criamos uma constante chamada `valorAcresimo` responsável pelo cálculo. Sabemos que para a %, é necessário dividir por 100, então fazemos `percentualJuros/100` e multiplicamos por `valor`. Com isto, iremos retornar, ou seja, a resposta da função será de `valor + valorAcresimo`. Por fim, quando inserirmos a função, `incrementaJuros(valor, percentualJuros)`, onde 100 é o valor e 10 é a %__
- __Ou seja, a função é um pequeno trecho de código no qual podemos invocar ele e ser executado diversas vezes, de forma mais dinâmica__

#### Como organizar funções

- __Nosso código principal sempre estará dentro de uma função, e ela se chamará `main`, nossa função principal. Quando pedimos para executar, o `node.js` irá ver linha por linha. Quando ele chegar na função, ele irá processar o código dentro dele. Isto se torna uma variável, na qual consguimos invocá-la__
- Fora do nosso `main`, __serão criadas apenas as funções necessárias. E nós iremos utilizar dentro da nossa função principal as funções auxiliares que foram declaradas fora do escopo `main`__

```js
function main() {
    console.log('Programa principal')
}
main();
```

- Agora iremos pegar nossos exercícios anteriores e refaze-los, organizando nosso código
- Primeiro iremos criar uma função __capaz de calcular o peso e a altura__

```javascript
function calculaImc(peso, altura) {
    const alturaCalculada = Math.pow(altura, 2)
    return peso / alturaCalculada
}
```

- Com esta função, __ela irá pegar os valores armazenados nas constantes `peso` e `altura`, e depois irá calcular eles quando impressa:__

```javascript
const peso = 88;
const altura = 1.78;
const imc = calculaImc(peso, altura);


function calculaImc(peso, altura) {
    const alturaCalculada = Math.pow(altura, 2)
    return peso / alturaCalculada
}

console.log(imc);
// 27.77 será a resposta
```

- Com isto, agora precisamos isolar as classificações em relação ao peso. Para isso, __criaremos uma função chamada `classificaImc(imc)`. Por ela receber o valor do `imc`, iremos adicionar as condições:__

```javascript
function classificaImc(imc) {
    if (imc < 18.5) {
        return 'Você está abaixo do peso'
    } else if (imc > 18.5 && imc <= 25) {
        return 'Seu peso está normal'
    } else if (imc > 25 && imc <= 30) {
        return 'Você está acima do peso'
    } else if (imc > 30 && imc <= 40) {
        return 'Você está obeso'
    } else {
        return 'Você possui Obesidade Grave'
    }
}
```

- __Ao invés de termos diferentes `console..log`, podemos ter apenas o `return 'mensagem'`, sendo mais simples e compacto, sem precisar de muito código, apenas as funções sendo chamadas__
- Por fim, __podemos chamar a função `main` de forma a deixar nosso código bem organizado e mais legivél. Nosso código principal apenas irá receber os dados necessários, deixando o código mais legível e menos complexo__
- Se __nós colocarmos `console.log(main)` a resposta no nosso teerminal será `[function: main]`. Então, funções no javaScript são valores, objetos que podemos manipular. Ou seja, a função `main` é um objeto do tipo função__
- Estes __objetos funções se comportam como qualquer valor que inserirmos:__

```javascript
const main2 = main;
console.log(main2)
// Resposta no console será a mesma anterior
```

- Além disto, __podemos até mesmo invocar o `main2`__. Então as funções, depois de declaradas, __se tornam algo como um valor e nós podemos passar estes valores para outras variáveis, podemos passar uma função como parâmetro de uma função__

```js
main = function () {
    console.log(1);
}

main();
// resposta: 1
```

- __Ele irá ler a função `main` e irá reatribuir um valor a ela, no caso a `console.log`. No javaScript as funções são como objetos, nas quais podemos manipular como um valor, número, um texto, ou até mesmo o objeto__
- __Quando estamos realizando uma conta matemática, se quisermos isolar um operação, para que execute primeiro, utilizamos `()`.Este parênteses irá resolver o conteúdo dentro. Podemos então inserir uma função dentro dos parênteses. Isto é o que chamamos de função imediatamente invocada, ela cria e já se executa__

```javascript
(function main() {
    const peso = 96;
    const altura = 1.87;
    const imc = calculaImc(peso, altura);
    
    console.log(imc.toFixed(2));
    console.log(classificaImc(imc))
})();

```

- __A função precisa do `();` para ser executada. Ou seja, dizemos ao js que ele leia tudo dentro dos parênteses e execute de forma imediata. Isto vale para qualquer valor ou objeto. Podemos ta,bém tirar o nome dela, já que ela fica não nomeada, mas será executada imediatamente. Não conseguiremos chamá-la também.__'
- Fazemos isto bastante __dentro da web para isolarmos o código dentro dela, executando uma única vez__

#### Exercícios práticos de funções

- Quando iremos __nomear uma função, já que ela é executável, nós geralmente inserimos um verbo. Por exemplo `escrevaMeuNome`__:

```javascript
function escreveNome(nome) {
    console.log(`meu nome é ${nome}`);
    // console.log('Meu nome é' + nome);
}

escreveNome('Arthur');
```

- No exercício, temos um detalhe importante. __Ao chamarmos a função, precisamos que o parâmetro dela seja `string` para que o ocorra a impressão do nome. No curso, é utilizada a concatenção. Mas utilizar o `stringfy` neste caso também resolve o exercício__
- Resumindo: __Criamos uma função que recebe um parâmetro `nome`. Para este parâmetro colocamos o `console.log`, que ao ser chamado irá exibir o seu parâmetro.__
- Um outro simples exercício é verificar a idade:

```javascript
function verificaIdade(idade) {
    if (idade < 18) {
        console.log('Você é menor de idade')
    } else {
        console.log('Você é maior de idade')
    }
}

verificaIdade(21);
// Você é ,maior de idade
verificaIdade(17);
// Você é menor de idade
```

- __Uma função é um pequeno "programinha", onde temos um código e podemos invocá-lo a qualquer momento que quisermos. Nós utilizamos um algoritmo, e ele está encapsulado dentro de uma função semântica__
- Por exemplo, __sabemos que quando criamos funções, elas são como objetos. Estes objetos são variáveis e podem ser utilizados de diferentes maneiras. Agora, como podemos inserir uma função dentro de uma outra função?__
- Primeiro, vamos tentar o código abaixo:

```javascript
function escreveNome(nome) {
    console.log('meu nome é ' + nome);
}

function verificaIdade(idade) {
    if (idade < 18) {
        console.log(escreveNome('Arthur') + 'Você é menor de idade')
    } else {
        console.log(escreveNome('Arthur') + ' Você é maior de idade')
    }
}

verificaIdade(17);
```

- A resposta deste __`console.log` será `undefinedVocê é menor de idade`. Por que isto ocorre? Por que na função acima `escreveNome` não foi retornado nenhum valor. E na `verificaIdade` estamos usando-a como se fosse um texto.__
- Para fazermos isto, iremos:

```javascript
function escreveNome(nome) {
    return nome
}
```

- __Assim estaremos retornando um texto, e a função `èscreveNome('nome')` irá funcionar corretamente e no console a resposta será: `Arthur Você é menor de idade`__
- A função do `return` __é de podemos reutilizar os valores que uma função irá criar, sejam textos ou números. até mesmo funções__
- Agora iremos voltar nos exercícios anteriores e utilizar funções para resolvê-los
- Iremos voltar nos métodos de pagamento, e iremos realizar __as funções para poder ter o método do pagamento, e aplicar tanto desconto ou juros__:

```javascript
const valorEtiqueta = 35.00;

function aplicaDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicaJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

function metodoPagamento(tipoDePagamento) {

    if (tipoDePagamento === 1) {
        console.log("Debito : " + aplicaDesconto(valorEtiqueta, 10).toFixed(2));
    } else if (tipoDePagamento === 2) {
        console.log("Dinheiro ou Pix: " + aplicaDesconto(valorEtiqueta, 15).toFixed(2));
    } else if (tipoDePagamento === 3) {
        console.log("Crédito em duas vezes: " + valorEtiqueta.toFixed(2))
    } else {
        console.log("Crédito em mais vezes: " + aplicaJuros(valorEtiqueta, 10).toFixed(2))
    }
}

metodoPagamento(1);
metodoPagamento(2);
metodoPagamento(3);
metodoPagamento(4);
```

- __O que está ocorrendo é que: Teremos uma função `aplicaDesconto`, na qual irá retornar um valor e desconto já calculados. Para isso, iremos utilizar o `return` para que possamos utilizar esta função em outra parte do código__
- Por termos utilizado `aplicaDesconto(valor, desconto)`, __colocamos ela dentro de uma condição. e dentro desta condição, inserimos o `valorEtiqueta` com o desconto. O `valorEtiqueta` estará no lugar do `valor`, já que é uma constante. Sendo assim, iremos inserir os descontos desta forma: `aplicaDesconto(valorEtiqueta, 10)`, onde estará sendo aplicado 10% de desconto(`(desconto / 100)`)__
- Faremos o mesmo para o juros, e que estará tendo sua própria função.
- Ao escolhermos um método de pagamento, __ele irá atender as condições__
- __Nossa missão ao criar as funções é simplificar o uso, tornando-o mais humano e tranquilo de ser utilizado__

#### Entendendo Objetos

- Agora que já entendemos bem sobre funções, e o quanto elas são importantes para nós durante a criação e organização dos nossos códigos. Precisamos entender um __conceito muito importante no javaScript: Seus Objetos__
- Por exemplo, o `console` é __um objeto, onde ele é uma variável com diferentes funções, estes sendo os métodos do objeto. Quando estavámos criando variáveis, estavámos atribuindo valores literais. Porém, também podemos atribuir um objeto `const variavel = {}`.__
- Temos que entender que __o objeto é uma coleção de valores, ele funciona com chave valores, ou, `{valores}`. Por exemplo:__

```javascript
const arthur = {
    nome: 'Arthur K',
    idade: '20'
};
```

- Vemos então que __`arthur` tem uma coleção de dados, onde temos `nome` e `idade`. Esta é a sintaxe do objeto literal. Em resumo:__

```javascript
const variavel {
    chave: valor,
    chave:"valor"
};
```

- __É importante lembrar que é necessário a vírgula para separar asa chaves. para nós podermos acessar o valor dentro do nosso objeto `variavel`, iremos utilizar o `variavel.chave`. O ponto é para podermos entrar no objeto e acessar a chave que criamos__

```javascript
const aluno = {
    nome: 'Arthur',
    idade: 20
};

console.log(aluno.nome)
// no console: Arthur
```

- Se nós imprimirmos `console.log(aluno)`, ele nos retorna: `{ nome: 'Arthur', idade: 20 }`. __Quando pedimos a impressão do nosso objeto, ele nos retorna a coleção de valores, uma lista de itens__
- __Agora que definimos um objeto literal, podemos incrementá-lo dinâmicamente. Por exemplo:__

```javascript
aluno.altura = 1.90;
console.log(aluno);
// { nome: 'Arthur', idade: 20, altura: 1.90 }
```

- __Um objeto no javascript é uma coleção dinâmica de chaves valor.__ Nós também podemos __deletar um dos itens através do `delete variavel.valor`__
- __Um dos fatores mais interessantes do javaScript, é que nós podemos utilizar funções em nossos objetos. Chamamos isto de método.__
- por exemplo:

```javascript
 descrever: function () {
        console.log(`Meu nome é ${} e minha idade é ${}`);
    }
```

- __No nosso objeto `aluno`, estamos utilizando uma chave `descrever` e dentro dela temos uma função. Para que nós possamos pegar as chaves `nome` e `idade`, dentro de nossa função temos uma palavra reservada chamada `this`. O `this` diz respeito a um contexto de aonde ela está sendo utilizada. Como nossa função está dentro de um objeto, o `this` assume um objeto__

```javascript
 descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
```

- Vale lembrar que, __o uso da crase é o que chamamos de template string, onde podemos acessar valores através do uso da crase. Para acessarmos então a esta função, utilizamos:__

```javascript
aluno.descrever();
// Meu nome é Arthur e minha idade é 20
```

- __É importante lembrar que: Se nós inserirmos um novo nome ou idade nas próximas linhas, a impressão será feita dos novos dados atualizados__

```javascript
aluno.nome = 'Renan';
aluno.idade = 25;

aluno.descrever();
// Meu nome é Renan e minha idade é 25
```

- __Em resumo, um objeto é uma estrutura dinâmica de chave valor, na qual podemos adicionar funções às minhas chaves, já que funções também são objetos. Nós também podemos atualizar estas funções__

```javascript
aluno.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}
//  o `this.nome` também tem acesso às chaves
```

- Nós podemos acessar estes valores __através de uma sintaxe mais dinâmica. Podemos fazer isto declarando uma variável que receba um valor exatamente igual ao de dentro do nosso objeto. Assim, quando formos chamar apenas a chave que queremos, usamos `objeto[variavel]`, ficando praticamente assim:__

```javascript
const atributo = 'idade';
console.log(aluno[atributo])
// No console: 20
```

- __vale lembrar que quando declararmos o valor, ele deve ser uma string ou numeral. Através de uma string conseguimos acessar dinamicamente o atributo. E nós também podemos reatribuir valores: `atributo['nome'] = carlos`. Uma diferença entre ambas declarações, é que `pessoa.nome` precisamos saber exatamente o nome, enquanto `pessoa['nome']` não precisamos, pois é um texto que pode ser recebido como parâmetro__

#### Entendendo Classes

- Sabendo de objetos e como eles são criados, além de que podemos utilizar diferentes métodos para eles, __nosso objeto `aluno` tem um detalhe importante: Como adicionar mais de um aluno diferente?__
- Uma primeira opção seria repetindo o código, e só mudando os valores e chaves, __porém isto levaria a uma repetição de código. Não estaríamos fazendo um modelo do nosso objeto, só seriam objetos literais. Para que nós possamos dinamizar a criação de outros objetos, utilizaremos `classes`__
- Como nós estamos __definindo um modelo de pessoa, podemos criar uma classe chamada `Pessoa`. Esta classe tem como responsabilidade definir como são pessoas para que possam ser instânciadas__

```javascript
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
```

- __Importante lembrar que, quando formos declarar um método como `function`, não é necessário declarar ele__
- Com a estrutura montada, __a instância da `class Pessoa` é o `aluno`. `Pessoa` é uma classe que descreve como uma pessoa deve ser.__
- __Classe é uma definição do que deveria ser e uma instância é uma ocorrência da uma classe. Por exemplo, a definição de carro é que ele tem uma cor e o ano, e um carro branco de 2017 é uma instância de carro__
- Para nós definirmos uma nova pessoa, utilizamos o `const nomeDaPessoa = new Pessoa()` Ao imprimirmos no console `console.log(nomeDaPessoa)`, ele retorna `Pessoa {nome: undefined, idade: undefined}`, ou seja, __retornando a classe e o objeto__
- Com isto, devemos __atribuir tanto o nome quanto a idade para esta pessoa:__

```javascript
const nomeDaPessoa = new Pessoa();
nomeDaPessoa.nome = 'Arthur K';
nomeDaPessoa.idade = 20;

console.log(nomeDaPessoa)
// Pessoa { nome: 'Arthur K', idade: 20 }
```

- Quando adicionarmos outra pessoa, irá ter o mesmo resultado. __A `class` definiu a maneira como as pessoas devem ser, e as instâncias é uma ocorrência de uma pessoa, `nomeDaPessoa.nome`__

```js
const nomeDaPessoa = new Pessoa();
nomeDaPessoa.nome = 'Arthur K';
nomeDaPessoa.idade = 20;

console.log(nomeDaPessoa);
nomeDaPessoa.descrever();
// Meu nome é Arthur K e minha idade é 20
```

- __O `console.log` que definimos na nossa classe pode ser apenas chamado através do `.descrever()`, nossa função. Em resumo, isto ocorre pois definimos que `nomeDaPessoa` é uma nova `Pessoa()`__
- Foi dado o exemplo sobre o cálculo de IMC durante a aula, e foi feito um pequeno exercício prático pessoal:

```javascript
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
paciente1.nome = 'Bruno Moreira'
paciente1.idade = 22;
paciente1.peso = 70;
paciente1.altura = 1.75;
// Seu IMC é 22.85714285714285
```

- __Dizemos então que é uma Orientação a Objetos, na qual funciona corretamente pois classes são definições, objetos definidos, e utilizamos elas para nossas instâncias, ocorrências do nosso objeto, que seguirão o padrão definido em nossas classes.__
- Nós sabemos que temos nossas chaves, e vamos colocar que __é obrigatório que para existir uma pessoa, precisa tem nome e idade. Para isso utilizaremos o método `constructor`.__
  - __Este método é o que ocorre quando uma classe é instânciada__:

```javascript
    constructor() {
        this.nome = 'Arthur';
        this.idade = 20;
    }
```

- __Quando uma pessoa for instânciada, `const arthur = new Pessoa()`, e for chamada através do `arthur.descrever`, a resposta no console será `Meu nome é Arthur e minha idade é 20`__. Isto ocorre pois __toda vez que uma pessoa for instânciada, ela sempre passará pelo construtor. E também, nosso `constructor` pode receber parâmetros__

```js
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
```

- __Passando os parâmetros, dizemos que quando uma pessoa for instânciada, ela obrigatóriamente precisa inserir seu nome e idade, para que não exista erros, `Meu nome é undefined e minha idade é undefined`__
- também podemos saber o ano de nascimento desta pessoa, por exemplo:

```js
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade
    }

const arthur = new Pessoa('Arthur', 21);
arthur.descrever();
// Pessoa { nome: 'Arthur', idade: 21, anoDeNascimento: 2002 }
```

- __Quando trabalhamos com construtores, podemos preparar as variáveis, de forma a realizar os cálculos e funções que necessitamos__
- Também podemos inserir a resposta do nosso atributo: `console.log(Meu nome é ${this.nome}, minha idade é ${this.idade} e meu ano de nascimento é ${this.anoDeNascimento});`.
- __A orientação à objetos são definições a objetos, contratos de como deve ser um objeto e instâncias seguindo estes contratos, ocorrendo as novas instâncias das classes__
- Utilizando construtor no exemplo passado:

```js
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
// Seu IMC é 25.45111384369012
// Seu IMC é 31.1950948402596
```

- Agora que já entendemos sobre objetos, vamos praticar sobre eles e sua orientação. Agora iremos aplicar funções com objetos. __Para o exemplo, vamos comparar pessoas__
- Primeiro iremos __criar uma função chamada `comparaPessoa`, com dois parâmetros `p1` e `p2`, e nosso objetivo é comparar a idade das pessoas e ver quem é o mais velho__

```js
function comparaPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`)
    }
}
```

- Por fim, podemos imprimir estas condições:

```js
const arthur = new Pessoa('Arthur', 21);
const sergio = new Pessoa('sergio', 20);

comparaPessoa(arthur, sergio);
```

- __O que ocorreu foi: Temos a classe `Pessoa`, que tem um padrão definido do objeto. Nós instânciamos através das constantes `arthur` e `sergio`, passando os dois parâmetros definidos no nosso construtor. Criando o `if`, estamos tendo uma função que irá receber ambas constantes. Quando recebê-las, elas irão ser transformadas e assim sendo acessadas pelo laço condicional, funcionado corretamente e comparando as pessoas__
- Iremos aplicar estas regras para nossa função de calcular o imc:

```javascript
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

const paciente1 = new pessoaAtendida(87, 1.87);
tipoImc(paciente1);
// peso normal
```

- __O que está ocorrendo é que: iremos acessar o valor do nosso objeto passado. Dentro da `paciente1`, passamos os parâmetros para o construtor da nossa classe. Com os valores guardados, usamos o `calculo` pois ele é um atributo responsável por realizar o cálculo do imc. Para podermos comparar o imc e verificar o tipo da pessoa, utilizamos o `.calculo`. Desta forma, é impresso o tipo do IMC dependendo dos atributos inseridos na `pessoaAtendida`__

#### Praticando com Objetos e Classes

1. Crie uma classe para representar carros:

- Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado. Crie um método que dado a quantidade de quilometros e o preço de combustível nos dê o valor gasto em reais para realizar este percurso

```javascript
class Carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;        
    }

    percurso(distanciaKm, precoCombustivel) {
        return ((distanciaKm * this.gastoMedio) * precoCombustivel).toFixed(2)
    }
}

const carro = new Carros('Chevrolet', 'Vermelho', 1/12);
const carroCalculado = carro.percurso(100, 5.63);
console.log(carroCalculado);

const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.percurso(300, 5.63))
```

- __As variáveis dentro de uma classe ou objeto, chamamos de atributos__
- O que ocorreu foi: __Criamos uma classe `Carros`, onde recebe a marca, cor e gasto médio por KM. Com isto, criamos o método `percurso`, que irá receber os atributos de distancia em KM e preço do combustível. Ele irá retornar o cálculo da distância pelo `this.gastoMedio`, multiplicada pelo preço do combustível.__
- Este método __está esperando os valores serem inseridos ao ser declarado para que possa ser cálculado__
- Em resumo: __Temos uma classe `Carros`, na qual irá receber os valores e que o `percurso` terá uma gasto de acordo com a quantidade de kilometros e o preço da gasolina__
- Através disto, criamos um programa __orientado a objetos, que quando um novo carro é criado, fazemos apenas a adição dos requisitos para que o problema seja resolvido__

2. Crie uma classe para representar pessoas.

```js
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
```

- Através da classe e da função, é possível saber o imc e qual o tipo dele. Com isto, podemos entender um pouco de como a orientação à objetos funciona em javaScript

#### Entendendo Arrays

- Antes de continuarmos a mexer com orientação a objetos, que tivemos uma pequena introdução à ela, veremos as listas no JavaScript
- __As listas de conteúdo no js são chamadas de `arrays`.__ Estavámos lidando com fatores como __variáveis do tipo `const` e `let`, além de lidar com condicionais para cada situação existente do nosso problema. Assim como os objetos também. Agora, e se tivéssemos uma variável onde ela possui diferentes valores?__
- Suponhamos o exemplo abaixo:

```javascript
const alunos  = ['string', numeral];
```

- Para se declarar um array, __usamos o `[]`, no qual podemos inserir `strings` ou `numeros`. Com isto, armazenamos em uma única variável um conjunto de dados. Podemos até mesmo imprimir que o resultado será nossa lista__
- __É importante dizer que listas começam numeradas em 0, ou seja, o primeiro item da lista é 0__
- Se quisermos selecionar para impressão de apenas um aluno, por exemplo, podemos utilizar o `alunos[0, 1, 2...]`, __onde dentro dos `[numeroDoItem]` iremos inserir um número indicando a posição do nosso item__

```javascript
const alunos = ['Roberto', 'Maria'];
console.log(alunos[1]);
// 'Maria'
```

- __A notação de acesso de acesso é parecido com a notação de objetos, porém utilizando `[]`. De certa forma são um coleção de dados, onde listas são diretas e objetos `chave:valor`__
- Se nós perdirmos __uma posição que o `array` não tenha, retorna `undefined`__
- Agora que sabemos disto tudo, __como podemos remover ou adicionar um dos alunos à nossa lista?__
- Por estarmos trabalhando com `Arrays`, __temos diferentes métodos para quando acessamos nossa variável, todos eles manipulam nossa lista de uma forma diferente:__
  - `push`: Empurra um novo item para nosso array

```javascript
const alunos = ['Arthur', 'João'];
alunos.push('Kleber');
alunos[3] = 'Vinicius';
console.log(alunos);
```

- O resultado será `[ 'Arthur', 'João', 'Kleber', 'Vinicius' ]`
- Ou seja, __temos formas dinâmicas de adicionar um novo item no array utilizando métodos, e formas mais verbosas, indicando o número do item que será adicionado__
- Se nós mudarmos `alunos[2] = 'Vinicius`, __o `Kleber'` é substituído no array__
- __Nossa lista, não precisa estar com itens necessáriamente. Ela pode estar vazia e ser adicionados itens a ela. Assim como os itens que forem adicionados, poderem ser mudados, alterados, de acordo com os métodos da lista. E também, os itens da lista são variados entre seus tipos__

```javascript
const frutas = [];
frutas.push('Maçã', 'Pera');
console.log(frutas);
// [ 'Maçã', 'Pera' ]
```

- Podemos também remover um item utilizando `pop()`, __O método pop() remove o último elemento de um array e devolve esse elemento. Este método altera o comprimento de um array. Podemos também especificar:__

```javascript
const frutas = [];
frutas.push('Maçã', 'Pera');
frutas.pop();
// Remove 'Pera'
frutas.pop();
// Remove 'Maçã'
console.log(frutas);
// Retorna []
```

- Desta forma, __podemos alterar totalmente nosso array desta forma, lembrando que ele sempre irá retirar o último item da lista de arrays. Podemos ver isto com: `console.log(frutas.pop());`, que nos mostra qual foi o item retirado da lista, no caso "Pera"__
- Se nós quisermos retirar __o primeiro item do nosso array, podemos utilizar o método `shift()`__

```javascript
const frutas = [];
frutas.push('Maçã', 'Pera', 'Banana', 'Ameixa');
console.log(frutas.pop());\
// Retira 'Ameixa'
console.log(frutas.shift());
//  Retira 'Maçã'
console.log(frutas);
// Resulta em [ 'Pera', 'Banana' ]
```

- Também podemos remover __um único item específico da lista também__
- Vamos supor em um sistema de média de alunos:

```javascript
const notas = [];
notas.push(5, 7, 8, 2, 5);

console.log(notas)
// [ 5, 7, 8, 2, 5 ]
console.log(notas.length)
// 5
```

- __Sabemos que para realizar a média, necessitamos somar tudo e dividir pela quantidade de notas. Nossa lista está sendo dinâmica, e para sabermos o tamanho da nossa lista, podemos utilizar o método `lenght()`. No nosso caso, saberemos que possuímos 5 itens na nossa lista__
- Para podermos realizar a soma, __temos de saber percorrer posição à posição da nossa lista__

```js
// Muito verbosa e dificíl de entender
const notas = [];
notas.push(5, 7, 8, 2, 5);

const soma1 = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma1/5);
```

- __O maior problema desta forma, é que temos que saber os números exatos de quantidade de notas para poder realizar o cálculo, sendo muito verbosa e difícil de entender__
- ___O que nós precisamos aprender são estruturas de repetição, que vão percorrer a lista, pegando os valores e somando-os. Existem várias estruturas de repetição, assim como as condicionais que já vimos__

#### Entendendo Estruturas de repetição

- Notamos que, __quando escrevemos daquela forma, repetimos a seleção de cada item para que seja somado. Colocando uma estrutura própria, ficaria muito mais fácil de realizar o cálculo__
- Utilizaremos a __estrutura `for`. O `for`, ou, `para`, é uma estrutura que irá percorrer nosso array:__

```javascript
for (let index = 0; index < array.length; index++) {
    // ...
}
```

- __O `for` funciona especificamente para percorrer uma quantidade de vezes. `let index = 0` é responsável por controlar em qual vez estamos no nosso loop, nossa iteração. Também normalmente utilizamos `let i = 0`, para identificar mais facilmente. Praticamente, o valor inicial de iremos começar, além de geralmente utilizar 0 pois estamos iterando uma lista que começa na posição 0__
- __`index < array.length`: Estrutura condicional que retorna um booleano, que vai dizer se entra ou não no nosso `for`. Por exemplo: `i < 10`, enquanto 1 for menor que 10, estará dentro do loop__
- __`index++`: O que irá acontecer depois de executar o `for`. Normalmente, utilizamos `i++`, para dizer que irá para a próxima variável que será analisada__
- Em resumo:

```javascript
for (let i = 0, i < 10, i++){
    // ...
}

// mesma coisa que:
let i = 1;
i = i + 1;
```

- __A partir do primeiro item, enquanto `i` for menor que 10, execute o código abaixo, sempre adicionando mais 1 ao nosso `i` para verificarmos todos os valores. Ele irá executar enquanto a condição for atendida, quando não estiver mais correta, retorna `false`__

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9

for (let i = 0; i < notas.length; i++) {
    console.log(i);
}
// 0 1 2 3 4
```

- __Ao usarmos com nossas notas, vemos que enquanto i for menor ao tamanho delas, será impresso a quantidade de itens e o número de cada__
- Sabendo que podemos utilizar em números, __para `Strings` é diferente, mas também possível de verificar quantos caracteres temos:__

```js
const nome = 'Ronaldo dos Santos';
for (let i = 0; i < nome.length; i++) {
console.log(i)
}
// 0 1 2 3 4 5 6... 17
```

- __Como queremos visualizar a quantidade de letras, utilizamos o `nome.length`. Diferente dos números, as strings são um array de caracteres. A sintaxe colocada, transforma a frase em um array de caracteres__
- Para visualizarmos isto:

```js
const nome = 'Ronaldo dos Santos';
for (let i = 0; i < nome.length; i++) {
console.log(nome[i])
}
// R o n a l d o  d o s s a n t o s
```

- No console será impresso __cada caractere, por que estamos pegando a posição de cada letra, através da mesma notação da lista, o `nome[i]`, `nome` na posição `i`, e isto funciona justamente pela string ser um array de caracteres. Ela é uma lista especial, com métodos próprios, que podem ser modificados e até mesmo adicionados__
- Lembrando do código no autocomplete, ficaria assim:

```js
for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)
}
```

- Assim, __podemos verificar todas as letras e imprimí-las. Em resumo, o `nome[i]`, está dizendo que, na variável nome, onde temos nossa string, verifique a quantidade de caracteres, e selecione as letras e não a quantidade de itens__
- Agora podemos aplicar estes conceitos no nosso cálculo de média:

```js
const notas = [];
notas.push(5, 7, 8, 2, 5, 6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const mediaNotas = soma / notas.length;
console.log(mediaNotas);
```

- O que ocorre é: __com o array, iremos selecionar cada item dele através do `notas[i]`, com isto, criaremos uma variável mutável `let soma = 0`, que irá dizer que vem do inicío, e por fim, iremos inserir no nosso laço a atribuição da soma com `soma = soma + nota`. Por fim, teremos a impressão da nota, e dividir pela quantidade de itens do array, na variável `mediaNotas`__

#### Como Depurar nosso código

- Conforme aprendemos novas coisas, mais desafios vão existindo, assim como a complexidade de casos quando avançamos. Porém, o mais seguro a se fazer é __depurar o código__, verificando se __foi feito algo errado, se a execução dele está correta ou não.__
- Naturalmente, __o Vscode já tem isto implementado, mas veremos outras formas também. Podemos inserir pontos de interrupção, nos quais podemos verificar linha por linha nosso código e verificar se tudo está ocorrendo corretamente__
- Para isso, __usaremos a ferramenta de executar e depurar no modo de configuração node.js__
- Através disto, __podemos verificar a execução do nosso código e se existem problemas. Além disto, ele pode inspecionar cada parte do código, trazendo especifidade, e também se os itens são objetos, listas, e diferentes variáveis__
- A depuração é muito importante, __para entender de fato todo nosso código__

#### Exercícios

- Criar um programa onde, dado um número, seja exibida sua tabuada:

```javascript
const listaTabuada = []
listaTabuada.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

for (let i = 0; i <= listaTabuada.length; i++) {
    console.log(i * 5);
}
```

- Este pequeno código __percorre toda a lista, onde nós podemos inserir nosso valor, e ele irá multiplicar de acordo com o número da lista__
- __Quando nós depuramos um código, entendemos cada vez mais sobre os resultados e se toda etapa funcionou corretamente__

- Crie um programa que seja capaz  de percorrer uma lista de números e imprima cada número par encontrado

```javascript
const numeros = [];
numeros.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}
```

- Através deste código, __verificamos nossa lista, e para cada item teremos a condição `numero % 2 === 0`, onde se o resto da divisão for 0, ele é par, e imprimindo todos os números pares da nossa lista__
- Podemos fazer da seguinte maneira também:

```javascript
const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);
```

- Essa função __irá imprimir apenas os valores pares, de forma que nossa lista, terá a adição de novos elementos pares apenas quando a condição for atendida. Isto é representado por: `numerosPares.push(i)`, já que `i` é a iteração de cada elemento inserido na lista__

#### Desvendando as funções gets e print

- Agora que já vimos sobre variáveis, operadores, condicionais, funções, objetos, classes, listas e agora iremos ver sobre __importação e exportação em JavaScript__
- __Precisamos aprender sobre como podemos organizar nosso código, de forma que, não fique "cheio" de funções, variáveis e tudo que vimos em um único arquivo__
- Para aprendermos um pouco mais sobre __distribuição de responsabilidade, como encapsular os códigos, de forma a ficar mais simples, menos complexa e mais fácil de ler, iremos trabalhar com importação de arquivos__
- Vale destacar que: __a importação utilizando node e a importação utilizando o browser, React e ademais, funcionam de formas diferentes__
- Aqui veremos com mais detalhes os __princípios de segmentação do código__
- Para podermos fazer a importação de arquivos, utilizaremos a forma mais simples possível, ultimamente no js temos o __`module exports`__, uma sintaxe mais moderna, bem mais utilizada no próprio node e no React.
- __Para poder utilizar o `module exports` no Node, temos que configurar o `package.json` e outras etapas diferentes__
- Afim didático, será usada a forma mais simples de __importação e exportação__
- Iremos criar um arquivo chamado `funcoes_auxiliares.js`. É interessante para aprendermos e entendermos como a plataforma da DIO funciona por exemplo.
- Quando nós __realizamos os desafios de código, existem duas funções existentes que são responsáveis pelos códigos apresentados, que são o `gets` e o `print`__
  - o `gets` pega __uma leitura como se fosse um `input` e o `print` como se fosse um `console'log`. Por baixo dos panos da plataforma, há um "motor" que analisa os códigos e os corrige automaticamente__
  - Simularemos o `gets` e o `print`
- Primeiro iremos definir duas funções:

```javascript
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}
```

- Criamos uma função __que imprime o texto, a `print`, e a `gets`, que vai passar o texto. Antes de fazermos isto, no `gets()` vamos "mocká-lo". Mockar é um termo utilizado para simulação. É como se estivéssemos simulando uma leitura__
- Agora, iremos criar um novo arquivo chamado `main.js`, __onde nós iremos realizar a importação das funções anteriores__
- Para podermos fazer isto em node, __utilizaremos o `require()`__
  - De acordo com a __documentação do Node:__
  - CommonJS modules, ou, __módulos do JS comum, é a forma original de encapsular códigos javascript. Cada arquivo em Node.js é tratado com um módulo separado__
  - utilizando a sintaxe `require(./caminhodoarquivo.js)`, __o node irá requerer o arquivo que precisamos.__
  - É importante que __os módulo que estamos importando, tenha as funções acompanhadas por `exports.nomeDaFunção`. As funções e os objetos são adicionados à raiz de um módulo por meio da especificação de propriedades adicionais no objeto especial de exportação.__
- __Quando estamos importando algo, estamos importando algo que está sendo exportado__
- Para podemos exportar algo, utilizamos:

```javascript
module.exports = {
    gets, print
}
```

- __Quebrando nosso código. Temos um objeto `module`, e ele possui um atributo chamado `exports`. Tudo que estar dentro do atributo, será exportado. Como sabemos dos objetos, podemos inserir um objeto literal, e dentro dele iremos inserir as nossas funções__

```js
// Relembrando objetos:
const objeto = {
    nome: 'Arthur',
    numero: 12
}
// sintaze do module
module.exports = {
    gets: gets,
    print: print
}
```

- __`module` é um objeto, onde estamos exportando ele. E também, nosso objeto tem suas chaves, e nela definimos os valores, as nossas variáveis. Não é necessário atribuir, mas é uma boa prática também__
- Poderiamos fazer também a __exportação direta da função, já que o `module` já vem com um objeto vazio normalmente, ficando `module.exports.gets = gets;`__
- Para verificar se nossa constante `funcoes` está recebendo as duas funções, podemos imprimir a nossa constante:

```javascript
const funcoes = require('./funcoes_auxiliares');

console.log(funcoes)
```

- __O resultado no console é `{ gets: [Function: gets], print: [Function: print] }`. Onde temos um objeto, onde temos um método `gets` que está atribuído nossa função, assim como o `print`__
- Se chamarmos a função e executá-la, ficará:

```javascript
const funcoes = require('./funcoes_auxiliares.js');

console.log(funcoes.gets())
console.log(funcoes.print('Fui importado!'))
// 10
//  Fui importado!
```

#### Object Destructuring

- __Um fator de extrema importância:__
  - __Quando temos um objeto, podemos fazer um `Object Destructuring`. Nós podemos destruir um objeto. Pode ser qualquer objeto,por exemplo nosso objeto `pessoa`:__
  
	```javascript
	//  Objeto
	const pessoa = {
			nome: 'Arthur'
	};
	//  Objeto desestruturado
	const {nome} = pessoa;
	// É o mesmo que:
	const nome = pessoa.nome;
	```

  - __Podemos pegar vários atributos, e somente fazer isto para realizar o destructuring. Podemos aplicar isto na nossa importação__

	```javascript
	const {gets, print} = require('./funcoes_auxiliares.js');

	print(gets());
	// 10
	```	

	- __Pegamos o objeto que estava lá dentro do `funcoes_auxiliares`, criei duas variáveis `gets` e `print` que estava recebendo como objeto `get` e `print`. É uma forma de fazer bastante código com pouca linha__
  - Dessa forma, __simulamos os exercícios da plataforma por exemplo, e ainda podemos depurá-lo__
- Recapitulando, __estamos importando algo que está sendo exportado sempre.__
- Uma coisa interessante de se falar é: __Como funciona o ciclo de vida da nossa execução? Quando importamos a primeira vez, o node.js executa todo o código e prepara o objeto, e ai ele irá dizer que o arquivo contém uma saída o objeto `gets`. Se importarmos novamente nosso arquivo, ele não irá ler ele inteiro novamente pois ele já sabe que já importou aquele objeto pronto__

#### Dominando Object Destructuring

- Object destructuring pode ser dito como: __desestruturação de objetos JavaScript, que atribui propriedades de um objeto a variáveis individuais.__
