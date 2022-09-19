let mes = 2;

//? El switch sirve para hacer evaluaciones.
switch (mes) {
    case 1:
        console.log('Enero');
        break;

        //? En los case se pueden meter funciones autoinvocadas y el case tomara el valor que regrese esa funcion
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    default:
        console.log('Es cualquier otro mes');
}