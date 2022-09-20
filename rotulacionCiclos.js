//? Esta es la rotulacion de ciclos
for_principal: for (let i = 1; i <= 5; i++) {
    console.log('i:', i);

    for_secundario: for (let j = 1; j <= 5; j++) {
        console.log('j', j);

        for (let x = 1; x <= 5; x++) {
            console.log('x:', x);

            //? Aqui le estamos indicado de que ciclo queremos salirnos
            break for_secundario;
        }
    }
}