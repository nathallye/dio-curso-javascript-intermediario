const listaProdutos = [
  {
    name: 'sabao em po',
    value: 20.00
  },
  {
    name: 'cereal',
    value: 10.00
  },
  {
    name: 'salame',
    value: 10.00
  },
  {
    name: 'toalha',
    value: 30.00
  }
]

const saldoDisponivel = 100.00;

function calculaSaldo(saldoDisponivel, listaProdutos) {
  return listaProdutos.reduce(function (prevValue, currentValue, index) {

    console.log('Rodada', index + 1);
    console.log('prevValue', prevValue);
    console.log('currentValue:', currentValue["value"]);
    console.log('____________')

    return prevValue - currentValue.value;
    
  }, saldoDisponivel);
}

console.log('O seu troco é: R$', calculaSaldo(saldoDisponivel, listaProdutos));