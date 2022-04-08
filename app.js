let personas = []  // Esto es un arreglo (Array). Los arreglos son una coleccion de datos.

var arr = [5, 4, 3, 2, 1];  // Esto es una manera mas corta de hacer arreglos. []  Estas llaves son arreglos. La primera posicion es 0, es decir 0, 1, 2, 3, 4.

console.log( arr );

console.log( arr[4], arr[0] );

//arr.reverse();  // Esto invierte el arreglo, quedaria en 1, 2, 3, 4, 5.

console.log( arr );

arr = arr.map( function( elem ){  // Esto recorre (arr.map) el arreglo y lo guarda en la variable elem y luego multiplica elem por 2 y retorna en nuevo valor de elem.
    
    elem = elem * 2;
    return elem;

} );

console.log( arr );