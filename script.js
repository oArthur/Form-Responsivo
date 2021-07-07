var form = document.getElementById('formulario');
var username = document.getElementById('username');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(username.value);

    // impede o envio do form
    e.preventDefault();
});