var arguments = 10;

function miFuncion(a, b, c, d){

    if( arguments.length !== 4 ){   // Si la funcion es distinta a 4 se ejecuta lo que tiene dentro.

        console.error( "La fucion necesita 4 parametros!" );
        return;

    }

    console.log( a + b + c + d );

}

miFuncion(10, 20, 30, 40, 50, 60);  // Si mandamos algo distinto a 4 argumentos la funcion no se ejecutara