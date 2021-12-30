// VETORES OU ARRAYS

// Como declarar um array:
let array = ["string",1, true, false, ["array 1 - indice 0", "array 1 - indice 1"], ["array 2 - indice 0", "array 2 - indice 1", "array 2 - indice 2", "array 2 - indice 3"], 5, "string2"];
console.log(array);
console.log("____________________________________________________________________")

// Como manipular arrays

// forEach() - Itera o array
array.forEach(function (item, index){console.log(item, index)});
console.log("___________________________________________________________________");


// push() - Add item no final do array
array.push("novo item no final do array");
console.log(array);
console.log("___________________________________________________________________");

// pop() - Remove item no final do array
array.pop();
console.log(array);
console.log("___________________________________________________________________");

// shift() - Remove item no início do array
array.shift()
console.log(array);
console.log("___________________________________________________________________");

// unshift() - Add item no início do array
array.unshift("novo item no inicio do array");
console.log(array);
console.log("___________________________________________________________________");

// indexOf() - Retorna o indice de um valor
console.log(array.indexOf("string2"))
console.log("___________________________________________________________________");

// splice() - Remove ou substitui um item pelo índice
array.splice(0,2);
console.log(array);
console.log("___________________________________________________________________");

// slice() - Retorna uma parte de um array já existente
let novoArray = array.slice(0,3);
console.log(novoArray);
console.log("___________________________________________________________________");


// OBJETOS

// Como declarar um objeto:
let object = { string: "Nathallye", number: 1, boolean: true, array: ["indice 0", "indice 1"], objectInternal: {teste: "Hi"} };
console.log(object);
console.log("___________________________________________________________________");

// Acessando elementos de um objeto:
console.log(object.string);
console.log("___________________________________________________________________");

console.log(object.objectInternal);
console.log("___________________________________________________________________");

// Desestruturação do objeto:
var string = object.string;
console.log(string);
console.log("___________________________________________________________________");

var number = object.number;
console.log(number);
console.log("___________________________________________________________________");

var { string, boolean, objectInternal} = object; // Dentro das chaves pegas as propriades que queremos do object que a variável está recebendo
console.log(string, boolean, objectInternal);