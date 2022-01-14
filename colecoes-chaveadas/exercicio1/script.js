/*
Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função getAdmins que recebe um Map;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/

function getAdmins(map) {
  let listAdmins = [];

  for ([key, value] of map) { // Para interar a chave e o valor do Map
    //console.log(key, value);
    if (value === 'Admin') {
      listAdmins.push(key);
    }
  }

  return listAdmins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Nathallye', 'Admin');
usuarios.set('Paulo', 'User');
usuarios.set('Rafael', 'User');
usuarios.set('João', 'Admin');


console.log(getAdmins(usuarios));