function crearProducto(nombre, precio) {

    // Si no se reciben estos argumentos, se mandaran estos valores
    nombre = nombre || 'Sin nombre';
    precio = precio || 0;

    console.log('Producto:', nombre, 'Precio:', precio);

}

// Esto podria reemplazar una sobrecarga de funciones. Lo que se hace es mandar el tipo de dato que necesitemos en los argumentos de una nueva funcion y se llama a la funcion que crea los productos
function crearProducto100(nombre) {

    crearProducto(nombre, 100);

}

function crearProductosCamisa(precio) {

    crearProducto('camisa', precio);

}

crearProducto('Lapiz', 150);
crearProducto100('Goma');
crearProductosCamisa(5000);