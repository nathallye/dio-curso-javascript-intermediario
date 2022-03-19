# Curso JavaScript Intermediário

## Variáveis e tipos
### VARIÁVEIS (VAR & LAST)
Usamos o camelCase para declararmos.

#### Conceito de Hoisting: 
Atribuir valor a uma variável, antes de ser declarada(é possível apenas com o tipo var - variáveis globais).

```JavaScript
numberOne = 1; 

console.log(numberOne + 2); // aqui conseguimos chamá-la no console
```

#### Conceito de Escopo: 
**var** e **let** têm escopos diferentes.

``` JavaScript
//declarando variáveis c/ a palavra reservada var:
var firstName = 'Nathallye'; 
var lastName = 'Tavares'; 

if (firstName === 'Nathallye') {
  var firstName = 'Paulo'; // redeclarando a variável firstName com o valor 'Paulo' (esse valor vai ficar disponivel em todo código).
  let lastName = 'Bacelar'; // declarando a variável lastName com a palavra reserada let o que significa que ocupa um outro espaço em memória e só ficará disponível dentro do bloco if (escopo).

  console.log(firstName, lastName); // isso vai retornar 'Paulo Bacelar'.
}

console.log(firstName, lastName); // já isso, vai retornar 'Paulo Tavares', pois estamos fora do bloco e a variável 'lastName' tem o valor 'Tavares'.
```

### Constantes(CONST)

- Escopo de bloco;
- Não pode ser redeclarada e nem reatribuida; 
- Não faz hoisting (precisa ser inicializada como const antes da atribuição;
- Diferente da var que conseguimos utiliza-la sem ser declarada).

```JavaScript
const FIRST_NAME = 'Stephany'; // declaramos as consts usando o SNAKE_UPPER_CASE

console.log(FIRST_NAME);
```

## Tipos de funções

### Funções declarativas
São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada **"function"** seguida do nome da função, parênteses **"()"** e chaves **"{}"**.

``` JavaScript
function nomeDaFuncao() {
  ${instrucao};
}
// o nome da função é obrigatório;
```

### Expressões de Funções
São funções atribuídas à expressões. A nomeação das funções por expressão é opcional.

Ex. 1: 
``` JavaScript
var funcao = function nomeDaFuncao() {
  ${instrucao};
}
```

Ex. 2: 
``` JavaScript
var funcao = function() {
  ${instrucao};
};
```

### Arrow Function
São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas.
Devem ser declaradas com parênteses **"()"**, seguido de **"=>"** e depois chaves **"{}"**.

``` JavaScript
var funcao = () => {
  ${instrucao};
}
```

### Funções callbacks
Uma função passada como argyumento para outra.

Exemplo:

``` JavaScript
const calculo = function(operacao, n1, n2) { // operação vai ser uma função
  return operacao(n1, n2); // função operação recebe os parãmentros n1 e n2
}

const soma = function(n1, n2) {
  return n1 + n2;
}

const subtracao = function(n1, n2) {
  return n1 - n2;
}

const resultadoSoma = calculo(soma, 1, 2); // passando os parametros da função calculo que recebe como parâmetro da função operação(soma) e seus respectivos parâmetros(n1, n2)
const resultadoSubtracao = calculo(subtracao, 1, 2);

console.log(resultadoSoma);
console.log(resultadoSubtracao);

```

#### Objeto "arguments" 
Um array com todos os parâmetros passados quando a função foi invocada.

Exemplo:

```JavaScript
function findMax() {
  let max = -Infinity;
  
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  console.log(max);
}

findMax(1, 2, 90, 3, 4, 5);
```

## Map, filter e reduce
### Map
- Cria um novo array;
- Não modifica o array original;
- Realiza as operações em ordem.

```JavaScript
array.map(callback, thisArg);
```

**Callback:** função a ser executada em cada elemento;
**thisArg (opcional):**  valor de ‘this’ dentro da função de callback.

Exemplo:

``` JavaScript
const tomate = {
  value: 1
};

const maca = {
  value: 2
};

const laranja = {
  value: 3
};

// Com o parâmetro "this"

function mapComThis(arr, thisArg) { // thisArg é o objeto utilizado como argumento
  return arr.map(function(item) { // Sem usar Arrow Function(Usando função sem nomes como callback)
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2, 3, 4, 5];

console.log('this -> tomate', mapComThis(nums, tomate));
console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));


console.log('_________________________________________')


// Sem o parâmetro "this"

function mapSemThis(array) {
  return array.map(function(item) {
    return item * 2;
  });
  // return array.map((item) => item * 2) // Usando Arrow Function ficaria assim
}

const a = [6, 7, 8, 9, 10];

console.log(mapSemThis(a));
console.log(a); // array original não é modificado
```
### Filter
- Cria um novo array;
- Não modifica o array original.

