let carro = {
    color: 'Blanco',
    marca: 'Mazda',
    imprimir: function() {
        let salida = this.marca + ' - ' + this.color;
        return salida;
    },
};

let carro2 = {
    color: 'Tojo',
    marca: 'Toyota',
};

// console.log(carro.imprimir());

let logCarro = function(arg1, arg2) {
    console.log('Carro: ', this.imprimir());
    console.log('Argumentos: ', arg1, arg2);
    console.log('=========================');
};

//? Con la funciion bind lo que hacemos es indicarle donde queremos que apunte el this, en este caso le estamos diciendo que apunte a nuestro objeto carro
let logModeloCarro = logCarro.bind(carro);

logModeloCarro('abc', 'xyz');

//? Existe otra manera de indicarle donde queremos que punte el this y es con la funcion call, en el primer argumento mandamos donde queremos que apunte y en los siguientes los argumentos que pida la funcion
logModeloCarro.call(carro, '123', '456');

//? Tambien se puede hacer con la funcion apply, solo que esta trabaja solo con 2 argumentos, la primera le indicamos donde apunta this y en la siguiente tiene que ser si o si un arreglo ([]) en donde puedes mandar los argumentos de la funcion
logModeloCarro.apply(carro, ['qwe', 'rty']);

//? Esto es un funcion prestada
console.log(carro.imprimir.apply(carro2));