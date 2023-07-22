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