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

var arr = [   // A JS no le importa el espacio que hay entre las llaves del arreglo.
    true,
    {
        nombre:"Rodrigo",
        apellido:"Salinas"
    },
    function(){
        console.log( "Estoy dentro de un arreglo" );
    },
    function( persona ){
        console.log( persona.nombre + " " + persona.apellido );
    },
    [
        "Rodrigo", 
        "Luis", 
        "Benjamin", 
        "Matias",
        [
            "Juan",
            "Pedro",
            "Elisa",
            function(){
                console.log( this );
            }
        ]
    ]

];

console.log( arr );  // arr.length dice el largo del arreglo.

console.log( arr[0] );

console.log( arr[1].nombre + " " + arr[1].apellido );

arr[2]();  // Esto invoca a la funcion anonima.

arr[3]( arr[1] ); // Esto invoca la funcion en la poscion numero 3 del arreglo y le pasa la posicion numero 1 del arreglo que contiene los datos de persona (nombre y apellido).

console.log( arr[4][4][1] ); // Esto imprime el elemento en posicion numero 4, que es un arreglo que apunta a la posicion numero 3.

var arr2 = arr[4][4];

arr2[1] = "Pedra";

console.log( arr2 );

arr2[3]();  // Esto apunta a la funcion anonima 