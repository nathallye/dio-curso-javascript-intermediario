function calculadora() {

  const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)')); // primeira entrada do usuário

  if (!operacao || operacao > 6) {
    alert('Erro - opção inválida, tente novamente!')
    calculadora();
  } else {

    let n1 = Number(prompt('Insira o primeiro valor:')); // number: para converter a entrada de string para número; prompt: entrada do usuário
    let n2 = Number(prompt('Insira o segundo valor:')); // number: para converter a entrada de string para número; prompt: entrada do usuário
    let resultado; // inicia sem nenhum valor (será atribuido no decorrer)

    if (!n1 || !n2) {
      alert('Erro - parâmetros inválidos!')
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`); // TemplatStrings para concatenar
        novaOperacao();
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
      }
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
      }
      function novaOperacao() {
        let opcao = Number(prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não'));
        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!');
        } else {
          alert('Opção inválida!')
          novaOperacao();
        }
      }
    }
  }
  // Substituir por um switch case
  /* if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    multiplicao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  } */

  switch (operacao) {
    case 1:
      soma();
      break;
    case 2:
      subtracao();
      break;
    case 3:
      multiplicao();
      break;
    case 4:
      divisaoReal();
      break;
    case 5:
      divisaoInteira();
      break;
    case 6:
      potenciacao().
        break;
    default:
      alert('Erro - opção inválida!')
      break;
  }
}

calculadora();

