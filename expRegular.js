//* Estas son 2 maneras de definir expresiones regulares
//? Estas buscan dentro de una cadena de texto la letra 'a'
let reg1 = RegExp('a');
let reg2 = /a/;


let text = 'Hola mundo, 12345';

//? El método match se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena
//? i = insensible a mayusc o minusc
//? g = todas las apariciones de los caracteres indicados
//? m = multilinea

let arr = text.match(/o/m);

console.log(arr);