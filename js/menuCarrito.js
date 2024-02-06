// Se crean las variables que se utilizará
const abrirCarritoLink = document.getElementById("abrir-carrito");
const carritoContenidoDesplegado = document.getElementById("carrito-contenido-desplegado");
let carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");

abrirCarritoLink.addEventListener("click", function (event) {
    carritoContenidoDesplegado.style.display = (carritoContenidoDesplegado.style.display === "block") ? "none" : "block";
});


const agregarAlCarrito = (boton) => {
    // Se obtiene el elemento padre del botón, que es el div con clase "menu-producto"
    const producto = boton.closest('.menu-producto');

    // Se obtiene información del producto
    const nombreProducto = producto.querySelector('.producto-info h2').textContent;
    const precioProducto = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));
    const imagenProducto = producto.querySelector('img').src;

    // Se crea un objeto representando el producto
    const productoObjeto = {
        nombre: nombreProducto,
        precio: precioProducto,
        imagen: imagenProducto
    };

    // Se añade el producto al array del carrito
    carrito.push(productoObjeto);

    // Actualizando la interfaz del carrito
    actualizarCarritoUI();
    console.log(`Producto agregado al carrito: ${nombreProducto} - Precio: ${precioProducto} - Imagen: ${imagenProducto}`);
}


const actualizarCarritoUI = () => {
    // Se limpia la lista actual en el carrito
    listaCarrito.innerHTML = "";

    // Se recorre el array del carrito y agregamos dinámicamente los productos a la lista
    carrito.forEach((producto) => {
        // Se crean elementos HTML para cada producto
        const nuevoProducto = document.createElement("li");
        nuevoProducto.className = "producto-carrito";

        const imagenProducto = document.createElement("img");
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;

        const infoProducto = document.createElement("div");
        infoProducto.className = "producto-info";

        const nombreProducto = document.createElement("h3");
        nombreProducto.textContent = producto.nombre;

        const precioProducto = document.createElement("p");
        precioProducto.className = "precio";
        precioProducto.textContent = `$${producto.precio} USD`;

        const eliminarProductoBtn = document.createElement("button");
        eliminarProductoBtn.className = "eliminar-producto";
        eliminarProductoBtn.textContent = "Eliminar";

        // Se agrega el evento al botón de eliminar
        eliminarProductoBtn.addEventListener("click", () => eliminarProducto(producto));

        // Se agregan elementos al DOM
        infoProducto.appendChild(nombreProducto);
        infoProducto.appendChild(precioProducto);
        nuevoProducto.appendChild(imagenProducto);
        nuevoProducto.appendChild(infoProducto);
        nuevoProducto.appendChild(eliminarProductoBtn);

        listaCarrito.appendChild(nuevoProducto);
    });

    // Se calcula y se muestra el total
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    totalCarrito.textContent = `Total: $${total} USD`;
};


const eliminarProducto = (producto) => {
    // Se encuentra el índice del producto en el array del carrito
    const index = carrito.indexOf(producto);

    // Se elimina el producto del array
    carrito.splice(index, 1);

    // Se actualiza la interfaz del carrito
    actualizarCarritoUI();
};