//? La funcion setTimeout sirve para ejecutar una funcion que va en el primer argumento cuando pase el tiempo que le dimos en el segundo argumento
setTimeout(function() {
    console.log('Paso 1 segundo');
}, 1000);

let segundos = 0;

//? La funcion setInterval sirve para definir un intervalo de tiempo donde queremos que se ejecute la funcion que le entregamos en el primer argumento, en el segundo argumento va el timepo
let intervalo = setInterval(function() {
    segundos++;

    console.log('Segundos: ', segundos);

    if (segundos == 3) {
        //? La funcion cleanInterval sirve para detener el intervalo
        clearInterval(intervalo);
    }
}, 1000);

let juan = {
    nombre: 'Juan',
    edad: 20,
    imprimir: function() {
        let self = this;

        setTimeout(function() {
            console.log(self.nombre, self.edad);
        }, 1000);
    },
};

juan.imprimir();