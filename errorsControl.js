try {
	// let a = 100;

	//? El throw sirve para forzar el catch
	//* throw 'Error';

	// console.log('El valor de a:', a);

	//? En el throw podemos mandar lo que sea, incluidos objetos, arreglos, funciones, etc
	// throw new Error('Error tipo 1');
	// throw {

	//     nombreError: 'Error tipo 1',
	//     accion: 'Repararlo xd',
	//     code: 1

	// }

	throw function () {
		console.log('Funcion en el throw');
	};
} catch (e) {
	//? el e.message sirve para mandar la descripcion del error
	// console.log(e.message);

	//* console.log(e);
	//* console.log(e.nombreError);
	//* console.log(e.accion);
	//* console.log(e.code);

	e();
} finally {
	console.log('Finalmente');
}
