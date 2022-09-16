//* En este archivo veremos el objeto Math


const PI = Math.PI;
const E = Math.E;

console.log(PI);
console.log(E);


let num1 = 10.456789;

console.log(num1);

//? La funcion round sirve para redondear un numero
console.log(Math.round(num1 * 100) / 100);

//? La funcion floor sirve para cuando queremos obtener el valor entero del numero, es decir sin decimales
console.log(Math.floor(num1));

//? La funcion random sirve para generar un numero aleatorio cercano a 0 pero nunca 0 y cercano a 1 pero nunca 1
let rnd = Math.random();

//? Esta funcion sirve para sacar un numero aleatorio entre los numeros que le demos en los argumentos
function randomEntre(max, min) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(randomEntre(100, 200));

//? La funcion sqrt sirve para sacar la raiz cuadrada de un numero
console.log(Math.sqrt(8));

//? La funcion pow sirve para sacar el exponente
console.log(Math.pow(7, 5));