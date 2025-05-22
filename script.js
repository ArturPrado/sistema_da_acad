const auth = firebase.auth();
const db = firebase.firestore();

async function cadastrar(event) {
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

    try {
        // Create user with Firebase Authentication
        const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
        const user = userCredential.user;

        // Store additional user info in Firestore
        await db.collection("usuarios").doc(user.uid).set({
            nome,
            sobrenome,
            email,
            telefone
        });

        alert("Usuário cadastrado com sucesso!");
        location.href = "pages/home.html";
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert("Este e-mail já está cadastrado. Tente outro.");
        } else {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }
    }
}

async function logar(event) {
    event.preventDefault();
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha-login").value;

    if (login === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        await auth.signInWithEmailAndPassword(login, senha);
        alert("Usuário logado com sucesso!");
        location.href = "pages/home.html";
    } catch (error) {
        alert("Usuário ou senha incorretos.");
        console.error("Erro ao logar usuário:", error);
    }
}

function verificarUsuarioLogado() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            alert(`Bem-vindo, ${user.email}!`);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const formCadastro = document.querySelector(".form-cadastro");
    const formLogin = document.querySelector(".form-login");
    const switchToLogin = document.getElementById("switch-to-login");
    const switchToCadastro = document.getElementById("switch-to-cadastro");

    if (formCadastro) formCadastro.addEventListener("submit", cadastrar);
    if (formLogin) formLogin.addEventListener("submit", logar);

    if (switchToLogin) {
      switchToLogin.addEventListener("click", function() {
        formCadastro.style.display = "none";
        formLogin.style.display = "block";
      });
    }

    if (switchToCadastro) {
      switchToCadastro.addEventListener("click", function() {
        formLogin.style.display = "none";
        formCadastro.style.display = "block";
      });
    }

    verificarUsuarioLogado();
});
