// TypeSctipt convierte codigo desde .ts a .js, para que pueda ser soportado en casi cualquier entorno
console.log("Hola mundo");
// types
var miString = "Hola mundo";
miString = 22 + "";
var miNumero = 22;
var miBoolean = true || false;
var miVar = "Hola"; // Con :any acepta cualquier tipo de dato para despues ser cambiado. En js se puede hacer este cambio sin necesidad de aplicar esto.
miVar = false;
// Strings
document.write(miNumero.toString()); // Esto sirve para imprimir por pantalla (Sale en el documento).  document.write escribe tipo string, por lo tanto se debe convertir.
