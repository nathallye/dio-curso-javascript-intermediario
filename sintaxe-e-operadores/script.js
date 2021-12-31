function aplicacao() {

  alert('Aplicação para comparar se dois números são igual e se a soma entre eles é maior que 10 ou menor que 20.');

  let n1 = Number(prompt('Entre com o primeiro número:'));
  let n2 = Number(prompt('Entre com o segundo número:'));

  if (!n1 || !n2) {
    alert('Erro - parâmetros inválidos, tente novamente.');
    aplicacao();
  } else {
    checarNumeros(n1, n2);
  }

}

function checarNumeros(n1, n2) {
  const primeiraFrase = criaPrimeiraFrase(n1, n2);
  const segundaFrase = criaSegundaFrase(n1, n2);

  alert(`${primeiraFrase} ${segundaFrase}`);
}

function criaPrimeiraFrase(n1, n2) {
  let primeiraFrase = `Os números ${n1} e ${n2}`;
  let simNao = 'não';

  if (n1 === n2) {
    simNao = '';
  }

  return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(n1, n2) {
  const soma = n1 + n2;
  let compararDez = 'menor';
  let compararVinte = 'menor';

  if (soma > 10) {
    compararDez = 'maior';
  } 

  if (soma > 20) {
    compararVinte = 'maior';
  } 

  return `Sua soma é ${soma}, que é ${compararDez} que 10 e ${compararVinte} que 20".`
}

aplicacao();
