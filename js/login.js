function logar() {
    var usuario = document.getElementById("username");
    var senha = document.getElementById("password");

    if (usuario.value == "admin" && senha.value == "admin") {
        localStorage.setItem("logado", true);
        alert("Usuario autenticado.");
        window.location.href = "index.html";
        return false;
    } else {
        alert("Usuario ou senha inválido!");
    }
}

function sair() {
    window.location.href = "login.html";
    localStorage.removeItem("logado");
}