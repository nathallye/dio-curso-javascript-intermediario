/*
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

function verificarPolindromo(string) {

  if(!string) return "string inexistente! Tente novamente.";
  
  for (let i = 0; i < string.length / 2; i++) { // fazemos a metade do loop, pois em cada checagem estaremos comparando duas letras(começo e fim) ao mesmo tempo
    if (string[i] !== string[string.length - 1 - i]) { // se as letras do inicio e do fim forem diferentes
      return false;
    }
  }
  return true; // se nada parar minha função, retornar true
}

console.log(verificarPolindromo("ama"));
