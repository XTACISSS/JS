//? Esta es la syntaxis de un ciclo for
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let Persona = function() {
    this.nombre = 'Juan';
    this.apellido = 'Pineda';
    this.edad = 20;
};

let juan = new Persona();

Persona.prototype.direccion = 'Santiago';

//? Esta es la syntaxis de un for in
for (prop in juan) {
    if (!juan.hasOwnProperty(prop)) {
        continue;
    }

    console.log(prop, ': ', juan[prop]);
}

for (num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log(num);
}

[1, 2, 3, true, 5, 'xd', 7, 8, false, 10].forEach(function(val) {
    console.log(val);
});