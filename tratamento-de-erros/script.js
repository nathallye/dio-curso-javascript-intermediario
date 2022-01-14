/*
Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

* Crie uma função que recebe um array e um número
* Realize as seguintes validações:
  - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
  - Se o array não for do tipo 'object', lance um erro do tipo TypeError
  - Se o número não for do tipo 'number', lance um erro do tipo TypeError
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
* Utilize a declaração try...catch
* Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function verificaArray(array, tamanho) {
  
  try {
    if (!array && !tamanho) throw new ReferenceError("Envie parâmetros válidos!"); // throw substitui o return

    if (typeof (array) !== 'object') throw new TypeError("Tipo array inválido! Precisa ser do tipo object.")

    if (typeof (tamanho) !== 'number') throw new TypeError("Tipo do tamanho inválido! Precisa ser do tipo number.");

    if (array.length !== tamanho) throw new RangeError("Tamanho do array diferente do número enviado!")

    return array; // caso passe por todas essas validações sem retornar nenhum erro, retorna o array
  }

  catch (e) {
    // Filtrar os erros por cada tipo de erro utilizando o operador instanceof
    if (e instanceof ReferenceError) {
      console.log(e.name + ": " + e.message);
    } else if (e instanceof TypeError){
        console.log(e.name + ": " + e.message);
    } else if(e instanceof RangeError) {
        console.log(e.name + ": " + e.message);
    } else {
      console.log("Tipo de erro não esperado:" + e); 
    }
  }

}
  
console.log(verificaArray([1,2], 2));