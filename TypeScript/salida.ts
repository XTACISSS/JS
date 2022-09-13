// TypeSctipt es un lenguaje de tipado estricto, que convierte codigo desde .ts a .js, para que pueda ser soportado en casi cualquier entorno. Esta casi totalmente orientado a objetos 
// TypeScript es un super set de JS

console.log("Hola mundo");

// types

var miString: string = "Hola mundo";

miString = 22 + "" ;


var miNumero: number = 22;

var miBoolean: boolean = true || false;

var miVar:any = "Hola";  // Con :any acepta cualquier tipo de dato para despues ser cambiado. En js se puede hacer este cambio sin necesidad de aplicar esto.

miVar = false;

// Strings

// document.write(miNumero.toString());  // Esto sirve para imprimir por pantalla (Sale en el documento).  document.write escribe tipo string, por lo tanto se debe convertir.

// Arrays

var miArray: string[] = ["item1", "item2", ""];   // Distintos tipos de arrays
var miArrayNumber: number[] = [1, 2, 3, 4];
var miArrayBoolean: boolean[] = [true, false];
var miArrayAny: any[] = ["Hola", true, 2];

//Tupls   // Esto determina cierto orden de tipo de datos en un arreglo, cuando se definan que llevaran deben seguir el orden

var strNumTupl: [string, number];

strNumTupl = ["Hello", 2];
strNumTupl = ["World", 22];

// void, undefined, null
// "let" Es como un var, pero no pierde el alcance. "const" tambien es como un var pero constante, es decir no se le puede asignar un nuevo valor.


// let miVoid: void = undefined;
// let miNull: null = null;
// let miUndefined: undefined = undefined; 

// Functions

function getSum( num1: number, num2: number ): number{

    return num1 + num2;

}

let miSum = function( num1: number | string, num2: number | string ): number {
    
    if( typeof(num1) === "string" ){

        num1 = parseInt(num1);

    }
    if( typeof(num2) === "string" ){

        num2 = parseInt(num2);

    }

    return num1 + num2;

};

// function getName( fName: string, lName?: string ){   // El simbolo "?" quiere decir que es un parametro opcional

//     if(lName === undefined){
//         return fName;
//     }

//     return fName + " " + lName;

// }

// document.write(getName("Rodrigo", "Salinas"));  // Esto esta imprimendo y pasa datos (fName y lName)



// function myVoidF(): void{

//     return ;

// }

// Interfaces

interface Itodo{    // Esta es la estructura de la interface
    tittle: string;
    text: string;
}

function showToDo(todo: Itodo ){    // Las interfaces entregan la estructura de un tipo de dato, esto le esta diciendo que esta funcion tiene una interfaz llamada Itodo.

    console.log( todo.tittle + " - " + todo.text );

}

let myTodo: Itodo = { tittle: "Eat Dinner", text: "lorem" };

showToDo(myTodo);

document.write();

// Clases

class Usuario {  // Esto es una clase 

    private nombre: string;
    public email: string;
    protected edad: number;

    constructor( nombre: string, email: string, edad: number ) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }

    register(){
        console.log( this.nombre + " Se ha registrado con exito" );
    }

    showMeAge(){

        return this.edad;

    }

    public ageInYears(){
        return this.edad + " Años";

    }

    payInvoice(){

        console.log( this.nombre + " Ha realizado el pago con exito!" );
        
    }

}

var rodrigo = new Usuario( "Rodrigo", "rodrigo@email.com", 20 );

console.log( rodrigo.ageInYears() );

class Member extends Usuario{  // Esto esta recogiendo todos los metodos y parametros de la clase "Usuario".

    id: number;

    constructor( id, nombre, email, edad ){
        super( nombre, email, edad );  // Esto hereda lo quie le indiquemos de la clase padre.

        this.id = id;

    }

    payInvoice(){
        super.payInvoice();  // Esto esta heredando el metodo "payInvoice".
    }
}

var gordon = new Member( 1, "Gordon", "gordon@email.com", 33 );

gordon.payInvoice();

document.write(  );