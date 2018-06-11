var CODESPANA = '108';

function initialize_formulariosMunicipios() {

	$("fieldset.controlesProvinciaMunicipioPais").each(function() {
		var $this = $(this);
		/* esta variable contendrá el sufijo que usaremos para distinguir si
		 * hablamos de los datos de defuncion, nacimiento, ...*/
		var sufijo = $this.data().sufijo;
		/* llamamos a la función que nos inicializará los elementos relacionados
		 * con la provincia, municipio y pais (de la zona indicada en el
		 * sufijo), que se encuentran en la pestaña de datos del fallecido */
		inicializacontrolesProvinciaMunicipioPais(sufijo);
	});
}

/**
 * Función que inicializará los elementos relacionados con las provincias,
 * municipios y paises de los datos del fallecido
 *
 * @param sufijo
 */
function inicializacontrolesProvinciaMunicipioPais(sufijo) {
	/* cuando se realice un cambio en el valor del input que contiene el codigo
	de la provincia, se ejecutará este método*/
	$("#inputCodProv" + sufijo).change(function() {
		if (window.flagChanginProvincia) {
			return;
		}
		window.flagChanginProvincia = true;

		try {
			$input = $("#inputCodProv" + sufijo);
			// establecemos el selected de la option con el codigo de provincia
			$("#selListProv" + sufijo).val($input.val());
			// como se ha modificado el select de provincias de defuncion,
			// volvemos a modificar el select de municipios
			cargarMuncipiosDeProvincia(sufijo, $input.val());
		} finally {
			window.flagChanginProvincia = false;
		}
	});

	/* cuando se realice un cambio en el valor del select que contiene el
	listado de provincias, se ejecutará este método*/
	$("#selListProv" + sufijo).change(function() {
		if (window.flagChanginProvincia) {
			return;
		}
		window.flagChanginProvinci = true;
		try {
			var optSelected = $("#selListProv" + sufijo + " option:selected");
			// cambio valor al input
			$("#inputCodProv" + sufijo).val(optSelected.val());
			/* llamo a la función que me cargará de nuevo la lista de municipios
			de la provincia que se acaba de seleccionar*/
			cargarMuncipiosDeProvincia(sufijo, optSelected.val());
		} finally {
			window.flagChanginProvincia = false;
		}
	});

	/* cuando se realice un cambio en el valor del input que contiene el codigo
	del municipio, se ejecutará este método*/
	$("#inputCodMuni" + sufijo).change(function() {
		if (window.flagChanginProvincia) {
			return;
		}
		window.flagChanginProvincia = true;

		try {
			$input = $("#inputCodMuni" + sufijo);
			/* establecemos el selected de la option con el codigo de
			municipio*/
			$("#selListMuni" + sufijo).val($input.val());
			/* averiguamos el digito de control que corresponde a la
			nueva provincia y municipio*/
			/*
			 * var dc = getDCMunicipio($("#inputCodProv"+sufijo).val(),
			 * $input.val()); $("#inputCodDc"+sufijo).val(dc);
			 */
			// $("#inputCodDc"+sufijo).val('');
			getDCMunicipio($("#inputCodProv" + sufijo).val(), $input
					.val(), sufijo);
		} finally {
			window.flagChanginProvincia = false;
		}
	});

	/* cuando se realice un cambio en el valor del select que contiene el
	listado de los municipios, se ejecutará este método*/
	$("#selListMuni" + sufijo).change(function() {
		if (window.flagChanginProvincia) {
			return;
		}
		window.flagChanginProvinci = true;
		try {
			var optSelected = $("#selListMuni" + sufijo
					+ " option:selected");
			// cambio valor al input
			$("#inputCodMuni" + sufijo).val(optSelected.val());
			// averiguamos el digito de control que corresponde a la
			// nueva provincia y municipio
			/*
			 * var dc = getDCMunicipio($("#inputCodProv"+sufijo).val(),
			 * $input.val()); $("#inputCodDc"+sufijo).val(dc);
			 */
			getDCMunicipio($("#inputCodProv" + sufijo).val(),
					optSelected.val(), sufijo);
		} finally {
			window.flagChanginProvincia = false;
		}
	});

	// cuando se realice un cambio en el valor del input que contiene el valor
	// de si es en españa (la nacionalidad, el nacimiento o la residencia), se
	// ejecutará este método
	inicializarYactualizarCodDatosEspanoles(sufijo);

	$("#inputSiPaisEspPara" + sufijo).change({
		'sufijo' : sufijo
	}, inicializarYactualizarCodDatosEspanoles);


	// cuando se realice un cambio en el valor del input que contiene el valor
	// la NACIONALIDAD, se ejecutará este método.
	inicializarYactualizarCodSiPaisPara(sufijo);
	$("#codSiPaisPara" + sufijo).change({
		'sufijo' : sufijo
	}, inicializarYactualizarCodSiPaisPara);

	// cuando se realice un cambio en el valor del input que contiene el codigo
	// del pais, se ejecutará este método.
	inicializarYactualizarCodPais(sufijo);
	$("#inputCodPais" + sufijo).change({
		'sufijo' : sufijo
	}, inicializarYactualizarCodPais);

	// cuando se realice un cambio en el valor del select que contiene el
	// listado de los paises, se ejecutará este método
	inicializarYactualizarListPais(sufijo);
	$("#selListPais" + sufijo).change({
		'sufijo' : sufijo
	}, inicializarYactualizarListPais);

} // cierre funcion inicializacontrolesProvinciaMunicipioPais

