

function identifica( param ){

    // console.log( typeof param);  // Esto imprime el tipo de parametro que le pases a la funcion

    if( typeof param === "function" ){

        param();
    }
    else{

        console.log( param );

    }
}

function Persona(){

    this.nombre = "Rodrigo";
    this.edad = 20;

}

var rodrigo = new Persona();


identifica( rodrigo );  // Se pueden mandar obj, funciones, numbers, boolean, string, etc.