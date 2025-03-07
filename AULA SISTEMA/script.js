// Função para cadastrar o usuário
function cadastrar(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha-cadastro").value;

  if (nome === "" || sobrenome === "" || email === "" || telefone === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      senha: senha
  };

  const usuarios = localStorage.getItem("usuarios");
  if (usuarios) {
      try {
          const usuariosJSON = JSON.parse(usuarios);
          usuariosJSON.push(usuario);
          localStorage.setItem("usuarios", JSON.stringify(usuariosJSON));
      } catch (error) {
          console.error("Erro ao parsear o JSON:", error);
      }
  } else {
      const usuariosJSON = [usuario];
      localStorage.setItem("usuarios", JSON.stringify (usuariosJSON));
  }

  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("senha-cadastro").value = "";

  alert("Usuário cadastrado com sucesso!");
}

// Função para logar o usuário
function logar(event) {
  event.preventDefault();
  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha-login").value;

  if (login === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  const usuarios = localStorage.getItem("usuarios");
  if (usuarios) {
      try {
          const usuariosJSON = JSON.parse(usuarios);
          const usuario = usuariosJSON.find(u => u.email === login && u.senha === senha);

          if (!usuario) {
              alert("Usuário ou senha incorretos.");
              return;
          }

          alert("Usuário logado com sucesso!");
      } catch (error) {
          console.error("Erro ao parsear o JSON:", error);
      }
  } else {
      alert("Nenhum usuário cadastrado.");
  }
}

// Adiciona os eventos aos formulários
document.addEventListener("DOMContentLoaded", function() {
  const formCadastro = document.querySelector(".form-cadastro");
  const formLogin = document.querySelector(".form-login");

  formCadastro.addEventListener("submit", cadastrar);
  formLogin.addEventListener("submit", logar);
});

const imagem = document.createElement('img');
imagem.src = 'imagem.jpg';
imagem.alt = 'Descrição da imagem';
document.body.appendChild(imagem);