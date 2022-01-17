function reduceExemple(array) {
  return array.reduce(function(prevValue, currentValue) { // prevValue: acumulador
    console.log({ prevValue });
    console.log({ currentValue });
    return prevValue + currentValue;
  }, 0); // 0 = valor inicial
}

const myArray = [1, 2, 3];

console.log('A soma do array é:', reduceExemple(myArray));