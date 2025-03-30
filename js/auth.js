// Configurar Firebase Auth
const auth = firebase.auth();

// Registrar novo usuário
function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Usuário registrado:", userCredential.user);
        })
        .catch((error) => {
            console.error("Erro ao registrar:", error.message);
        });
}

// Fazer login
function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Usuário logado:", userCredential.user);
        })
        .catch((error) => {
            console.error("Erro ao logar:", error.message);
        });
}

// Fazer logout
function logout() {
    auth.signOut()
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

// Monitorar o estado de autenticação
auth.onAuthStateChanged((user) => {
    if (user) {
        // Redireciona para a home após login bem-sucedido
        window.location.href = "home.html";
    }
});