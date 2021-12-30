// TIPOS PRIMITIVOS

// Boolean:
var vOuf = false;
console.log(vOuf); // para imprimir o valor da variável no console
console.log(typeof(vOuf)); // para verificarmos o tipo da variável

// Number:
var numeroQualquer = 1;
console.log(numeroQualquer); // para imprimir o valor da variável no console
console.log(typeof(numeroQualquer)); // para verificarmos o tipo da variável

// String:
var nome = "Nath";
console.log(nome);
console.log(typeof(nome));


 // COMO DECLARAR

 // var
 // var sem valor definido:
 var variavel1;
 console.log(variavel1);

 // var com valor definido e em seguida substituido:
 var variavel2 = "Primeiro valor variavel2";
 console.log(variavel2);
 variavel2 = "Substituido valor da variavel2";
 console.log(variavel2);

 // let
 // let sem valor definido:
 let variavel3;
 console.log(variavel3);

 // let com valor definido e em seguida substituido:
 let variavel4 = "Primeiro valor variavel4";
 console.log(variavel4);
 variavel4 = "Substituido valor da variavel4";
 console.log(variavel4);

 // const
 const constante = "Constante";
 console.log(constante);
 // constante = "algo"; // dá erro


 // ESCOPO

 // Escopo global:
 var escopoGlobal = "Global";
 console.log(escopoGlobal);

 // Escopo local:
 function escopoLocal () {
  let escopoLocalInterno = "Local";
  console.log(escopoLocalInterno)
 }
 // console.log(escopoLocalInterno); // Da um erro quando chamamos essa variável local aqui fora do escopo (escopoLocalInterno is not defined), pois ela não está acessível em todo código, para isso é necessário colocar o console.log dentro da função e chamar a função aqui embaixo
 escopoLocal();


 // ATRIBUIÇÃO, COMPARAÇÃO E COMPARAÇÃO IDENTICA

 // Atribuição:
 var atribuicao = "Atribuimos um valor a uma variável com o sinal de = ";
 console.log(atribuicao);

 // Comparação:
 var comparacao = 0 == 0; // nesse caso vai retornar true
 console.log(comparacao);
 var comparacao = 0 == 1;
 console.log(comparacao); // nesse caso vai retornar false

 // Comparação idêntica:
 var comparaIdentica = 0 === 0; // nesse caso vau retornar true
 console.log(comparaIdentica);

 
// OPERADORES ARITMÉTICOS, RELACIONAIS E LÓGICOS

// OPERADORES ARITMÉTICOS

// Adição:
var adicao = 10 + 2; // resulta em 12
console.log(adicao);

// Subtração:
var subtracao = 10 - 2; // resulta em 8
console.log(subtracao);

// Multiplicação:
var multiplicacao = 10 * 2; // resulta em 20
console.log(multiplicacao);

// Divisão real:
var divisaoReal = 10 / 2; // resulta em 5
console.log(divisaoReal);

// Divisão inteira:
var divisaoInteira = 10 % 2; // resulta em 0
console.log(divisaoInteira);
var divisaoInteira = 11 % 2; // resulta em 1 (resto da divisão)
console.log(divisaoInteira);

// Potenciação:
var potenciacao = 10 ** 2;
console.log(potenciacao); // resulta em 100


// OPERADORES RELACIONAIS

// Maior que:
var maiorQue = 1 > 2; // vair retornar false
console.log(maiorQue);
var maiorQue = 2 > 1; // vair retornar true
console.log(maiorQue);

// Menor que:
var menorQue = 5 < 6; // vai retornar true
console.log(menorQue);
var menorQue = 6 < 5; // vai retornar false
console.log(menorQue);

// Maior ou igual a:
var maiorOuIgual = 10 >= 10; // vai retornar true
console.log(maiorOuIgual);

// Menor ou igual a:
var menorOuIgual = 10 <= 10; // vai retornar true
console.log(menorOuIgual);


// OPERADORES LÓGICOS

// && "e" - precisa que todos os valores sejam verdadeiros
var e = true && false; // vai retornar false
console.log(e);
var e = true && true; // vai retornar true
console.log(e);

// || "ou" - precisa que ao menos um valor seja verdadeiro
var ou = true || false; // vai retornar true
console.log(ou);
var ou = false || false; // vai retornar false
console.log(ou);

// ! "não" - inverte o valor do true para false ou vise-versa
var nao = !true; // vai retornar false
console.log(nao);
var nao = !false; // vai retornar true
console.log(nao);
