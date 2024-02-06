const formularioCompra = document.getElementById("formularioCompra");

formularioCompra.addEventListener("submit", function (event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
    }
});

function validarFormulario() {
    const formaPagoEfectivo = document.querySelector("input[name='formaPago'][value='efectivo']").checked;
    const formaPagoLinea = document.querySelector("input[name='formaPago'][value='linea']").checked;

    const direccionSeleccionada = document.querySelector("input[name='direccion']:checked");

    const direccionNueva = document.querySelector(".direccion-input input").value;
    const detalleDireccion = document.querySelector(".direccion-box textarea").value;

    if (!formaPagoEfectivo && !formaPagoLinea) {
        alert("Por favor, selecciona una forma de pago.");
        return false;
    }

    if (!direccionSeleccionada && (direccionNueva.trim() === "" || detalleDireccion.trim() === "")) {
        alert("Por favor, completa la información de la dirección.");
        return false;
    }

    return true;
}