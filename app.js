function Jugador( nombre ){

    this.nombre = nombre;
    this.pv = 100;  // Puntos de vida
    this.sp = 100;  // Special Point


    this.curarJugador = function( jugadorObjetivo ){

        if( this.sp >= 40 ){

            jugadorObjetivo.pv = jugadorObjetivo.pv + 20;

            this.sp = this.sp - 40;

        }
        else{

            console.info( this.nombre + " No te quedan Special Points!" )

        }
        
        this.estado( jugadorObjetivo );
        
    }

    this.tirarFlecha = function(jugadorObjetivo){

        if( jugadorObjetivo.pv > 40 ){

            jugadorObjetivo.pv = jugadorObjetivo.pv - 40;

        }
        else{

            jugadorObjetivo.pv = 0;    
            
            console.error( jugadorObjetivo.nombre + " Ha muerto! :(" );

        }
        

        this.estado( jugadorObjetivo, jugadorObjetivo2 );

    }

    this.atacarEspada = function( jugadorObjetivo ){

        if( jugadorObjetivo.pv > 30 && this.sp > 30 ){

            jugadorObjetivo.pv = jugadorObjetivo.pv - 40;

            this.sp = this.sp - 30;

        }
        else if( this.sp < 30 ){

            console.info( this.nombre + " No te quedan SP" );

        }
        else{

            jugadorObjetivo.pv = 0;

            console.error( jugadorObjetivo.nombre + " Ha muerto!" );

        }

        this.estado(jugadorObjetivo);

    }

    this.estado = function( jugadorObjetivo ){

        console.info( this );
        console.info( jugadorObjetivo );
        

    }

}



var gandalf = new Jugador( "Gandalf" );
var legolas = new Jugador( "Legolas" );
var aragon = new Jugador( "Aragon" );

console.log( gandalf );
console.log( legolas );
console.log( aragon );


// gandalf.curarJugador( legolas );   Cura al jugador
