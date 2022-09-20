function evento(arg) {
    console.log('Me dispare');
    console.log(arg);
}

//? Con esto estoy indicando que quiero guardar el elemento por id dentro de una variable
let objeto = document.getElementById('objDemo');

//? Aqui estoy agregando un evento a mi variable objeto que guarda el elemento html, mando el evento keypress que dispara mi funcion evento cuando presiono una tecla dentro de la caja de texto
objeto.addEventListener('click', evento);