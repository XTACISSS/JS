let personas = []  // Esto es un arreglo (Array). Los arreglos son una coleccion de datos.

var arr = [5, 4, 3, 2, 1];  // Esto es una manera mas corta de hacer arreglos. []  Estas llaves son arreglos. La primera posicion es 0, es decir 0, 1, 2, 3, 4.

console.log( arr );

console.log( arr[4], arr[0] );

arr.reverse();  // Esto invierte el arreglo, quedaria en 1, 2, 3, 4, 5.

console.log( arr );

arr = arr.map( function( elem ){
    
    elem = elem * 2;

} );