const people1 = {
  name: 'Paulo',
  age: 29
}

const people2 = {
  name: 'Nathallye',
  age: 22
}

const animal = {
  name: 'Coco',
  age: 1,
  breed: 'SRD'
}

function calcularIdade(years) {
	return `Daqui a ${years} anos, ${this.name} terá ${this.age + years} anos de idade.`;
}

console.log(calcularIdade.call(people1, 20)); 
console.log(calcularIdade.call(people2, 20)); 
console.log(calcularIdade.call(animal, 20)); 

console.log('______________________________________')

console.log(calcularIdade.apply(people1, [5])); 
console.log(calcularIdade.apply(people2, [5])); 
console.log(calcularIdade.apply(animal, [5])); 

