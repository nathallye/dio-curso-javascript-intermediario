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