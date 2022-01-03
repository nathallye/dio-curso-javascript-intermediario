function aplicacao() {

  alert('Aplicação para verificar se uma palavra/string é um políndromo.')

  let input = prompt('Digite uma palavra ou uma frase:');

  if (!input) { //; verificar se o input não é null
    alert('Parametros inválidos, tente novamente!');
    verificarPolindromo(input);
  } else {
    verificarPolindromo(input);
  }

}

function verificarPolindromo(input) {

  let stringNoSpacesNoCommas = input.replaceAll(' ', '').replaceAll(',', '');
  //console.log(stringNoSpacesNoCommas);

  let stringLowerCase = stringNoSpacesNoCommas.toLowerCase();
  //console.log(stringLowerCase);

  let stringReverse = stringLowerCase.split('').reverse().join(''); // converter em uma lista/array(split), reverte esse array(reverse) e o join converte esse array em uma string
  //console.log(stringReverse);

  if (stringLowerCase == stringReverse) {
    alert('Sim, é um políndromo.');
  } else {
    alert('Não é um políndromo.');
  }
  //console.log(stringLowerCase, "==", stringReverse);

}

aplicacao();