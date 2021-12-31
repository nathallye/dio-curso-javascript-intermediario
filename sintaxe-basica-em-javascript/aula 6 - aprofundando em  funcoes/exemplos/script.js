// TIPOS DE FUNÇÕES 

// Declarativas: Obrigatório dar nome a elas

function funcao(parametro1, parametro2) {
  console.log(parametro1, parametro2); // Bloco de instruções
}

funcao("Parâmetro1 da Função Declarativa.", "Parâmetro2 da Função Declarativa."); // Chamando a função

console.log('___________________________________________________________________');


// Expressões de Funções: São funções atribuídas à expressões. A nomeação dessas funções é opcional.

var funcao = function funcao() {
  console.log("Essa mensagem vem de uma Expressão de Função.");
}
funcao();

//ou
var funcao = function() { // O JS já atribui automaticamente o nome da var a função
  console.log("Essa mensagem vem de uma Expressão de Função.");
}
funcao();

console.log('___________________________________________________________________');


// Arrow(fecha) Function: São funções de expressões de sintaxe curta. Sempre serão anônimas, e portanto não podem ser nomeadas. Devem ser declaradas com parênteses "()", seguido de "=>" e depois chaves "{}".
var funcao = () => {
  console.log("Essa mensagem vem de uma Arrow Function.")
}

funcao();

console.log('___________________________________________________________________');


// Funções aritméticas
// (Exemplos no arquivo calculadora.js)

