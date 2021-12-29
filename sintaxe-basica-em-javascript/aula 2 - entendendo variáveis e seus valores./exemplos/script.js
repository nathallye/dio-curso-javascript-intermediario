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
 var comparaIdentica = "0" === 0; // vai retornar false, pois "0" é uma string e 0 é number
 console.log(comparaIdentica);
 var comparaIdentica = 0 === 0; // nesse caso vau retornar true
 console.log(comparaIdentica);

 
