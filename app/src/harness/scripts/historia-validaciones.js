'use strict';

/*
historia-validaciones.js
Creado 201407200026
 */



var aHistoriaValidacionesCtrl_Prototype = (function() {

    var COMENZAR_ACTUALIZAR = true;

    var INTERVALO_ACTUALIZACION_PORDEFECTO = 3000;

    var INTERVALO_ACTUALIZACION_MINIMO = 1000;


    var SOME_FIELDS = [
        [ "fechaInforme"],
        [ "informeAUsuario"],
        [ "tipoBoletinUrlPath"],
        [ "idFichero"],
        [ "provinciaFichero"],
        [ "anoFichero"],
        [ "mesFichero"]
    ];




    var aPrototype = {};

    aPrototype._v_Type = "HistoriaValidacionesCtrl";


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

        if( this._v_Refrescar) {
            aPausarButton.show();
            aContinuarButton.hide();
        }
        else {
            aPausarButton.hide();
            aContinuarButton.show();
        }

        $('#did_div_errorComunicacion').hide();
        $('#did_errorComunicacion').html( "");
        
        this.pHookupToBotonesLanzar();

    };
    if( pHookupToUI){} /* CQT */
    aPrototype.pHookupToUI = pHookupToUI;





    var pHookupToBotonesLanzar = function() {

        var aThis = this;

        var someBotones = $(".boton_lanzarValidacionAvisosYerroresINE");
        someBotones.click( function( theEvent) {
            if( !theEvent) {
                return false;
            }
            var aTarget = theEvent.target;
            if( !aTarget) {
                return false;
            }

            var aTargetButton = aTarget;
            if( !( aTargetButton.nodeName.toUpperCase() == "BUTTON")) {
                aTargetButton = aTargetButton.parentElement;
            }
            if( !aTargetButton) {
                return false;
            }

            var aForm = aTargetButton.parentElement;
            if( !aForm) {
                return false;
            }
            if( !( aForm.nodeName.toUpperCase() == "FORM")) {
                return false;
            }

            var aFormJQ = $( aForm);

            var aRecienteInput = aFormJQ.find("input[name='reciente']");
            if( !aRecienteInput) {
                return false;
            }
            var aReciente = aRecienteInput.val();
            if( aReciente) {
                if( !confirm( "Ya ha lanzado recientemente un proceso de validaciones del mismo criterio,\n" +
                    " y el proceso no ha terminado todavía.\n." +
                    "Por favor, Confirme para forzar el lanzamiento de validaciones del criterio.\n" +
                    "o cancele, para abandonar el lanzamiento del proceso.")) {
                    return false;
                }
            }

            var aForzarInput = aFormJQ.find("input[name='forzar']");
            if( !aForzarInput) {
                return false;
            }
            aForzarInput.val( "1");

            aForm.submit();
        });

    };
    if( pHookupToBotonesLanzar){} /* CQT */
    aPrototype.pHookupToBotonesLanzar = pHookupToBotonesLanzar;




    var pUnhookFromBotonesLanzar = function() {
        var someBotones = $(".boton_lanzarValidacionAvisosYerroresINE");
        someBotones.off( "click");
    };
    if( pUnhookFromBotonesLanzar){} /* CQT */
    aPrototype.pUnhookFromBotonesLanzar = pUnhookFromBotonesLanzar;



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
        $('#did_errorComunicacion').html( "");
        
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


        var someCriteriosYUltimaFaseRealizada = theResponse.criteriosYUltimaFaserealizada;
        var aNumCriteriosYUltimaFaseRealizada = someCriteriosYUltimaFaseRealizada.length;
        for( var aCriterioIdx = 0; aCriterioIdx < aNumCriteriosYUltimaFaseRealizada; aCriterioIdx++) {
            var aCriterioYUltimaFaseRealizada = someCriteriosYUltimaFaseRealizada[ aCriterioIdx];
            aCriterioYUltimaFaseRealizada.idFichero = theResponse.idFichero;
        }

        var someFasesRealizadas = theResponse.fasesRealizadas;
        var aNumFasesRealizadas = someFasesRealizadas.length;
        for( var aFaseIdx = 0; aFaseIdx < aNumFasesRealizadas; aFaseIdx++) {
            var aFaseRealizada = someFasesRealizadas[ aFaseIdx];
            aFaseRealizada.idFichero = theResponse.idFichero;
        }

        this.pFillUIValues( SOME_FIELDS, theResponse);

        this.pFillUIUltimas( theResponse);

        this.pFillUIHistoria( theResponse);

        if( theResponse.informeAusuario) {
            $("#did_div_informeAUsuario").show();
        }
        else {
            $("#did_div_informeAUsuario").hide();
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




    var pFillUIUltimas = function( theResponse) {

        if( theResponse == null) {
            return;
        }

        this.pUnhookFromBotonesLanzar();

        var aTemplate_Ultimas = $('#did_historiaValidaciones_template_Ultimas');
        $('#did_historiaValidaciones_template_Ultimas_tr').template( "template_Ultimas_tr");
        var anExpanded_Ultimas = aTemplate_Ultimas.tmpl( theResponse);
        var aTbodyToAppendTo_Ultimas = $('#did_tbody_historiaValidaciones_Ultimas');
        aTbodyToAppendTo_Ultimas.empty();
        anExpanded_Ultimas.appendTo( aTbodyToAppendTo_Ultimas);

        this.pHookupToBotonesLanzar();
    };
    if( pFillUIUltimas){} /* CQT */
    aPrototype.pFillUIUltimas = pFillUIUltimas;




    var pFillUIHistoria = function( theResponse) {

        if( theResponse == null) {
            return;
        }
        var aTemplate_Historia = $('#did_historiaValidaciones_template_Historia');
        $('#did_historiaValidaciones_template_Historia_tr').template( "template_Historia_tr");
        var anExpanded_Historia = aTemplate_Historia.tmpl( theResponse);
        var aTbodyToAppendTo_Historia = $('#did_tbody_historiaValidaciones_Historia');
        aTbodyToAppendTo_Historia.empty();
        anExpanded_Historia.appendTo( aTbodyToAppendTo_Historia);
    };
    if( pFillUIHistoria){} /* CQT */
    aPrototype.pFillUIHistoria = pFillUIHistoria;




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


var HistoriaValidacionesCtrl_Constructor = function() {

    this._v_Type = null;

    this._v_Timeout = null;

    this._v_Refrescar = false;

    this._pInit();

};
HistoriaValidacionesCtrl_Constructor.prototype = aHistoriaValidacionesCtrl_Prototype;
