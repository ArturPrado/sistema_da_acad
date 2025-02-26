
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