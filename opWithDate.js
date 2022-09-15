let fecha = new Date(2022, 8, 15);

//? Esto sirve para setear un dia de la fecha
//*  fecha.setDate(20);

//! Aqui estamos modificando el portotipo para hacer una funcion que sume dias a la fecha
Date.prototype.sumarDias = function(dias) {

    this.setDate(this.getDate() + dias);

    return this;

}

//! Aqui estamos modificando el portotipo para hacer una funcion que sume años a la fecha
Date.prototype.sumarAnios = function(anios) {

    this.setFullYear(this.getFullYear() + anios);

    return this;

}

console.log(fecha);
console.log(fecha.sumarDias(15))
console.log(fecha.sumarAnios(20));