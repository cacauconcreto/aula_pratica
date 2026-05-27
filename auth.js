// Banco de dados simulado para testes iniciais
const usuariosSimulados = [
    { email: "prof@escola.com", senha: "123", tipo: "professor", nome: "Professor Cláudio" },
    { email: "aluno@escola.com", senha: "123", tipo: "aluno", nome: "Antonio Silva" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const errorElement = document.getElementById('errorMessage');

    // Busca o usuário correspondente no nosso "banco"
    const usuarioLogado = usuariosSimulados.find(user => 
        user.email === email && 
        user.senha === password && 
        user.tipo === userType
    );

    if (usuarioLogado) {
        // Guarda os dados da sessão atual no navegador
        localStorage.setItem('usuarioAtual', JSON.stringify({
            nome: usuarioLogado.nome,
            tipo: usuarioLogado.tipo,
            email: usuarioLogado.email
        }));

        // Limpa erros e redireciona para o Painel Principal
        errorElement.textContent = "";
        window.location.href = "dashboard.html";
    } else {
        // Exibe mensagem de erro caso falhe
        errorElement.textContent = "Credenciais inválidas ou tipo de usuário incorreto.";
    }
});
