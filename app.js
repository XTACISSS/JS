function validar() {
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;

    if (nombre.length < 1) {
        return false;
    }
    if (apellido.length < 1) {
        return false;
    }

    return true;
}

console.log(window.location.search);