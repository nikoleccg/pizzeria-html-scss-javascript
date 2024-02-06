const formularioContacto = document.getElementById("formularioContacto");

formularioContacto.addEventListener("submit", function (event) {
    if (!validarFormularioContacto()) {
        event.preventDefault(); 
    }else{
        alert("Mensaje enviado");
    }
});

function validarFormularioContacto() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar que todos los campos estén llenos
    if (nombre.trim() === "" || email.trim() === "" || telefono.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    }

    return true;
}