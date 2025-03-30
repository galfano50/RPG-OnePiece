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