/**
 * Función que inicializa y actualiza el comportamiento de los elementos
 * relacionados con el codigo de si son datos españoles a la carga del
 * formulario y en la modificacion del codigo. La función recibe 1 único
 * parametro; pero dependiendo desde donde venga la llamada a la función, ese
 * parametro vendrá como un string o como un objeto, y asi, preguntando como es,
 * sabremos desde donde viene para poder distinguir que acciones deben
 * realizarse en cada momento (pues en algunos puntos realizan acciones
 * diferentes si el formulario se carga inicialmente que si se le ha modificado
 * alguno de sus valores)
 * Valores para nacimiento/residencia española: 0=no consta,1=española, 2= extranjera. No blanco
 *
 * @param sufijo
 */
function inicializarYactualizarCodDatosEspanoles(sufijo) {
	carga = true;
	/* comprobaremos si se ha pasado el sufijo o no (lo que diferencia si a esta
	funcion se la ha llamado para la carga de la pagina o para el evento
	change) si viene de la carga del documento no hay problema, pero si viene del
	evento change, por la forma en la que hemos tenido que pasar los valores,
	hay que hacerles un formateo antes de poder trabajar con ellos porque llega
	como objeto*/
	if (!(sufijo.constructor === String)) {
		// cambio tiene la palabra change, que es el evento producido
		cambio = sufijo.type;
		sufijo = sufijo.data.sufijo;
		carga = false;
	}
	/* si el sufijo es de la zona de defunción, esta función no deberá
	ejecutarse, pues no contiene el elemento desde el que llamamos a la
	función*/
	if (sufijo === "Defun")
		return;
	// ponemos el codigo para el semaforo y que no se esten llamando de continuo
	if (window.flagChanginProvincia) {
		// window.alert("entramos en input de pais español. antes del switch
		// valor sufijo:"+sufijo+"y valor del
		// flag:"+window.flagChanginProvincia);
		return;
	}
	window.flagChanginProvincia = true;
	try {
		/*si en algún momento (mientras permanecemos en el boletin), se ha indicado nacionalidad extranjera,
		 * la opción de españa se habrá eliminado de la lista (para que no se pueda seleccionar), pero si
		 * luego se vuelve a cambiar a nacionalidad española, como no se vuelve a recargar el select, dicha
		 * opción no la encuentra y te indica "seleccione pais"; para solucionarlo, hemos añadido la opción de
		 * españa al select sólamente sino existe.*/
		var optEspanya = $("#selListPais" + sufijo+ ' option[value="'+CODESPANA+'"]');
		if ($(optEspanya).length === 0) {
			$("#selListPais" + sufijo).append('<option value="'+CODESPANA+'"> España </option>');
		}
		 /* dependiendo el valor que tenga el booleano de si es en españa o no
		 * (la nacionalidad, el nacimiento o la residencia), se deberán hacer
		 * unas cosas u otras*/

		// window.alert("entramos en input de pais español. antes del switch"+sufijo);
		switch ($("#inputSiPaisEspPara" + sufijo).val()) {
		// españa a 0, NO CONSTA.
		  case '0':
			/*solo se tiene en cta y se hacen cosas sino estamos en seccion de nacionalidad,
			 * ya que en esa sección no se podrá modificar manualmente el input de español*/
			if (sufijo != 'Nacionalidad') {
				/*sino es el momento de la carga, podremos modificar el contenido de los
				 * campos de su seccion*/
				if (!carga) {
					$("#inputSiPaisExtPara" + sufijo).val('0');
					// el input del codigo del pais se pone a valor vacio
					$("#inputCodPais" + sufijo).val('');

					// el select de los paises, se deja seleccionada la opcion
					// de NO CONSTA.
					/*dicha opción se encuentra en la tabla de paises, por eso no deberemos preguntar por si la contiene.*/
					$("#selListPais" + sufijo + ' option').removeAttr("selected");
					/*999 - pais no consta*/
					$("#selListPais" + sufijo + ' option[value="999"]').attr(
							"selected", "selected");

					$("#inputCodProv" + sufijo).val('99');
					// value 99 es el que le hemos puesto al no consta
					var optNoConsta = $("#selListProv" + sufijo
							+ ' option[value="99"]');
					if ($(optNoConsta).length === 0) {
						 /* aunque deberia de quitar el selecionado anterior al
						 * indicarle uno nuevo ya que no hemos dicho que el
						 * selected sea de selección múltiple, no lo hace, y te
						 * deja seleccionado el anterior option, asi que primero
						 * deberemos deseleccionar todos los option de ese
						 * select antes de indicarle el nuevo selected*/

						$("#selListProv" + sufijo + ' option').removeAttr(
								"selected");
						$("#selListProv" + sufijo)
								.append(
										'<option value="99" selected="selected">-- No consta --</option>');
					} else {
						$("#selListProv" + sufijo + " option:selected").removeAttr("selected");
						$("#selListProv" + sufijo + " option[value=99]").prop('selected', true);
					}

					$("#inputCodMuni" + sufijo).val('999');
					$("#inputCodDc" + sufijo).val('');
					optNoConsta = $("#selListMuni" + sufijo
							+ ' option[value="999"]');
					if ($(optNoConsta).length === 0) {
						$("#selListMuni" + sufijo + ' option').removeAttr(
								"selected");
						$("#selListMuni" + sufijo)
								.append(
										'<option value="999" selected="selected">-- No consta --</option>');
					} else {
						$("#selListMuni" + sufijo + " option:selected").removeAttr("selected");
						$("#selListMuni" + sufijo + " option[value=999]").prop('selected', true);
					}
				}// cierre modificacion value elementos por no ser en la
				// carga de la pagina
				/*Sino consta, todo lo de su seccion se desactivará*/
				$("#inputCodProv" + sufijo).attr("disabled", "true");
				$("#selListProv" + sufijo).attr("disabled", "true");
				$("#inputCodMuni" + sufijo).attr("disabled", "true");
				$("#inputCodDc" + sufijo).attr("disabled", "true");
				$("#selListMuni" + sufijo).attr("disabled", "true");
				$("#inputSiPaisExtPara" + sufijo).attr("disabled", "true");
				$("#inputCodPais" + sufijo).attr("disabled", "true");
				$("#selListPais" + sufijo).attr("disabled", "true");
			}
			break;
		// si pais españa a 1, manejaremos solo las opciones de españa
		case '1':
			if (sufijo != 'Nacionalidad'){
				if (!carga) {
					if (sufijo != 'Nacionalidad'){
						$("#inputSiPaisExtPara" + sufijo).val('1');
					}
					// el input del codigo del pais se desactiva a valor el codigo
					// de pais de españa
					// PROVISIONALMENTE LO DEJO CON UN VALOR FIJO QUE ASI NO SE SALE
					// DEL CASE (CODESPANA variable global que contiene el codigo de
					// españa 108)
					$("#inputCodPais" + sufijo).val(CODESPANA);
				}
				$("#inputCodPais" + sufijo).attr("disabled", "true");
				// el select de los paises, se desactiva y deja seleccionada la
				// opcion de seleccione españa.

				 /* aunque deberia de quitar el selecionado anterior al indicarle uno
				 * nuevo ya que no hemos dicho que el selected sea de selección
				 * múltiple, no lo hace, y te deja seleccionado el anterior option,
				 * asi que primero deberemos deseleccionar todos los option de ese
				 * select antes de indicarle el nuevo selected*/

				if (!carga) {
					$("#selListPais" + sufijo + ' option').removeAttr("selected");
					$("#selListPais" + sufijo).val(CODESPANA).attr("selected",
							"selected");
				}
				$("#selListPais" + sufijo).attr("disabled", "true");


				 /* si el input de si españa,
				 * los input de provincias, municipios, DC y los select de
				 * provincias y municipios del grupo del sufijo correspondiente, se
				 * activan y se quedan a vacios para que el usuario introduzca los
				 * valores*/

				if (!carga) {
					$("#inputCodProv" + sufijo).val('');
					// 0 opcion de seleccione (Provincia, Municipio o Pais;
					// depende desde el select que se ejecute)
					$("#selListProv" + sufijo + ' option').removeAttr(
							"selected");
					$("#selListProv" + sufijo + ' option[value="0"]').attr(
							"selected", "selected");

					$("#inputCodMuni" + sufijo).val('');
					$("#inputCodDc" + sufijo).val('');
					$("#selListMuni" + sufijo + ' option').removeAttr(
							"selected");
					$("#selListMuni" + sufijo + ' option[value="0"]').attr(
							"selected", "selected");
					/*para que el usuario no pueda introducir en la provincia o municipio los códigos de no procede,
					 * pues estamos en opcion española y si procede una provincia o municipio, eliminaremos esa opcion
					 * de los select de provincias y municipios.*/
					$("#selListProv" + sufijo +' option[value="98"]').remove();
					$("#selListMuni" + sufijo +' option[value="998"]').remove();
				}
				$("#inputCodProv" + sufijo).removeAttr("disabled");
				$("#selListProv" + sufijo).removeAttr("disabled");
				$("#inputCodMuni" + sufijo).removeAttr("disabled");
				$("#inputCodDc" + sufijo).removeAttr("disabled");
				$("#selListMuni" + sufijo).removeAttr("disabled");

			}
			break;
		/*Datos extranjeros*/
		case '2':
			if (sufijo != 'Nacionalidad'){
			// No procede
				if (!carga) {
					$("#inputSiPaisExtPara" + sufijo).val('2');
					// el input del codigo del pais se pone a valor vacio
					$("#inputCodPais" + sufijo).val('');
					/* aunque deberia de quitar el selecionado anterior al
					 * indicarle uno nuevo ya que no hemos dicho que el
					 * selected sea de selección múltiple, no lo hace, y te
					 * deja seleccionado el anterior option, asi que primero
					 * deberemos deseleccionar todos los option de ese
					 * select antes de indicarle el nuevo selected*/
					$("#selListPais" + sufijo + ' option').removeAttr("selected");
					// el select de los paises, se deja seleccionada la opcion
					// de seleccione un pais.
					// en la opcion de seleccionar Pais, como se crea inicialmente con
					// el select, sabemos que siempre existe, con lo que ya no hace
					// falta preguntar como en el resto de casos
					$("#selListPais" + sufijo + ' option[value="0"]').attr(
							"selected", "selected");
					$("#selListPais" + sufijo +' option[value="'+CODESPANA+'"]').remove();

					$("#inputCodProv" + sufijo).val('98');
					// value 98 es el que le hemos puesto al no procede (porque
					// son datos extranjeros)
					var optNoProcede = $("#selListProv" + sufijo+ ' option[value="98"]');
					if ($(optNoProcede).length === 0) {
						$("#selListProv" + sufijo + ' option').removeAttr(
								"selected");
						$("#selListProv" + sufijo)
								.append(
										'<option value="98" selected="selected">-- No procede --</option>');
					} else {
						$("#selListProv" + sufijo + " option:selected").removeAttr("selected");
						$("#selListProv" + sufijo + " option[value=98]").prop('selected', true);
					}

					$("#inputCodMuni" + sufijo).val('998');
					$("#inputCodDc" + sufijo).val('');
					optNoProcede = $("#selListMuni" + sufijo
							+ ' option[value="998"]');
					if ($(optNoProcede).length === 0) {
						$("#selListMuni" + sufijo + ' option').removeAttr(
								"selected");
						$("#selListMuni" + sufijo)
								.append(
										'<option value="998" selected="selected">-- No procede --</option>');
					} else {
						$("#selListMuni" + sufijo + " option:selected").removeAttr("selected");
						$("#selListMuni" + sufijo + " option[value=998]").prop('selected', true);
					}
				}// cierre modificacion value elementos por no ser en la
				// carga de la pagina
				/*Todo lo que tiene que ver con españa se deshabilita y se habilitan
				 * las secciones del pais para indicar de qué pais extranjero se trata*/
				$("#inputCodProv" + sufijo).attr("disabled", "true");
				$("#selListProv" + sufijo).attr("disabled", "true");
				$("#inputCodMuni" + sufijo).attr("disabled", "true");
				$("#inputCodDc" + sufijo).attr("disabled", "true");
				$("#selListMuni" + sufijo).attr("disabled", "true");

				$("#inputCodPais" + sufijo).removeAttr("disabled");
				$("#selListPais" + sufijo).removeAttr("disabled");
				/*el select se habilita para poder buscar el pais extranjero que deseas poner;
				 * pero como debe ser extranjero, no permitiremos que se seleccione españa*/
				/*si uso esta opcion, luego ya no vuelve a la lista, por eso al inicio del método
				 * la incluiremos en la lista sino existe.*/
				$("#selListPais" + sufijo +' option[value="'+CODESPANA+'"]').remove();
			}
			break;
		// si introducimos cualquier otro valor,
		default:
			break;
		}
		$("#textoSiPaisPara" + sufijo).text(
				applicationEnums.lugnac[$("#inputSiPaisEspPara" + sufijo).val()]);
	} finally {
		// volvemos a dar via libre a las llamadas de cambios de valor al hacer
		// el cambio del flag de nuevo a falso
		window.flagChanginProvincia = false;
	}
	//para que vuelvan a validarse los campos despues de los cambios realizados en este método; pues si antes de este método, la provincia o municipio tenia un
	//dato no valido y se mostraba el icono, al cambiar aqui dentro su valor, el icono de error (aunque el dato ya era válido), no desaparecía.
	//$('input').valid();
}

