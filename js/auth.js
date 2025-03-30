// Importar Firebase Auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const auth = getAuth();

// Registrar novo usuário
function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuário registrado:", userCredential.user);
        })
        .catch((error) => {
            console.error("Erro ao registrar:", error.message);
        });
}

// Fazer login
function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuário logado:", userCredential.user);
        })
        .catch((error) => {
            console.error("Erro ao logar:", error.message);
        });
}

// Fazer logout
function logout() {
    signOut(auth)
        .then(() => {
            console.log("Usuário deslogado");
        })
        .catch((error) => {
            console.error("Erro ao deslogar:", error.message);
        });
}

// Expor funções globalmente
window.register = register;
window.login = login;
window.logout = logout;

// Verificar se o usuário está logado ao carregar o site
auth.onAuthStateChanged((user) => {
    if (!user) {
        // Se não houver um usuário logado, redirecionar para a página de login/cadastro
        if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") {
            window.location.href = "index.html";  // Redireciona para o login/cadastro
        }
    } else {
        // Se o usuário estiver logado, redirecionar para a página inicial ou home
        if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
            window.location.href = "home.html";  // Redireciona para o home se já estiver logado
        }
    }
});