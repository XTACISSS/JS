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