/**
 * Función que inicializa y actualiza el comportamiento de los elementos
 * relacionados con el codigo que indica la NACIONALIDAD, a la carga del
 * formulario y en la modificacion del codigo. La función recibe 1 único
 * parametro; pero dependiendo desde donde venga la llamada a la función, ese
 * parametro vendrá como un string o como un objeto, y asi, preguntando como es,
 * sabremos desde donde viene para poder distinguir que acciones deben
 * realizarse en cada momento (pues en algunos puntos realizan acciones
 * diferentes si el formulario se carga inicialmente que si se le ha modificado
 * alguno de sus valores)
 * Valores para nacionalidad: 0=no consta,1=española, 2= extranjera. No blanco
 * @param sufijo
 */
function inicializarYactualizarCodSiPaisPara(sufijo) {
	carga = true;
	// comprobaremos si se ha pasado el sufijo o no (lo que diferencia si a esta
	// funcion se la ha llamado para la carga de la pagina o para el evento
	// change)
	// si viene de la carga del documento no hay problema, pero si viene del
	// evento change, por la forma en la que hemos tenido que pasar los valores,
	// hay
	// que hacerles un formateo antes de poder trabajar con ellos porque llega
	// como objeto
	if (!(sufijo.constructor === String)) {
		// cambio tiene la palabra change, que es el evento producido
		cambio = sufijo.type;
		sufijo = sufijo.data.sufijo;
		carga = false;
	}
	// si el sufijo es de la zona de defunción, esta función no deberá
	// ejecutarse, pues no contiene el elemento desde el que llamamos a la
	// función
	if (sufijo === "Defun")
		return;
	// ponemos el codigo para el semaforo y que no se esten llamando de continuo
	if (window.flagChanginProvincia) {
		return;
	}
	window.flagChanginProvincia = true;
	try {
			/*si en algún momento (mientras permanecemos en el boletin), se ha indicado nacionalidad extranjera,
			 * la opción de españa se habrá eliminado de la lista (para que no se pueda seleccionar), pero si
			 * luego se vuelve a cambiar a nacionalidad española, como no se vuelve a recargar el select, dicha
			 * opción no la encuentra y te indica "seleccione pais"; para solucionarlo, hemos añadido la opción de
			 * españa al select sólamente sino existe.*/
			var optEspanya = $("#selListPais" + sufijo+ ' option[value="'+CODESPANA+'"]');
			if ($(optEspanya).length === 0) {
				$("#selListPais" + sufijo).append('<option value="'+CODESPANA+'"> España </option>');
			}
		// dependiendo el valor que tenga el booleano de si es en el extranjero
		// o no (la nacionalidad, el nacimiento o la residencia), se deberán
		// hacer unas cosas u otras
		switch ($("#codSiPaisPara" + sufijo).val()) {
		// si ponemos en nacionalidad que no consta, se deshabilita todo
		case '0':
			if (!carga) {
				$("#inputCodPais" + sufijo).val('');
			}
			$("#inputCodPais" + sufijo).attr("disabled", "true");
			// solo debo añadir la option de no consta sino existe ya, porque
			// sino obtengo duplicados de ese option
			// pero dentro de la tabla de paises, ya existe esa opcion, asi que
			// únicamente debo decir que la seleccione
			/*
			 * aunque deberia de quitar el selecionado anterior al indicarle uno
			 * nuevo ya que no hemos dicho que el selected sea de selección
			 * múltiple, no lo hace, y te deja seleccionado el anterior option,
			 * asi que primero deberemos deseleccionar todos los option de ese
			 * select antes de indicarle el nuevo selected
			 */
			if (!carga) {
				$("#selListPais" + sufijo + ' option').removeAttr("selected");
				/*999 -- No consta*/
				$("#selListPais" + sufijo + ' option[value="999"]').attr(
						"selected", "selected");
			}
			$("#selListPais" + sufijo).attr("disabled", "true");
			break;
		// nacionalidad a española
		case '1':
			if (!carga) {
				// CODESPANA contiene el codigo '108' que es el que corresponde
				// a españa
				$("#inputCodPais" + sufijo).val(CODESPANA);
			}
			$("#inputCodPais" + sufijo).attr("disabled", "true");
			if (!carga) {
				$("#selListPais" + sufijo + ' option').removeAttr("selected");
				$("#selListPais" + sufijo).val(CODESPANA).attr("selected",
						"selected");
			}
			$("#selListPais" + sufijo).attr("disabled", "true");
			break;
		// nacionalidad extranjera
		case '2':
			$("#inputCodPais" + sufijo).removeAttr("disabled");
			if (!carga) {
				$("#inputCodPais" + sufijo).val('');
			}
			$("#selListPais" + sufijo).removeAttr("disabled");
			/*el select se habilita para poder buscar el pais extranjero que deseas poner;
			 * pero como debe ser extranjero, no permitiremos que se seleccione españa*/
			/*si uso esta opcion, luego ya no vuelve a la lista, por eso al inicio del método
			 * la incluiremos en la lista sino existe.*/
			$("#selListPais" + sufijo +' option[value="'+CODESPANA+'"]').remove();
			if (!carga) {
				$("#selListPais" + sufijo + ' option').removeAttr("selected");
				$("#selListPais" + sufijo + ' option[value="0"]').attr(
						"selected", "selected");
				$("#selListPais" + sufijo +' option[value="'+CODESPANA+'"]').remove();
			}
			break;
		default:
			break;
		}
		$("#textoSiPaisPara" + sufijo).text(
				applicationEnums.nacionalidad[$("#codSiPaisPara" + sufijo).val()]);
	} finally {
		// volvemos a dar via libre a las llamadas de cambios de valor al hacer
		// el cambio del flag de nuevo a falso
		window.flagChanginProvincia = false;
	}
} // cierre funcion de cambio en input booleano para opciones extranjeras

