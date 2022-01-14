/* 
Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
*/

const BASE_URL = "https://thatcopy.pw/catapi/rest/"; // criar uma constante para armazenar o endereço da API 

const catBtn = document.getElementById('change-cat'); // para selecionar o elemento botão do index 

const catImg = document.getElementById('cat'); // para selecionar o elemento img do index 

const getCats = async () => { // arrow function como uma função assincrona para carregar os gatinhos
  try { // no bloco try vai ser verificado esse pedaço de código 
    const data = await fetch(BASE_URL); // dados

    const json = await data.json(); // a BASE_URL vai retornar outra promese, portanto, vai ser necessário pegar o que vamos receber em forma de string e converter para json
  
    return json.webpurl; // acessando a url da API temos uma responta dela, e vamos utilizar o webpurl, que é uma imagem comprimida, pois o JPG da url demora mais para carregar
 
  } catch (error) { // e se der algum problema vai ser tratado aqui
    console.log(error.message);
  }
}

const loadImg = async () => { // função assincrona 
  catImg.src = await getCats(); // que vai colocar no campo da imagem a url que vai receber no getCats
}

catBtn.addEventListener('click', loadImg); // colocar um listener no botão; pega o catBtn.addEventListener e o evento vai ser um 'click' e o nome vai ser loadImg

loadImg(); // para a página já iniciar com uma imagem já chamamos o loadImg aqui