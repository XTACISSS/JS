//? Syntaxis de un objeto String
let a = new String("Rodrigo Salinas");

console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

//? Esto obtiene el index de la letra que le indeiquemos dentro de los parentesis
let i = a.indexOf('o');
console.log('La letra se encuentra en la posicion:', i);

//? Esto obtiene la ultima posicion en la que se encuentra la letra en caso de que se repita 
i = a.lastIndexOf('o');
console.log('La letra se encuentra en la posicion:', i);

//? Ambas funciones tambien sirven para buscar la posicion de una palabra
i = a.indexOf('Salinaxsadasd');
console.log('La letra se encuentra en la posicion:', i);

//? La funcion 'substring' lo que hace es cortar el string en la posicion que nosotros le indiquemos y el otro valor son las posiciones que queremos del string
let nombre = a.substring(3, 8);
console.log(nombre);

//? La funcion 'split' crea un arreglo con la variable que le pasemos y tambien separa segun lo que nosotros le indiquemos
let split = a.split(' ')
console.log(split);

//? La propiedad 'length' devuelve el largo de un parametro, en este caso el largo de nuestro arreglo
console.log(split.length);

//? La funcion 'document.write' lo que hace es escribir en el html linkeado al archivo js
document.write('Hola mundo');