// home.js

// Seção de Variáveis e Seletores
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('#header');
const nav = $('#nav');
const main = $('#main');
const sections = $$('section');
const buttons = $$('button');

// Seção de Funções
function init() {
  // Inicialização do script
  console.log('Script iniciado!');
}

function handleButtonCLick(event) {
  // Função para lidar com cliques nos botões
  console.log('Botão clicado!');
}

function handleFormSubmit(event) {
  // Função para lidar com envio do formulário
  console.log('Formulário enviado!');
}

// Seção de Eventos
document.addEventListener('DOMContentLoaded', init);

buttons.forEach(button => {
  button.addEventListener('click', handleButtonCLick);
});

const form = $('#contato form');
form.addEventListener('submit', handleFormSubmit);