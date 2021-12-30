// ESTRUTURAS DE DECISÃO

var jogador1 = 2;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') : console.log('Jogadores inválidos!');

// if / else if/ else
if (jogador1 > 0 && jogador2 == 0) {
  console.log('Jogador 1 marcou ponto.');
  placar = jogador1 > jogador2;
} else if (jogador2 > 0) {
  console.log('Jogador 2 marcou ponto.');
  placar = jogador2 > jogador1
} else {
  console.log('Ninguém marcou ponto.');
}

// Usando switch/case
switch (placar) {
  case placar = jogador1 > jogador2:
    console.log('Jogador 1 ganhou!');
    break;
  case placar = jogador2 > jogador1:
    console.log('Jogador 2 ganhou!');
    break;
  default:
    console.log('Ninguém ganhou!')
    break;
}

console.log('___________________________________________________________________');

// LAÇOS DE REPETIÇÃO

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' }

// for - Executa uma instrução até que ela seja falsa
for (let index = 0; index < array.length; index++) {
  console.log(index);
}

// for/in - Funciona como uma repetição a partir de uma propriedade (exibe o indice do array e do objeto).
for (let i in object) { // podemos usar apenas o "i in object" sem informar que é uma variável (let), pois o js já compreende que é uma variável de estado
  console.log(i);
}
for (i in array) { 
  console.log(i);
}

// for/of - Funciona como uma repeição a partir de um valor (exibe o valor de cada indice do array).
for (let i of array) {
  console.log(i);
}
// o for/of não funciona com objetos, pois as propriedades variam, diferentes do índice em um array que sempre serão números inteiros. Para pegar o valor mesmo assim basta fazer:
for (i of object.propriedade1) { // Porém cada caractere do valor será impresso em uma linha
  console.log(i);
} 

console.log('___________________________________________________________________');

// while - Executa uma instrução enquanto determinada condição for verdadeira, a verificação é feita antes da execução.
var a = 0;
while (a < 10) {
  a++;
  console.log(a);
}

console.log('___________________________________________________________________');

// do/while - Executa uma instrução até que determinada condição seja falsa, a verificação é feita depois da execução
var a = 0;
do {
  a++;
  console.log(a);
} while (a < 10);