let personas = []  // Esto es un arreglo (Array). Los arreglos son una coleccion de datos.

var arr = [5, 4, 3, 2, 1];  // Esto es una manera mas corta de hacer arreglos. []  Estas llaves son arreglos. La primera posicion es 0, es decir 0, 1, 2, 3, 4.

console.log( arr );

console.log( arr[4], arr[0] );

arr.reverse();  // Esto invierte el arreglo, quedaria en 1, 2, 3, 4, 5.

console.log( arr );

arr = arr.map( function( elem ){  // Esto recorre (arr.map) el arreglo y lo guarda en la variable elem y luego multiplica elem por 2 y retorna en nuevo valor de elem.
    
    elem = elem * elem;
    return elem;

} );

console.log( arr );

arr = arr.map ( Math.sqrt );  // Esto hace lo mismo que el de arriba, solo que lo multiplica por su raiz cuadrada.

console.log( arr );

arr = arr.join("|");  // Esto sirve para separar el arreglo con lo que nosotros le entreguemos dentro de los ().

console.log( arr );

arr = arr.split("|"); // Esto sirve para cortarlo con lo que nosotros queramos.

console.log( arr );

arr.push("6");  // Esto agrega un elemento mas a nuestro arreglo.

console.log( arr );

arr.unshift("0"); // Esto sirve para agregar un elemento en la primera posicion del arreglo.
 
console.log( arr );

console.log( arr.toString() ); // Esto convierte nuestro arreglo a string.

var elimine = arr.pop(); // Esto elimina el ultimo elemento del arreglo y lo guarda en la variable "elimine".

console.log( arr, elimine );

arr.splice( 1, 3, "10", "20", "30" ); // Esto apunta a la posicion que nosotros le indiquemos (1) y que elimine la cantidad que nosotros le indiquemos a partir de esa posicion. Tambien puede agregar un elemento que nosotros le pasemos.

console.log( arr );

arr = arr.slice( 0, 2 ); // Esto apunta a la posicion que nosotros le indiquemos (0) y luego ignora los elementos desde la posicion que nosotros le indiquemos (2).

console.log( arr );