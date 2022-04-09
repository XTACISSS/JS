// TypeSctipt convierte codigo desde .ts a .js, para que pueda ser soportado en casi cualquier entorno. Esta casi totalmente orientado a objetos 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo");
// types
var miString = "Hola mundo";
miString = 22 + "";
var miNumero = 22;
var miBoolean = true || false;
var miVar = "Hola"; // Con :any acepta cualquier tipo de dato para despues ser cambiado. En js se puede hacer este cambio sin necesidad de aplicar esto.
miVar = false;
// Strings
// document.write(miNumero.toString());  // Esto sirve para imprimir por pantalla (Sale en el documento).  document.write escribe tipo string, por lo tanto se debe convertir.
// Arrays
var miArray = ["item1", "item2", ""]; // Distintos tipos de arrays
var miArrayNumber = [1, 2, 3, 4];
var miArrayBoolean = [true, false];
var miArrayAny = ["Hola", true, 2];
//Tupls   // Esto determina cierto orden de tipo de datos en un arreglo, cuando se definan que llevaran deben seguir el orden
var strNumTupl;
strNumTupl = ["Hello", 2];
strNumTupl = ["World", 22];
// void, undefined, null
// "let" Es como un var, pero no pierde el alcance. "const" tambien es como un var pero constante, es decir no se le puede asignar un nuevo valor.
// let miVoid: void = undefined;
// let miNull: null = null;
// let miUndefined: undefined = undefined; 
// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var miSum = function (num1, num2) {
    if (typeof (num1) === "string") {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showToDo(todo) {
    console.log(todo.tittle + " - " + todo.text);
}
var myTodo = { tittle: "Eat Dinner", text: "lorem" };
showToDo(myTodo);
document.write();
// Clases
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
    Usuario.prototype.register = function () {
        console.log(this.nombre + " Se ha registrado con exito");
    };
    Usuario.prototype.showMeAge = function () {
        return this.edad;
    };
    Usuario.prototype.ageInYears = function () {
        return this.edad + " Años";
    };
    Usuario.prototype.payInvoice = function () {
        console.log(this.nombre + " Ha realizado el pago con exito!");
    };
    return Usuario;
}());
var rodrigo = new Usuario("Rodrigo", "rodrigo@email.com", 20);
console.log(rodrigo.ageInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, nombre, email, edad) {
        var _this = _super.call(this, nombre, email, edad) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this); // Esto esta heredando el metodo "payInvoice".
    };
    return Member;
}(Usuario));
var gordon = new Member(1, "Gordon", "gordon@email.com", 33);
gordon.payInvoice();
document.write();