/**
 * Función que inicializa y actualiza el comportamiento de los elementos
 * relacionados con el codigo del pais a la carga del formulario y en la
 * modificacion del codigo. La función recibe 1 único parametro; pero
 * dependiendo desde donde venga la llamada a la función, ese parametro vendrá
 * como un string o como un objeto, y asi, preguntando como es, sabremos desde
 * donde viene para poder distinguir que acciones deben realizarse en cada
 * momento (pues en algunos puntos realizan acciones diferentes si el formulario
 * se carga inicialmente que si se le ha modificado alguno de sus valores)
 *
 * @param sufijo
 */
function inicializarYactualizarCodPais(sufijo) {
	carga = true;
	// comprobaremos si se ha pasado el sufijo o no (lo que diferencia si a esta
	// funcion se la ha llamado para la carga de la pagina o para el evento
	// change)
	// si viene de la carga del documento no hay problema, pero si viene del
	// evento change, por la forma en la que hemos tenido que pasar los valores,
	// hay
	// que hacerles un formateo antes de poder trabajar con ellos porque llega
	// como objeto
	if (!(sufijo.constructor === String)) {
		// cambio tiene la palabra change, que es el evento producido
		cambio = sufijo.type;
		sufijo = sufijo.data.sufijo;
		carga = false;
	}
	// si el sufijo es de la zona de defunción, esta función no deberá
	// ejecutarse, pues no contiene el elemento desde el que llamamos a la
	// función
	if (sufijo === "Defun")
		return;
	// ponemos el codigo para el semaforo y que no se esten llamando de continuo
	if (window.flagChanginProvincia) {
		return;
	}
	window.flagChanginProvincia = true;
	try {
		$input = $("#inputCodPais" + sufijo);
		if (($input.val() === '') && (!carga)) {
			/*
			 * aunque deberia de quitar el selecionado anterior al indicarle uno
			 * nuevo ya que no hemos dicho que el selected sea de selección
			 * múltiple, no lo hace, y te deja seleccionado el anterior option,
			 * asi que primero deberemos deseleccionar todos los option de ese
			 * select antes de indicarle el nuevo selected
			 */
			$("#selListPais" + sufijo + ' option').removeAttr("selected");
			$("#selListPais" + sufijo + ' option[value="0"]').attr("selected",
					"selected");
		} else {
			if (!carga) {
				// Habrá que controlar que si el código es el de españa, deberán
				// hacerse unas acciones sobre el resto de elementos y si es
				// cualquier otro codigo, otras acciones
				$("#selListPais" + sufijo).val($input.val());
			}
			if ($input.val() === '108') { // codigo de españa
				// sino estamos en nacionalidad habrá que hacer mas cambios,
				// pues hay mas elementos
				if (sufijo != 'Nacionalidad') {
					if (!carga) {
						$sufijoProvAux = $("#inputCodProv" + sufijo).val();
						if ($sufijoProvAux == '98' || $sufijoProvAux == '0'){
							$("#inputCodProv" + sufijo).val('');
							$("#selListProv" + sufijo + ' option').removeAttr(
									"selected");
							$("#selListProv" + sufijo + ' option[value="0"]').attr(
									"selected", "selected");
						}
						$sufijoMuniAux = $("#inputCodMuni" + sufijo).val();
						if ($sufijoMuniAux == '998' || $sufijoMuniAux == '0'){
							$("#inputCodMuni" + sufijo).val('');
							$("#inputCodDc" + sufijo).val('');
							$("#selListMuni" + sufijo + ' option').removeAttr(
									"selected");
							$("#selListMuni" + sufijo + ' option[value="0"]').attr(
									"selected", "selected");
						}
					}
					$("#inputCodProv" + sufijo).removeAttr("disabled");
					$("#selListProv" + sufijo).removeAttr("disabled");
					$("#inputCodMuni" + sufijo).removeAttr("disabled");
					$("#inputCodDc" + sufijo).removeAttr("disabled");
					$("#selListMuni" + sufijo).removeAttr("disabled");
				}
				// comentado porque creo que no es correcto desactivar el select de la lista de paises por el hecho de poner el codigo
				// de país manualmente
				// $("#selListPais" + sufijo).attr("disabled", "true");
			} else { // codigo pais extranjero
				if (sufijo != 'Nacionalidad') {
					if (!carga) {
						$("#inputCodProv" + sufijo).val('98');
						var optNoProcede = $("#selListProv" + sufijo
								+ ' option[value="998"]');
						if ($(optNoProcede).length === 0) {
							$("#selListProv" + sufijo + ' option').removeAttr(
									"selected");
							$("#selListProv" + sufijo)
									.append(
											'<option value="98" selected="selected">-- No procede --</option>');
						} else {
							$("#selListProv" + sufijo + " option:selected").removeAttr("selected");
							$("#selListProv" + sufijo + " option[value=98]").prop('selected', true);
						}
						$("#inputCodMuni" + sufijo).val('998');
						$("#inputCodDc" + sufijo).val('');
						var optNoProcede = $("#selListMuni" + sufijo
								+ ' option[value="998"]');
						if ($(optNoProcede).length === 0) {
							$("#selListMuni" + sufijo + ' option').removeAttr(
									"selected");
							$("#selListMuni" + sufijo)
									.append(
											'<option value="998" selected="selected">-- No procede --</option>');
						} else {
							$("#selListMuni" + sufijo + " option:selected").removeAttr("selected");
							$("#selListMuni" + sufijo + " option[value=998]").prop('selected', true);
						}

						$("#inputCodProv" + sufijo).attr("disabled", "true");
						$("#selListProv" + sufijo).attr("disabled", "true");
						$("#inputCodMuni" + sufijo).attr("disabled", "true");
						$("#inputCodDc" + sufijo).attr("disabled", "true");
						$("#selListMuni" + sufijo).attr("disabled", "true");
					}
				}
				$("#selListPais" + sufijo).removeAttr("disabled");
			}
		}// cierre else, el input contiene datos
	} finally {
		// volvemos a dar via libre a las llamadas de cambios de valor al hacer
		// el cambio del flag de nuevo a falso
		window.flagChanginProvincia = false;
	}
} // cierre funcion de cambio en input del codigo del pais

