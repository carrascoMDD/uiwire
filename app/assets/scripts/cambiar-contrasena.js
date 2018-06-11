'use strict';

/*
cambiar-contrasena.js
Creado 201501210023
 */



var aCambiarContrasenaCtrl_Prototype = (function() {



    var aPrototype = {};

    aPrototype._v_Type = "CambiarContrasenaCtrl";


    aPrototype._v_AppBaseURL = null;

    aPrototype._v_Timeout = null;



    var _pInit = function( theAppBaseURL) {

        this._v_Type = aPrototype._v_Type;

        this._v_AppBaseURL = theAppBaseURL;

        this._v_Timeout = null;

    };
    if( _pInit){} /* CQT */
    aPrototype._pInit = _pInit;





    var pHookupToUI = function() {

        var aThis = this;

        var anAceptarCambiarContrasenaButton = $("#did_accept_cambiarcontrasena");
        anAceptarCambiarContrasenaButton.click(function() {
            aThis.pAceptarCambiarContrasena();
        });

        var aCancelarCambiarContrasenaButton = $("#did_cancel_cambiarcontrasena");
        aCancelarCambiarContrasenaButton.click(function() {
            aThis.pCancelarCambiarContrasena();
        });

        this.pAjaxLoaderHide();

        this.pHideError();

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




    var pHideFormCambiarContrasena = function() {

        var aFormCambiarContrasena = $("#did_form_cambiarcontrasena");
        if( !aFormCambiarContrasena || !aFormCambiarContrasena.length) {
            return;
        }
        aFormCambiarContrasena.hide();
    };
    if( pHideFormCambiarContrasena){} /* CQT */
    aPrototype.pHideFormCambiarContrasena = pHideFormCambiarContrasena;





    var pHideError = function() {

        var aSpanMensajeError = $("#did_span_mensajeError");
        if( !aSpanMensajeError || !aSpanMensajeError.length) {
            return;
        }
        aSpanMensajeError.text( "");

        var aDivMensajeError = $("#did_div_mensajeError");
        if( !aDivMensajeError || !aDivMensajeError.length) {
            return;
        }
        aDivMensajeError.hide();
    };
    if( pHideError){} /* CQT */
    aPrototype.pHideError = pHideError;





    var pShowError = function( theMessage) {

        if( !theMessage) {
           this.pHideError();
        }

        var aSpanMensajeError = $("#did_span_mensajeError");
        if( !aSpanMensajeError || !aSpanMensajeError.length) {
            return;
        }
        aSpanMensajeError.text( theMessage);

        var aDivMensajeError = $("#did_div_mensajeError");
        if( !aDivMensajeError || !aDivMensajeError.length) {
            return;
        }
        aDivMensajeError.show();
    };
    if( pShowError){} /* CQT */
    aPrototype.pShowError = pShowError;






    var pShowContrasenaCambiada = function() {

        var aDivMensajeContrasenaCambiada = $("#did_div_mensajeContrasenaCambiada");
        if( !aDivMensajeContrasenaCambiada || !aDivMensajeContrasenaCambiada.length) {
            return;
        }
        aDivMensajeContrasenaCambiada.show();
    };
    if( pShowContrasenaCambiada){} /* CQT */
    aPrototype.pShowContrasenaCambiada = pShowContrasenaCambiada;








    var pAceptarCambiarContrasena = function() {

        this.pHideError();

        var aFldContrasenaActual  = $("#did_form_cambiarcontrasena_fld_theContrasenaActual");
        var aFldContrasena        = $("#did_form_cambiarcontrasena_fld_theContrasena");
        var aFldRepetirContrasena = $("#did_form_cambiarcontrasena_fld_theRepetirContrasena");

        if( !( aFldContrasenaActual && aFldContrasenaActual.length
            && aFldContrasena && aFldContrasena.length
            && aFldRepetirContrasena && aFldRepetirContrasena.length)) {
            return;
        }

        var aContrasenaActual = aFldContrasenaActual.val();
        if( !aContrasenaActual || !aContrasenaActual.trim()) {
            this.pShowError( "Debe introducir su contraseña actual");
            return;
        }

        var aContrasena = aFldContrasena.val();
        if( !aContrasena || !aContrasena.trim()) {
            this.pShowError( "Debe introducir la nueva contraseña");
            return;
        }

        var aRepetirContrasena = aFldRepetirContrasena.val();
        if( !aRepetirContrasena || !aRepetirContrasena.trim()) {
            this.pShowError( "Debe repetir la nueva contraseña");
            return;
        }

        if( !( aRepetirContrasena == aContrasena)) {
            this.pShowError( "Debe repetir exactamente la nueva contraseña");
            return;
        }

        this.pCambiarContrasenaRequest( aContrasenaActual, aContrasena);
    };
    if( pAceptarCambiarContrasena){} /* CQT */
    aPrototype.pAceptarCambiarContrasena = pAceptarCambiarContrasena;








    var pCancelarCambiarContrasena = function() {

    };
    if( pCancelarCambiarContrasena){} /* CQT */
    aPrototype.pCancelarCambiarContrasena = pCancelarCambiarContrasena;








    var pCambiarContrasenaRequest = function( theContrasenaActual, theContrasena) {

        if( !theContrasenaActual) {
            return;
        }

        if( !theContrasena) {
            return;
        }

        if( !this._v_AppBaseURL) {
            return;
        }

        var aThis = this;

        var aURL = this._v_AppBaseURL + "/administracionOperadores/cambiarContrasenaOperadorConectadoJSON";

        var aData = {
            "theContrasenaActual":  theContrasenaActual,
            "theContrasena":        theContrasena,
            "theRepetirContrasena": theContrasena
        };

        this.pHideError();

        this.pAjaxLoaderShow();

        var aPromise = $.ajax( {
            type: "POST",
            url:  aURL,
            data: aData,
            success: function( theResponse) {
                aThis.pCambiarContrasenaResponse( theResponse);
            }
        });
        aPromise.fail( function( theResponse, theError) {
            aThis.pCambiarContrasenaError( theResponse, theError);
        })

    };
    if( pCambiarContrasenaRequest){} /* CQT */
    aPrototype.pCambiarContrasenaRequest = pCambiarContrasenaRequest;






    var pCambiarContrasenaResponse = function( theResponse) {

        this.pAjaxLoaderHide();

        if( ( theResponse == null) || ( typeof( theResponse) == "string") ) {
            this.pShowError( "Error comunicando con el servidor");
            return;
        }

        if( !theResponse.vSuccess) {

            var aMessage =  "Error cambiando contraseña";

            if( theResponse.vStatusOperacion) {
                aMessage += (" " + theResponse.vStatusOperacion)
            }

            if( theResponse.vDetallesOperacion) {
                aMessage += (" " + theResponse.vDetallesOperacion)
            }

            this.pShowError( aMessage);

            console.log( aMessage);

            return;
        }

        console.log("CambiarContrasena Success");

        this.pShowContrasenaCambiada();

        this.pHideFormCambiarContrasena();

    };
    if( pCambiarContrasenaResponse){} /* CQT */
    aPrototype.pCambiarContrasenaResponse = pCambiarContrasenaResponse;






    var pNavegarAPaginaLogin = function() {
        if( !this._v_AppBaseURL) {
            return;
        }

        var aURL = this._v_AppBaseURL + "/login"

        window.location.href = aURL;

    };
    if( pNavegarAPaginaLogin){} /* CQT */
    aPrototype.pNavegarAPaginaLogin = pNavegarAPaginaLogin;




    var pCambiarContrasenaError = function( theResponse, theError) {
        if( theResponse) {} /* CQT */
        if( theError) {} /* CQT */

        this.pAjaxLoaderHide();

        var aMessage =  "Error cambiando contraseña";

        this.pShowError( aMessage);

        console.log( aMessage);
    };
    if( pCambiarContrasenaError){} /* CQT */
    aPrototype.pCambiarContrasenaError = pCambiarContrasenaError;








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


var CambiarContrasenaCtrl_Constructor = function( theAppBaseURL) {

    this._v_Type = null;

    this._v_AppBaseURL = null;

    this._v_Timeout = null;

    this._pInit( theAppBaseURL);

};
CambiarContrasenaCtrl_Constructor.prototype = aCambiarContrasenaCtrl_Prototype;
