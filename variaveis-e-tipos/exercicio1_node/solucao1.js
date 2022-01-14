/*
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

//primeira solução:
function verificarPolindromo(string) {
  if(!string) return "string inexistente! Tente novamente.";
  
  return string.split("").reverse().join("") === string;
}


// segunda solução 
function verificarPolindromo(string) {

  if(!string) return "string inexistente! Tente novamente.";

  let stringLowerCase = string.toLowerCase();
  let stringReverse = string.split('').reverse().join('');

  if (stringLowerCase === stringReverse) {
    return("Sim!")
  } else {
    return("Não!")
  }

}

console.log(verificarPolindromo(""));