/**
 * Función que inicializa y actualiza el comportamiento de los elementos
 * relacionados con select que tiene el texto de los paises, a la carga del
 * formulario y en la modificacion del codigo. La función recibe 1 único
 * parametro; pero dependiendo desde donde venga la llamada a la función, ese
 * parametro vendrá como un string o como un objeto, y asi, preguntando como es,
 * sabremos desde donde viene para poder distinguir que acciones deben
 * realizarse en cada momento (pues en algunos puntos realizan acciones
 * diferentes si el formulario se carga inicialmente que si se le ha modificado
 * alguno de sus valores)
 *
 * @param sufijo
 */
function inicializarYactualizarListPais(sufijo) {
	carga = true;
	// comprobaremos si se ha pasado el sufijo o no (lo que diferencia si a esta
	// funcion se la ha llamado para la carga de la pagina o para el evento
	// change)
	// si viene de la carga del documento no hay problema, pero si viene del
	// evento change, por la forma en la que hemos tenido que pasar los valores,
	// hay
	// que hacerles un formateo antes de poder trabajar con ellos porque llega
	// como objeto
	if (!(sufijo.constructor === String)) {
		// cambio tiene la palabra change, que es el evento producido
		cambio = sufijo.type;
		sufijo = sufijo.data.sufijo;
		carga = false;
	}
	// si el sufijo es de la zona de defunción, esta función no deberá
	// ejecutarse, pues no contiene el elemento desde el que llamamos a la
	// función
	if (sufijo === "Defun")
		return;
	if (window.flagChanginProvincia) {
		return;
	}
	window.flagChanginProvinci = true;
	try {
		var optSelected = $("#selListPais" + sufijo + " option:selected");
		// cambio valor al input y lo habilito (por si estuviera deshabilitado)
		if (!carga) {
			$("#inputCodPais" + sufijo).val(optSelected.val());
		}
		$("#inputCodPais" + sufijo).removeAttr("disabled");
		// Hay que controlar que si el código es el de españa, deberán hacerse
		// unas acciones sobre el resto de elementos y si es cualquier otro
		// codigo, otras acciones
		if ((optSelected.val() === CODESPANA)) { // codigo de españa
			$("#inputCodPais" + sufijo).attr("disabled", "true");
			// elementos con informacion española habilitados y en vacio o con
			// la opcion de seleccione ....
			if (!carga) {
				$sufijoProvAux = $("#inputCodProv" + sufijo).val();
				if ($sufijoProvAux == '98' || $sufijoProvAux == '0'){
					$("#inputCodProv" + sufijo).val('');
					$("#selListProv" + sufijo + ' option').removeAttr("selected");
					$("#selListProv" + sufijo + ' option[value="0"]').attr(
							"selected", "selected");
				}
				$sufijoMuniAux = $("#inputCodMuni" + sufijo).val();
				if ($sufijoMuniAux == '998' || $sufijoMuniAux == '0'){
					$("#inputCodMuni" + sufijo).val('');
					$("#inputCodDc" + sufijo).val('');
					$("#selListMuni" + sufijo + ' option').removeAttr("selected");
					$("#selListMuni" + sufijo + ' option[value="0"]').attr(
							"selected", "selected");
				}
			}
			$("#inputCodProv" + sufijo).removeAttr("disabled");
			$("#selListProv" + sufijo).removeAttr("disabled");
			$("#inputCodMuni" + sufijo).removeAttr("disabled");
			$("#inputCodDc" + sufijo).removeAttr("disabled");
			$("#selListMuni" + sufijo).removeAttr("disabled");
		} else {
			if (!carga) {
				// elementos con informacion española deshabilitados y en valor
				// 998
				// con la opcion de No procede (pues es en el extranjero)
				$("#inputCodProv" + sufijo).val('98');
				var optNoProcede = $("#selListProv" + sufijo
						+ ' option[value="98"]');
				if ($(optNoProcede).length === 0) {
					$("#selListProv" + sufijo + ' option').removeAttr(
							"selected");
					$("#selListProv" + sufijo)
							.append(
									'<option value="98" selected="selected">-- No procede --</option>');
				} else {
					$("#selListProv" + sufijo + " option:selected").removeAttr("selected");
					$("#selListProv" + sufijo + " option[value=98]").prop('selected', true);
				}
				$("#inputCodMuni" + sufijo).val('998');
				$("#inputCodDc" + sufijo).val('');
				var optNoProcede = $("#selListMuni" + sufijo
						+ ' option[value="998"]');
				if ($(optNoProcede).length === 0) {
					// a todos los elementos option del select indicado,
					// quitales el atributo selected
					$("#selListMuni" + sufijo + ' option').removeAttr(
							"selected");
					$("#selListMuni" + sufijo)
							.append(
									'<option value="998" selected="selected">-- No procede --</option>');
				} else {
					$("#selListMuni" + sufijo + " option:selected").removeAttr("selected");
					$("#selListMuni" + sufijo + " option[value=998]").prop('selected', true);
				}

				$("#inputCodProv" + sufijo).attr("disabled", "true");
				$("#selListProv" + sufijo).attr("disabled", "true");
				$("#inputCodMuni" + sufijo).attr("disabled", "true");
				$("#inputCodDc" + sufijo).attr("disabled", "true");
				$("#selListMuni" + sufijo).attr("disabled", "true");
			}
		}
	} finally {
		window.flagChanginProvincia = false;
	}
} // cierre funcion de cambio en el select del nombre del pais

