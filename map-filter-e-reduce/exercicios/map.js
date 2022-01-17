const tomate = {
  value: 1
};

const maca = {
  value: 2
};

const laranja = {
  value: 3
};

// Com o parâmetro "this"

function mapComThis(arr, thisArg) { // thisArg é o objeto utilizado como argumento
  return arr.map(function(item) { // Sem usar Arrow Function(Usando função sem nomes como callback)
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2, 3, 4, 5];

console.log('this -> tomate', mapComThis(nums, tomate));
console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));


console.log('_________________________________________')


// Sem o parâmetro "this"

function mapSemThis(array) {
  return array.map(function(item) {
    return item * 2;
  });
  // return array.map((item) => item * 2) // Usando Arrow Function ficaria assim
}

const a = [6, 7, 8, 9, 10];

console.log(mapSemThis(a));
console.log(a); // array original não é modificado
