function filter(array) {
  return array.filter(searchNumsPairs); // aqui vamos retornar os numeros filtrados
}

function searchNumsPairs(item) { // essa é a função callback do filter
  if (item % 2 === 0)
  return item; // aqui vamos retornar somente os pares
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filter(myArray));