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

-  Porém, __funções que não retornam nada, são chamadas de `procedimentos`, já que elas quando serem chamadas irão ser executadas, mas não retornam um parâmetro__
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