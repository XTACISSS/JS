

function identifica( param ){

    console.log( typeof param);  // Esto imprime el tipo de parametro que le pases a la funcion

    console.log( param instanceof Persona );  // Esto regresa un true o false dependiendo si el parametro es de tipo "Persona"
 
}

function Persona(){

    this.nombre = "Rodrigo";
    this.edad = 20;

}

var rodrigo = new Persona();


identifica( rodrigo );  // Se pueden mandar obj, funciones, numbers, boolean, string, etc.