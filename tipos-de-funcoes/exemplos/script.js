// Funções Callbacks: Uma função passada como argyumento para outra.
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

console.log("____________________________________________________________________")

// Objeto "arguments": Um array com todos os parâmetros passados quando a função foi invocada.
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

