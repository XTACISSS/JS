function Persona() {

    this.nombre = "Rodrigo";
    this.apellido = "Salinas";
    this.edad = 20;
    this.pais = "Chile";

}

Persona.prototype.imprimirInfo = function () {

    this.imprimirInfo = function () {

        console.log( this.nombre + " " + this.apellido + " (" + this.edad +")" );

    }

}

// Persona.prototype.pais = "Chile"; Guardando una propiedad dentro del prototipo

var rod = new Persona();  // Esto crea una nueva instancia de "Persona".

/* console.log(rod);
   console.log(rod.pais);  Cuando JS busca una propiedad que no esta dentro del constructor la busca en los prototipos y si la encuentra, la trae */

// rod.imprimirInfo();  Esto es para llamar al metodo a traves de la variable "rod".

console.log(rod);
console.log(rod.imprimirInfo());

Number.prototype.esPositivo = function(){

    if (this > 0) {
    
        return true;

    }
    else{

        return false;

    }

}