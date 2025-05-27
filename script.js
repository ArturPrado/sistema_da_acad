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
        nome,
        sobrenome,
        email,
        telefone,
        senha
    };
  
    const usuarios = localStorage.getItem("usuarios");
    let usuariosJSON = [];
  
    if (usuarios) {
        try {
            usuariosJSON = JSON.parse(usuarios);
            // Verifica se o email já está cadastrado
            const usuarioExistente = usuariosJSON.find(u => u.email === email);
            if (usuarioExistente) {
                alert("Este e-mail já está cadastrado. Tente outro.");
                return;
            }
        } catch (error) {
            console.error("Erro ao processar os usuários:", error);
        }
    }
  
    usuariosJSON.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosJSON));
  
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("senha-cadastro").value = "";
  
    alert("Usuário cadastrado com sucesso!");
    location.href = "pages/home.html";
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
  
            // Salvar usuário logado no localStorage
            localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
            alert("Usuário logado com sucesso!");
            location.href = "pages/home.html"; // Redireciona após login
        } catch (error) {
            console.error("Erro ao processar os usuários:", error);
        }
    } else {
        alert("Nenhum usuário cadastrado.");
    }
  }
  
  // Função para verificar se há um usuário logado
  function verificarUsuarioLogado() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        const usuario = JSON.parse(usuarioLogado);
        alert(`Bem-vindo, ${usuario.nome}!`);
    }
  }
  
  // Adiciona os eventos aos formulários e botões de modal
  document.addEventListener("DOMContentLoaded", function() {
    const formCadastro = document.getElementById("form-cadastro");
    const formLogin = document.getElementById("form-login");
    const btnCadastro = document.getElementById("btn-cadastro");
    const btnLogin = document.getElementById("btn-login");
    const cadastroModal = document.getElementById("cadastro-modal");
    const loginModal = document.getElementById("login-modal");
    const closeCadastro = document.getElementById("close-cadastro");
    const closeLogin = document.getElementById("close-login");

    if (formCadastro) formCadastro.addEventListener("submit", cadastrar);
    if (formLogin) formLogin.addEventListener("submit", logar);

    if (btnCadastro) {
      btnCadastro.addEventListener("click", function() {
        cadastroModal.style.display = "flex";
      });
    }

    if (btnLogin) {
      btnLogin.addEventListener("click", function() {
        loginModal.style.display = "flex";
      });
    }

    if (closeCadastro) {
      closeCadastro.addEventListener("click", function() {
        cadastroModal.style.display = "none";
      });
    }

    if (closeLogin) {
      closeLogin.addEventListener("click", function() {
        loginModal.style.display = "none";
      });
    }

    verificarUsuarioLogado();

    // Add toggle functionality for switching between login and cadastro forms
    const btnSwitchCadastro = document.getElementById("btn-switch-cadastro");
    const btnSwitchLogin = document.getElementById("btn-switch-login");

    if (btnSwitchCadastro) {
        btnSwitchCadastro.addEventListener("click", function() {
            formLogin.style.display = "none";
            formCadastro.style.display = "flex";
        });
    }

    if (btnSwitchLogin) {
        btnSwitchLogin.addEventListener("click", function() {
            formCadastro.style.display = "none";
            formLogin.style.display = "flex";
        });
    }
  });
  
  
 