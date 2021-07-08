var logado = false;
if (localStorage.getItem("logado") == "true") {
    logado = true;
    console.log("logado")
}
if (logado != true) {
    alert("Voce nao esta autenticado.")
    window.location.href = "index.html"
}