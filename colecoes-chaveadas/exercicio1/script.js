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