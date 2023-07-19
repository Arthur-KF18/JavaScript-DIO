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

##### Desafio:

- Criar um programa para calcular o valor de uma viagem:
  - 3 variáveis, sendo elas:
  1 - Preço do combustível;
  2 - Gasto médio do combustível;
  3 - Distância em KM da viagem;
- Imprimir no console o valor que será gasto de combustível para realizar esta viagem