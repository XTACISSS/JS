let hoy = new Date();

let fechaMs = new Date(1);

//? Esta es la syntaxis para mandar una fecha fija 
//* let fFija = new Date( anio, mes, dia, hora, min, seg, miliSeg );

let fFija = new Date(2023, 0, 23, 12, 08, 15);

console.log(hoy);
console.log(fechaMs);
console.log(fFija);

//? La funcion getFullYear(), sirve para obtener el año de una fecha
console.log(hoy.getFullYear());

//? La funcion getDate(), sirve para obtener el dia de una fecha
console.log(hoy.getDate());

//? La funcion getMonth(), sirve para obtener el mes de una fecha, en js los meses empiezan por el 0, es decir 0 es = a enero
console.log(hoy.getMonth());

//? Esto retorna la hora de una fecha
console.log(hoy.getHours());

//? Esto retorna la representacion numerica en milisegundos de una fecha
console.log(hoy.getTime());


let inicio = new Date();

for (let i = 0; i < 15000; i++) {

    console.log('Algo...')

}

let fin = new Date();

//? Esto devuelve cuanto se demora el ciclo for en imprimir 100 veces algo
let duracion = fin.getTime() - inicio.getTime();

//? Aqui se convierte de miliseg a segundos
console.log((duracion) / 100, 'Segundos');