// let nota = 60;

// if (nota >= 90) {
//     console.log('A');
// } else if (nota >= 80) {
//     console.log('B');
// } else if (nota >= 70) {
//     console.log('C');
// } else if (nota >= 60) {
//     console.log('D');
// } else {
//     console.log('F');
// }

// console.log('Termino el codigo.');

let a = 10;
let b = 20;

//? Esta es otra manera de hacer un 'if' es mucho mas corta
let c =
    //? Aqui hace la evaluacion con el '?' y pregunta si a es mayor a b
    a > b //? Si a es mayor a b entonces ejecuta esta funcion, y entiende que queremos ejecutarla porque le pusimos los parentesis al final para invocarla
    ?
    (function() {
        console.log('A es mayor a B');
        return a;
    })() //? Con los : separamos las respuestas
    : //? Si b es mayor a A entonces se ejecuta esta funcion.
    (function() {
        console.log('B es mayor a A');
        return b;
    })();

console.log(c);

let d = undefined;
let e = 30;

//? Esta es otra manera de evaluar algo, aca estamos comprobando si alguna de las dos variables (d y e) tienen un valor y se imprimira la que tenga un valor
let f = d || e;

console.log(f);