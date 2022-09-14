//? Una funcion polimorficas son las que pueden recibir diferentes tipos de parametros o diferente tipo de datos

function determinaDato(a) {

    if (a == undefined) {

        console.log('A Es undefined... no se que hacer xD');

    }

    if (typeof a == 'number') {

        console.log('A es un numero, puedo hacer operaciones con numeros');

    }

    if (typeof a == 'string') {

        console.log('A es un texto, puedo hacer operaciones con textos')

    }

    if (typeof a == 'object') {

        console.log('A es un objeto, pero puede ser cualquier cosa');

        if (a instanceof Number) {

            console.log('A es un objeto de tipo numerico');

        }

    }


}

var b = new Number(3);

determinaDato(b);