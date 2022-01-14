/*
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

function substituirNumerosPares(array) {
  if (!array.length) { // verifica se o array existe
    array = -1;
  }
  if (!array.length) { // podemos verificar se ele está vazio usando .length, Isso retornará 0, porque há 0 itens no array; o operador ! nega uma expressão. Ou seja, podemos usá-lo para retornar true se o array estiver vazio.
    array = -1;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        console.log("Você já é zero!");
      } else if (array[i] % 2 === 0) {
        console.log(`Substituindo ${array[i]} por 0...`);
        array[i] = 0;
      }
    }
  }

  console.log(array);
}

let array = [];
substituirNumerosPares(array);

(function () {
  console.log(this);
})();