```JavaScript
array.filter(callback, thisArg);
```

**Callback:** função a ser executada em cada elemento;
**thisArg (opcional):**  valor de ‘this’ dentro da função de callback.

Exemplo:

```JavaScript
function filter(array) {
  return array.filter(searchNumsPairs); // aqui vamos retornar os numeros filtrados
}

function searchNumsPairs(item) { // essa é a função callback do filter
  if (item % 2 === 0)
  return item; // aqui vamos retornar somente os pares
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filter(myArray));
```

### Reduce
- Executa uma função em todos os elementos do array, retornando um valor único.

```JavaScript
array.reduce(callbackFn, initialValue);
```

- **Callback:** função a ser executada a partir do acumulador;
- **initialValue:** valor sobre o qual o retorno final irá atuar.

```JavaScript
const callbackFn = funcition(accumulator, currentValue, index, array) {
  // do something
} 

arrray.reduce(callbackFn, initialValue);
```
- **accumulator:** acumulador de todas as chamadas de callbackFn;
- **currentValue:** elemento atual sendo acessado pela função.

Exemplo:

``` JavaScript
function reduceExemple(array) {
  return array.reduce(function(prevValue, currentValue) { // prevValue: acumulador
    console.log({ prevValue });
    console.log({ currentValue });
    return prevValue + currentValue;
  }, 0); // 0 = valor inicial
}

const myArray = [1, 2, 3];

console.log('A soma do array é:', reduceExemple(myArray));
```

``` JavaScript
const listaProdutos = [
  {
    name: 'sabao em po',
    value: 20.00
  },
  {
    name: 'cereal',
    value: 10.00
  },
  {
    name: 'salame',
    value: 10.00
  },
  {
    name: 'toalha',
    value: 30.00
  }
]

const saldoDisponivel = 100.00;

function calculaSaldo(saldoDisponivel, listaProdutos) {
  return listaProdutos.reduce(function (prevValue, currentValue, index) {

    console.log('Rodada', index + 1);
    console.log('prevValue', prevValue);
    console.log('currentValue:', currentValue["value"]);
    console.log('____________')

    return prevValue - currentValue.value;
    
  }, saldoDisponivel);
}

console.log('O seu troco é: R$', calculaSaldo(saldoDisponivel, listaProdutos));
```

## Módulos
Módulos arquivos Javascript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

**Algumas vantagens são:**
- Organização do código;
- Compartilhamento de variáveis em escopos diferentes;
- Explicita as dependências dos arquivos.

### Exportar 

#### Named export
Quando queremos exportar mais de uma coisa de um arquivo e fazemos isso de forma individual.

Primeira forma, utilizando a palavra reservada **export** no inicio da função:

``` JavaScript
export function mostraldade(pessoa) {
  return `A idade de $(pessoa.nome} é ${pessoa.idade}`;
}
export function mostracidade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}
export function mostraHobby(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}
```

Segunda forma, utilizando a palavra reservada **export** no final do código:

``` JavaScript
function mostraldade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
function mostracidade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}
function mostraHobby(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}
export {
  mostraidade,
  mostracidade,
  mostraHobby
}
```

#### Default export
- Só pode haver um por arquivo;
- Será o retorno padrão do seu arquivo;
- Retorna só aquela parte do arquivo.

``` JavaScript
function mostraldade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}
function mostracidade(pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.cidade}`;
}
function mostraHobby( pessoa) {
  return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
}
export {
  mostraldade,
  mostracidade,
}

export default mostraHobby;
```

### Importar
No inicio do arquivo.

#### Named exports

``` JavaScript
import {funcao, variavel, classe} from './arquivo.js'
```

#### Default exports

``` JavaScript
import valorDefault from './arquivo.js'
```

#### Trocando nome de imports

``` JavaScript
import { arquivo as Apelido } from './arquivo.js';

Apelido.metodo( );
```

#### Importando todos os dados de um arquivo
``` JavaScript
import * as INFOS from './arquivo.js';

INFOS.metodoA( );

console.log(INFOS.variavel);
```

### Vinculando ao HTML

``` HTML
<script type="module" src="./main.js"></script>
```

### Detalhes sobre os módulos
- Módulos sempre estão em “strict mode";
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locais, é necessário utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar, sempre utilize "./" como ponto de partida.