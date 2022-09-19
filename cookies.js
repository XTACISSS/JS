function crearCookie(nombre, valor) {
    valor = escape(valor);

    let hoy = new Date();

    hoy.setMonth(hoy.getMonth() + 1);

    document.cookie =
        nombre + '=' + valor + ';expires=' + hoy.toUTCString() + ';';
}

function borrarCookie(nombre) {
    let hoy = new Date();

    hoy.setMonth(hoy.getMonth() - 1);

    document.cookie = nombre + '=;expires=' + hoy.toUTCString() + ';';
}

function getCookie(nombre) {
    let cookies = document.cookie;

    let cookieArr = cookies.split('; ');
    console.log(cookieArr);

    for (let i = 0; i < cookieArr.length; i++) {
        let parArr = cookieArr[i].split('=');
        cookieArr[i] = parArr;

        if (parArr[0] === nombre) {
            return unescape(parArr[1]);
        }
    }

    return undefined;
}

// crearCookie('correo', 'rodrigo@email.com');
// crearCookie('direccion', 'Santiago, Chile');

getCookie('correo');