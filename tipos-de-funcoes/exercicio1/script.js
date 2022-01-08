const alunos = [ // alunos é um array de objetos
  {
    nome: 'Maria',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'João',
    nota: 9,
    turma: '2A'
  },
  {
    nome: 'José',
    nota: 4,
    turma: '3C'
  }
];

// SEM OBJECT DESTRUCTURING
function alunosAprovados(alunos, media) {
  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= media) { // .nota p/ acessar a propriedade "nota" de dentro do array alunos
      aprovados.push(alunos[i].nome); // empurra para dentro do array auxiliar os "nomes" dos alunos cuja as notas foram maiores ou iguais a média (.nome para acessar a propriedade do objeto)
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 5));





//USANDO OBJECT DESTRUCTURING
function alunosAprovados(alunos, media) {
  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    let { nota, nome } = alunos[i]; // para utilizar apenas os atributos desejados (igualando ao objeto)

    if (nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
  //return `Lista dos aprovados: ${aprovados}`;
}

console.log(alunosAprovados(alunos, 5));