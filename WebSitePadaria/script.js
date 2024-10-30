document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login feito com sucesso!');
});

document.getElementById('registerLink').addEventListener('click', function() {
    document.getElementById('cadastro').classList.toggle('hidden');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro feito com sucesso!');
    document.getElementById('cadastro').classList.add('hidden'); 
});

function validarFormulario(event) {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;

    if (!nome || !descricao) {
        event.preventDefault(); 
        alert('Por favor, preencha todos os campos obrigatórios: Nome e Produto e Sabor.');
    } else {
        alert('Reserva feita com sucesso!');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            document.body.classList.remove("active");
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });
});