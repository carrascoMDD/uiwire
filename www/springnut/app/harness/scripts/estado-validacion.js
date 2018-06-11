'use strict';

/*
estado-validacion.js
Creado 201407200026
 */



var aEstadoValidacionCtrl_Prototype = (function() {

    var COMENZAR_ACTUALIZAR = true;

    var ESTADO_PROCESO_TERMINADO = 2;

    var INTERVALO_ACTUALIZACION_PORDEFECTO = 1000;

    var INTERVALO_ACTUALIZACION_MINIMO = 100;


    var PARAMETROS_PROCESO_FIELDS = [
        [ "tipoProceso"],
        [ "idProceso"],
        [ "fechaInicioProceso"],
        [ "tipoBoletinUrlPath"],
        [ "idFichero"],
        [ "provinciaFichero"],
        [ "provinciaFichero", "did_provinciaFichero2"],
        [ "anoFichero"],
        [ "anoFichero", "did_anoFichero2"],
        [ "mesFichero"],
        [ "mesFichero", "did_mesFichero"],
        [ "faseNumero"],
        [ "criterio"],
        [ "idFase"]
    ];


    var OTHER_FIELDS = [
        [ "informeAUsuario"],
        [ "fechaInforme"]
    ];


    var INFORME_PROGRESO_FIELDS = [
        [ "informeGenerable"],
        [ "fechaInicio"],
        [ "fechaUltima"],
        [ "porcentaje"],
        [ "segundosTranscurridos"],
        [ "segundosRestantes"],        
        [ "estadoProceso"],
        [ "estadoProcesoLabel"],
        [ "exitoProceso"],
        [ "exitoProcesoLabel"],
        [ "causaError"],
        [ "causaErrorLabel"], 
        [ "afectadoError"],
        [ "detalleError"],        
        [ "estadoFase"],
        [ "estadoFaseLabel"],
        [ "exitoFase"],
        [ "exitoFaseLabel"],
        [ "fechaInicioFase"],
        [ "fechaUltimaFase"],
        [ "faseNumFallos"],
        [ "numValidaciones"],
        [ "numTodasCondiciones"],
        [ "numTotalErrores"],
        [ "numTotalBedsErroneos"],
        [ "validacionIdx"],
        [ "validacionIdError"],
        [ "validacionDescripcion"],
        [ "condicionGlobalIdx"],
        [ "numCondiciones"],
        [ "condicionIdx"],
        [ "condicionCondicion"],
        [ "numErrores"],
        [ "numBedsErroneos"]
    ];



    var aPrototype = {};

    aPrototype._v_Type = "EstadoValidacionCtrl";


    aPrototype._v_Timeout = null;

    aPrototype._v_Refrescar = false;


    var _pInit = function() {

        this._v_Type = aPrototype._v_Type;

        this._v_Timeout = null;

        this._v_Refrescar = COMENZAR_ACTUALIZAR;
    };
    if( _pInit){} /* CQT */
    aPrototype._pInit = _pInit;





    var pHookupToUI = function() {

        var aThis = this;

        var aPausarButton = $("#did_Button_PausarActualizacion");
        aPausarButton.click(function() {
            aThis.pPausarActualizacion();
        });

        var aContinuarButton = $("#did_Button_ContinuarActualizacion");
        aContinuarButton.click(function() {
            aThis.pContinuarActualizacion();
        });

        var aSolicitarErroresavisosButtonFlat = $("#did_Button_SolicitarErroresYavisosFlat");
        aSolicitarErroresavisosButtonFlat.click(function() {
            aThis.pSolicitarErroresavisosFlat();
        });

        var aSolicitarErroresavisosButtonTree = $("#did_Button_SolicitarErroresYavisosTree");
        aSolicitarErroresavisosButtonTree.click(function() {
            aThis.pSolicitarErroresavisosTree();
        });

        if( this._v_Refrescar) {
            aPausarButton.show();
            aContinuarButton.hide();
        }
        else {
            aPausarButton.hide();
            aContinuarButton.show();
        }
        
        $('#did_div_errorComunicacion').hide();
        $('#did_errorComunicacion').val( "");        
    };
    if( pHookupToUI){} /* CQT */
    aPrototype.pHookupToUI = pHookupToUI;





    var pContinuarActualizacion = function() {

        this._v_Refrescar = true;


        var aPausarButton = $("#did_Button_PausarActualizacion");
        var aContinuarButton = $("#did_Button_ContinuarActualizacion");

        aPausarButton.show();
        aContinuarButton.hide();


        if( !( this._v_Timeout == null)) {
            window.clearTimeout( this._v_Timeout);
            this._v_Timeout = null;
        }

        this.pUpdateRequest();

    };
    if( pContinuarActualizacion){} /* CQT */
    aPrototype.pContinuarActualizacion = pContinuarActualizacion;




    var pPausarActualizacion = function() {

        this._v_Refrescar = false;

        var aPausarButton = $("#did_Button_PausarActualizacion");
        var aContinuarButton = $("#did_Button_ContinuarActualizacion");

        aPausarButton.hide();
        aContinuarButton.show();


        if( !( this._v_Timeout == null)) {
            window.clearTimeout( this._v_Timeout);
            this._v_Timeout = null;
        }
    };
    if( pPausarActualizacion){} /* CQT */
    aPrototype.pPausarActualizacion = pPausarActualizacion;








    var pUpdateRequest = function() {

        if( !this._v_Refrescar) {
            return;
        }

        var aThis = this;

        var aURL = $("#did_urlActualizacion").val();

        this.pAjaxLoaderShow();
        
        $('#did_div_errorComunicacion').hide();
        $('#did_errorComunicacion').val( "");


        var aPromise = $.ajax( {
            type: "GET",
            url:  aURL,
            success: function( theResponse) {
                aThis.pUpdateResponse( theResponse);
            }
        });
        aPromise.fail( function( theResponse, theError) {
            aThis.pUpdateError( theResponse, theError);
        })

    };
    if( pUpdateRequest){} /* CQT */
    aPrototype.pUpdateRequest = pUpdateRequest;






    var pUpdateResponse = function( theResponse) {

        this.pAjaxLoaderHide();
        
        $('#did_div_errorComunicacion').hide();
        $('#did_errorComunicacion').val( "");
        
        if( ( theResponse == null) || ( typeof( theResponse) == "string") ) {
            this.pUpdateError( theResponse, null);
            return;
        }
        
        console.log("Update success");

        this.pRefreshUI( theResponse);

        this.pScheduleNextUpdate();

    };
    if( pUpdateResponse){} /* CQT */
    aPrototype.pUpdateResponse = pUpdateResponse;






    var pUpdateError = function( theResponse, theError) {
        if( theResponse) {} /* CQT */
        if( theError) {} /* CQT */

        this.pAjaxLoaderHide();

        this.pPausarActualizacion();

        var anHTML = $('#did_errorComunicacion').html();
        if( !anHTML) {
            anHTML = "";
        }
        var anErrorMsg = "Error de comunicación con el servidor. Por favor refresque la página o vuelva al inicio, y autentifíquese.";
        anHTML = anErrorMsg;
        $('#did_errorComunicacion').html( anHTML);
        $('#did_div_errorComunicacion').show();

        console.log("Update error");
    };
    if( pUpdateError){} /* CQT */
    aPrototype.pUpdateError = pUpdateError;





    var pRefreshUI = function( theResponse) {

        if( theResponse == null) {
            return;
        }

        this.pFillUIValues( OTHER_FIELDS, theResponse);


        var aParametrosProceso = theResponse.parametrosProceso;
        if( !( aParametrosProceso == null)) {
            this.pFillUIValues( PARAMETROS_PROCESO_FIELDS, aParametrosProceso);
        }


        var aInformeGenerable = false;

        var aInformeProgreso = theResponse.informeProgreso;
        if( !( aInformeProgreso == null)) {

            aInformeGenerable =  aInformeProgreso.informeGenerable;

            if( aInformeProgreso.estadoProceso == ESTADO_PROCESO_TERMINADO) {
                this.pPausarActualizacion();
            }

            this.pFillUIValues( INFORME_PROGRESO_FIELDS, aInformeProgreso);
            
            var aExcepcion = aInformeProgreso.excepcion;
            if( aExcepcion) {
                $("#did_excepcion").val( aExcepcion);
                $("#did_div_excepcion").show();
            }
            else {
                $("#did_excepcion").val( "");
                $("#did_div_excepcion").hide();
            }            
        }


        if( aInformeGenerable) {
            $("#did_button_reportValidationFlat").show();
            $("#did_button_reportValidationTree").show();
            $("#did_div_erroresYavisosFlat").show();
            $("#did_div_erroresYavisosTree").show();
        }
        else {
            $("#did_button_reportValidationFlat").hide();
            $("#did_button_reportValidationTree").hide();
            $("#did_div_erroresYavisosFlat").hide();
            $("#did_div_erroresYavisosTree").hide();
        }


       

    };
    if( pRefreshUI){} /* CQT */
    aPrototype.pRefreshUI = pRefreshUI;





    var pFillUIValues = function( theFields, theValues) {

        if( ( theFields == null) || ( theValues == null)) {
            return;
        }

        var aNumFields = theFields.length;
        for( var aFieldIdx=0; aFieldIdx < aNumFields; aFieldIdx++) {
            var aField = theFields[ aFieldIdx];
            if( aField == null) {
                continue;
            }

            var aFieldLength = aField.length;
            if( aFieldLength < 1) {
                continue;
            }

            var aFieldName = aField[ 0];
            var aDomId = aFieldName;
            if( aFieldLength > 1) {
                aDomId = aField[ 1];
            }
            else {
                aDomId = "did_" + aFieldName;
            }

            var aDomElement = $("#" + aDomId);
            if( aDomElement == null) {
                continue;
            }

            var aFieldValue = theValues[ aFieldName];
            if( aFieldValue == null) {
                aDomElement.text( "");
            }
            else {
                aDomElement.text( "" + aFieldValue);
            }
        }
    };
    if( pFillUIValues){} /* CQT */
    aPrototype.pFillUIValues = pFillUIValues;





    var pScheduleNextUpdate = function() {

        if( !this._v_Refrescar) {
            return;
        }

        if( !( this._v_Timeout == null)) {
            window.clearTimeout( this._v_Timeout);
            this._v_Timeout = null;
        }


        var aTimeoutIntervalStr = $("#did_intervaloActualizacion").val();
        var aTimeoutInterval = 0;
        try {
            aTimeoutInterval = parseInt( aTimeoutIntervalStr)
        }
        catch ( anException) {}

        if( !aTimeoutInterval) {
            aTimeoutInterval = INTERVALO_ACTUALIZACION_PORDEFECTO;
        }

        if( aTimeoutInterval < INTERVALO_ACTUALIZACION_MINIMO) {
            aTimeoutInterval = INTERVALO_ACTUALIZACION_MINIMO;
        }

        var aThis = this;
        setTimeout(
            function() {
                aThis.pUpdateRequest();
            },
            aTimeoutInterval
        );
    };
    if( pScheduleNextUpdate){} /* CQT */
    aPrototype.pScheduleNextUpdate = pScheduleNextUpdate;







    var pSolicitarErroresavisosFlat= function() {

        $("#did_div_erroresYavisosFlat_vistaPrevia").hide();
        $("#did_Button_MostrarErroresYavisosFlat").hide();
        $("#did_Button_OcultarErroresYavisosFlat").hide();

        var aTablaToAppendTo = $('#did_div_erroresYavisosFlat_vistaPreviaTabla');
        aTablaToAppendTo.empty();

        var aThis = this;

        var aURL = $("#did_urlSolicitarErroresYAvisosFlat").val();

        var aIdFase = $("#did_idFase").text();
        var aPayload = { "idFase": aIdFase};

        this.pAjaxLoaderShow();

        var aPromise = $.ajax( {
            type: "GET",
            url:  aURL,
            data: aPayload,
            success: function( theResponse) {
                aThis.pErroresavisosResponseFlat( theResponse);
            }
        });
        aPromise.fail( function( theResponse, theError) {
            aThis.pErroresavisosErrorFlat( theResponse, theError);
        })
    };
    if( pSolicitarErroresavisosFlat){} /* CQT */
    aPrototype.pSolicitarErroresavisosFlat = pSolicitarErroresavisosFlat;





    var pErroresavisosResponseFlat= function( theResponse) {


        if( theResponse == null) {
            $("#did_div_erroresYavisosFlat_vistaPrevia").hide();
            $("#did_Button_MostrarErroresYavisosFlat").hide();
            $("#did_Button_OcultarErroresYavisosFlat").hide();
            return;
        }


        var someValidacioneserrores = theResponse.validacioneserrores;

        var aTemplate = $('#did_erroresYavisosFlat_template');
        var anExpanded = aTemplate.tmpl( someValidacioneserrores);

        var aTablaToAppendTo = $('#did_div_erroresYavisosFlat_vistaPreviaTabla');
        aTablaToAppendTo.empty();
        anExpanded.appendTo( aTablaToAppendTo);

        $("#did_div_erroresYavisosFlat_vistaPrevia").show();
        $("#did_Button_MostrarErroresYavisosFlat").hide();
        $("#did_Button_OcultarErroresYavisosFlat").show();

        this.pAjaxLoaderHide();

    };
    if( pErroresavisosResponseFlat){} /* CQT */
    aPrototype.pErroresavisosResponseFlat = pErroresavisosResponseFlat;





    var pErroresavisosErrorFlat= function( theResponse) {

        this.pAjaxLoaderHide();

        $("#did_div_erroresYavisosFlat_vistaPrevia").hide();
        $("#did_Button_MostrarErroresYavisosFlat").hide();
        $("#did_Button_OcultarErroresYavisosFlat").hide();

        var aMsg =  "Error obteniendo errores y avisos Plano";
        console.log( aMsg);
        alert( aMsg);
    };
    if( pErroresavisosErrorFlat){} /* CQT */
    aPrototype.pErroresavisosErrorFlat = pErroresavisosErrorFlat;









    var pSolicitarErroresavisosTree= function() {

        $("#did_div_erroresYavisosTree_vistaPrevia").hide();
        $("#did_Button_MostrarErroresYavisosTree").hide();
        $("#did_Button_OcultarErroresYavisosTree").hide();

        var aDivToAppendTo = $('#did_div_erroresYavisosTree_vistaPreviaDiv');
        aDivToAppendTo.empty();

        var aThis = this;

        var aURL = $("#did_urlSolicitarErroresYAvisosTree").val();

        var aIdFase = $("#did_idFase").text();
        var aPayload = { "idFase": aIdFase};

        this.pAjaxLoaderShow();

        var aPromise = $.ajax( {
            type: "GET",
            url:  aURL,
            data: aPayload,
            success: function( theResponse) {
                aThis.pErroresavisosResponseTree( theResponse);
            }
        });
        aPromise.fail( function( theResponse, theError) {
            aThis.pErroresavisosErrorTree( theResponse, theError);
        })
    };
    if( pSolicitarErroresavisosTree){} /* CQT */
    aPrototype.pSolicitarErroresavisosTree = pSolicitarErroresavisosTree;





    var pErroresavisosResponseTree= function( theResponse) {


        if( theResponse == null) {
            $("#did_div_erroresYavisosTree_vistaPrevia").hide();
            $("#did_Button_MostrarErroresYavisosTree").hide();
            $("#did_Button_OcultarErroresYavisosTree").hide();
            return;
        }


        var aTemplate_BoletinConErrores = $('#did_erroresYavisosTree_template_ErroresYavisosReport');
        $('#did_erroresYavisosTree_template_BoletinConErrores').template( "template_BoletinConErrores");
        $('#did_erroresYavisosTree_template_ValidacionErronea').template( "template_ValidacionErronea");
        $('#did_erroresYavisosTree_template_ErrorEnCampo').template( "template_ErrorEnCampo");


        var anExpanded = aTemplate_BoletinConErrores.tmpl( theResponse);

        var aDivToAppendTo = $('#did_div_erroresYavisosTree_vistaPreviaDiv');
        aDivToAppendTo.empty();
        anExpanded.appendTo( aDivToAppendTo);

        $("#did_div_erroresYavisosTree_vistaPrevia").show();
        $("#did_Button_MostrarErroresYavisosTree").hide();
        $("#did_Button_OcultarErroresYavisosTree").show();

        this.pAjaxLoaderHide();

    };
    if( pErroresavisosResponseTree){} /* CQT */
    aPrototype.pErroresavisosResponseTree = pErroresavisosResponseTree;





    var pErroresavisosErrorTree= function( theResponse) {

        this.pAjaxLoaderHide();

        $("#did_div_erroresYavisosTree_vistaPrevia").hide();
        $("#did_Button_MostrarErroresYavisosTree").hide();
        $("#did_Button_OcultarErroresYavisosTree").hide();
        
        var aMsg =  "Error obteniendo errores y avisos Arbol";
        console.log( aMsg);
        alert( aMsg);
    };
    if( pErroresavisosErrorTree){} /* CQT */
    aPrototype.pErroresavisosErrorTree = pErroresavisosErrorTree;










    var pAjaxLoaderShow = function() {
        $("#did_ajax_loader").show();
    };
    if( pAjaxLoaderShow){} /* CQT */
    aPrototype.pAjaxLoaderShow = pAjaxLoaderShow;


    var pAjaxLoaderHide= function() {
        $("#did_ajax_loader").hide();
    };
    if( pAjaxLoaderHide){} /* CQT */
    aPrototype.pAjaxLoaderHide = pAjaxLoaderHide;



    return aPrototype;

})();


var EstadoValidacionCtrl_Constructor = function() {

    this._v_Type = null;

    this._v_Timeout = null;

    this._v_Refrescar = false;

    this._pInit();

};
EstadoValidacionCtrl_Constructor.prototype = aEstadoValidacionCtrl_Prototype;
