
function cadastrar() {

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
  

    if (nome === '' || sobrenome === '' || email === '' || telefone === '' || senha === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    console.log('Usuário cadastrado com sucesso!');
    console.log(`Nome: ${nome} ${sobrenome}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Senha: ${senha}`);
  

    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('senha').value = '';
  }
  

  function logar() {

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
  

    if (login === '' || senha === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Logar usuário (neste exemplo, apenas exibe os dados no console)
    console.log('Usuário logado com sucesso!');
    console.log(`Login: ${login}`);
    console.log(`Senha: ${senha}`);
  
    // Limpar campos após login
    document.getElementById('login').value = '';
    document.getElementById('senha').value = '';
  }
  
  // Atribuir funções aos botões de submit
  document.addEventListener('DOMContentLoaded', function() {
    const cadastrarButton = document.querySelector('form:first-child input[type="submit"]');
    const logarButton = document.querySelector('form:last-child input[type="submit"]');
  
    cadastrarButton.addEventListener('click', cadastrar);
    logarButton.addEventListener('click', logar);
  });

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

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBFpCbnzcZ_VToV-4O82hU98zvSfP63F4Y",
   authDomain: "academia-b4622.firebaseapp.com",
   databaseURL: "https://academia-b4622-default-rtdb.firebaseio.com",
   projectId: "academia-b4622",
   storageBucket: "academia-b4622.firebasestorage.app",
   messagingSenderId: "449975159210",
   appId: "1:449975159210:web:2c907504c696c429fe43d3",
   measurementId: "G-CKZD1DQQR3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);