/**
 * Función que creará el listado de municipios en el select con los municipios
 * de la provincia que se haya elegido en el select de provincias con el que
 * está relacionado
 *
 * @param sufijo
 * @param codprov
 */
function cargarMuncipiosDeProvincia(sufijo, codprov) {
	$.getJSON(
		AppBaseURL + 'generaldata/muncipiosbyprovince/'+ codprov, function(data) {
			var $select = $("#selListMuni" + sufijo);

			$select.empty();
			// genero la nueva lista de municipios para la nueva
			// provincia
			// como la genero nuevamente cada vez que llamo a este
			// metodo,
			// no hay peligro que la opcion de seleccione poblacion
			// acabe duplicada
			// como en el resto de selects, ya que se elimina al
			// eliminar el anterior contenido del select
			// por lo que siempre debo volver a añadirla
			$select
					.append('<option selected="selected" value="0">-- Seleccione población --</option>');
			$select.append('<option value="999">-- No consta --</option>');

			$.each(data, function(index, municipio) {
				$select.append('<option value="'
						+ municipio.codmunicipio + '">'
						+ municipio.municipio + '</option>');
			});
			// limpio el valor del codigo del municipio
			$("#inputCodMuni" + sufijo).val('');
			// limpio el valor del digito de control
			$("#inputCodDc" + sufijo).val('');
			// var $inputText = $("#inputCodMuni" + sufijo);
			// $inputText.attr('data-valid-values',
			// JSON.stringify(data));
		});
}

/**
 * Función que devolverá un dígito de control correspondiente a una provincia y
 * un municipio
 *
 * @param codprov
 * @param codmuni
 * @returns Integer
 */
function getDCMunicipio(codprov, codmuni, sufijo) {
	// sintaxis getJSON (url donde llamamos, parametros que le pasamos, funcion
	// de success)
	// no es necesario pasarle los parametros como tal, porque se los pasas
	// mediante la url
	$.getJSON(AppBaseURL + 'generaldata/municipio' + '/' + codprov + '/'
			+ codmuni, function(data) {
		$("#inputCodDc" + sufijo).val(data.dc);
	});// cierre de la funcion de getJSON
}
