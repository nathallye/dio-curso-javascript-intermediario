function changeMode() {
  changeClasses(); // chama a função que muda as classes
  changeText(); // chama a função que muda os textos
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  if (button.classList.contains('dark-mode')) { // verificar se existe a classe dark-mode
    button.innerHTML = 'Ligth Mode';
    h1.innerHTML = 'Dark Mode On';
  } else {
    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Ligth Mode On';
  }
}

const darkModeClass = 'dark-mode'; // extrai o nome da classe para uma constante, para caso mude o nome dela não precisa alterar todas as chamadas
const button = document.getElementById('mode-selector');
//console.log(button);
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // para pegar o elemento do array
const footer = document.getElementsByTagName('footer')[0]; 


button.addEventListener('click', changeMode);
