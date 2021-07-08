var logado = false;
if (localStorage.getItem("logado") == "true") {
    logado = true;
    console.log("logado")
}
if (logado != true) {
    alert("Você não está autenticado.")
    window.location.href = "index.html"
}