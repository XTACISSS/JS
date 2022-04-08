// Las funciones anonimas se crean al momento de invocar a una funcion, que esta pidiendo otra funcion (esta seria la anonima) y no guardan nada dentro del objeto global window.

function ejecutarFuncion( fn ){

    if( fn() === 1 ){

        return true;
        
    }
    else{

        return false;

    }


}

console.log( 

    ejecutarFuncion( function(){   // Esto es una funcion anonima
    
        console.log( "Estoy funcionando :D" );
        return 1;
    
    } )

 );

