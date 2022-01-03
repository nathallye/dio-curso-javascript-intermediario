// VARIÁVEIS (VAR E LAST)
// - Usamos o camelCase para declararmos.

// Conceito de Hoisting: atribuir valor a uma variável, antes de ser declarada(é possível apenas com o tipo var - variáveis globais).
numberOne = 1; 

console.log(numberOne + 2); // aqui conseguimos chamá-la no console


// Conceito de Escopo: var e let tẽm escopos diferentes.
var firstName = 'Nathallye'; // declarando variáveis c/ a palavra reservada var.
var lastName = 'Tavares'; // declarando variáveis c/ a palavra reservada var.

if (firstName === 'Nathallye') {
  var firstName = 'Paulo'; // redeclarando a variável firstName com o valor 'Paulo' (esse valor vai ficar disponivel em todo código).
  let lastName = 'Bacelar'; // declarando a variável lastName com a palavra reserada let o que significa que ocupa um outro espaço em memória e só ficará disponível dentro do bloco if (escopo).

  console.log(firstName, lastName); // isso vai retornar 'Paulo Bacelar'.
}

console.log(firstName, lastName); // já isso, vai retornar 'Paulo Tavares', pois estamos fora do bloco e a variável 'lastName' tem o valor 'Tavares'.

console.log('___________________________________________________________________');

// CONSTANTES 
// - Escopo de bloco;
// - Não pode ser redeclarada e nem reatribuida; 
// - Não faz hoisting (precisa ser inicializada como const antes da atribuição - diferente da var que conseguimos utiliza-la sem ser declarada).

const FIRST_NAME = 'Stephany'; // declaramos as consts usando o SNAKE_UPPER_CASE

console.log(FIRST_NAME);
