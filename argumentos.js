var arguments = 10; // Esta es una variable 

function miFuncion(a, b, c, d) {

    if (arguments.length !== 4) { //Esto esta mirando los argumentos que le mandamos a la funcion y si el largo de los argumentos es distinto a 4 se ejecuta lo que tiene dentro.

        console.error("La funcion necesita 4 parametros!");
        return;

    }

    console.log(a + b + c + d);

}

miFuncion(10, 20, 30, 40, 80); // Si mandamos algo distinto a 4 argumentos la funcion no se ejecutara