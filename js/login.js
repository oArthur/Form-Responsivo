function logar() {
    var usuario = document.getElementById("username");
    var senha = document.getElementById("password");

    if (usuario.value == "admin" && senha.value == "admin") {
        localStorage.setItem("acesso", true);
        alert("Usuario autenticado.")
        window.location.href = "pag.html"
        return false;
    } else {
        alert("Usuario ou senha inválido!");
    }
}