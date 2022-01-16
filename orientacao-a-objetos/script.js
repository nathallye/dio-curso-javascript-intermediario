/*
Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo;
2. Dentro de ContaBancaria, construa o getter e o setter de saldo;
3. Dentro de ContaBancaria, crie os métodos sacar e depositar;
4. Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
5. Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
6. Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; // sempre quer tiver um getter e setter do parâmetro colocar o "_" na frente do nome, para que possamos utilizar o nome dessa propriedade no getter e no setter; o saldo inicia igual a 0 por padrão.
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) { // metodos 
    if (valor > this._saldo) { // verificar se tem saldo suficiente antes
      return "Saldo insuficiente!";
    }
    this._saldo = this._saldo - valor;

    return this._saldo; // caso tenha saldo suficiente retornar o saldo 
  }

  depositar(valor) { // metodos
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero); // os parâmetros que herda da classe pai
    this.tipo = 'corrente'; // por padrão o tipo dessa conta vai ser corrente
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) { // esse valor booleano vai retornar se o correntista tem cartão de credito ou não
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero); // os parâmetros que herda da classe pai
    this.tipo = 'poupança'; // por padrão o tipo dessa conta vai ser poupança
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero); // os parâmetros que herda da classe pai
    this.tipo = 'universitária'; // por padrão o tipo dessa conta vai ser universitária
  }

  sacar(valor) { // sobrescreve o método sacar já existente na classe pai
    if (valor > 500) {
      return "A sua conta universitária só permite saques até R$500,00."
    }

    this._saldo = this._saldo - valor;

    return this._saldo;
  }
}