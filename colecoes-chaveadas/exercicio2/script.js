const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array) {
  let mySet = new Set(array);
  return [...mySet]; // aqui usamos o argumento Spread "...": vamos criar um array vazio"[]" e cada elemento do set vai ser adicionado dentro desse array
}

console.log(uniqueValues(myArray));

