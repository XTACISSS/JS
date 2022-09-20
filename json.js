let objetoJS = {
    nombre: 'Rodrigo',
    edad: 20,
};

console.log('Objeto literal: ', objetoJS);

//? La funcion JSON.stringify sirve para parsear un objeto a json
let jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

//? La funcion JSON.parse sirve para parsear un objeto json a uno js
let objetoJson = JSON.parse(jsonString);

console.log(objetoJson);